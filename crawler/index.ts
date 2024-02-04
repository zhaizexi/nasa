import xCrawl from "x-crawl";
import fs from "fs";
import { load } from "cheerio";
import { missionHtml } from "./test";
import { PrismaClient } from "@prisma/client";
import type { Target,Topic,MissionType, MissionStatus } from "@prisma/client";
import { kebabCase,toLower } from 'lodash';

const host = "https://www.jpl.nasa.gov";
const myXCrawl = xCrawl({
  mode: "sync",
  maxRetry: 3,
  intervalTime: { max: 2000, min: 1000 },
});
const prisma = new PrismaClient();

async function getMissionList() {
  const results = await myXCrawl.crawlHTML(
    new Array(14).fill(0).map((_, i) => `${host}/missions?page=${i+1}`)
  );
  results.forEach((result) => {
    const { isSuccess, data } = result;
    if(!isSuccess) {
      return
    }
    const { html } = data!;
    const $ = load(html);
    $('a[href^="/missions/"]').each((i, el) => {
      const href = $(el).attr('href');
      fs.appendFile('./mission/list.txt', `${href} \n`, (err) => {
        if (err) throw err;
      });
    });
  });
}

async function getMissions() {
  const targets = await prisma.target.findMany()

  fs.readFile('./mission/list.txt', 'utf8', async (err, list:string) => {
    const missions = list.split('\n').filter(m => m.length > 0);
    for (let i=5;i<6;i++) {
      const url = host+missions[i]
      await getMission(url, {
        targets
      }).catch(console.error)
    }
  });
}

async function getMission(url:string, {
  
}: {
  targets: Target[]
}) {
  const result = await myXCrawl.crawlHTML(url);
  const { isSuccess, data } = result;
  if(!isSuccess) {
    return
  }
  const { html } = data!;
  const $ = load(html);
  const abbr = $('.text-body-sm.mb-3.font-normal.tracking-normal').text().trim();
  const name = url.match(/\/missions\/(.*)/)![1].trim();
  const description = $('.text-xl.leading-relaxed').text().trim();
  const href = $('.BaseButton.text-contrast-none.mt-8').attr('href');
  const fields = $('.lg\\:col-span-2.col-span-5').map((i, el) => {
    const contents = $(el).contents()
    const fieldName = $(contents[0]).text().trim();
    const fieldValue = $(contents[contents.length-1]).text().trim();
    return {
      fieldName,
      fieldValue
    };
  }).toArray();
  const paragraphs = $('.BlockText.text-body-lg').children('p').map((i, el) => $(el).text().trim()).toArray();
  const instruments = $('.instrument').map((i, el) => $(el).text().trim()).toArray();
  const sites = $('.bg-gray-light.group').map((i, el) => {
    const link = $(el).attr('href');
    const linkName = $(el).text().trim();
    return {
      link,
      linkName
    };
  }).toArray();
  const match = ($('.MixinCarousel.-cards').attr('aria-label') || '').match(/^More about (.*)(,?.*)/);
  const topic = match ? match[1] : '';
  const imgUrl = $('img[data-v-502ed66d]').attr('src');
  const imgFile = await myXCrawl.crawlFile({
    url: imgUrl!,
    storeDir: './images',
  })
  if(!imgFile.isSuccess) {
    throw new Error('Failed to download image');
  }
  const { fileName,fileExtension } = imgFile.data!.data;
  const maskUrl = '/mission/'+fileName+fileExtension;
  const content = paragraphs.join('\n');
  const launchDateStr = fields.find(f => f.fieldName === 'Launch Date')?.fieldValue || 0;
  const launchDate = new Date(launchDateStr).toISOString();
  const targets = fields.find(f => f.fieldName === 'Target')?.fieldValue?.split(',') || [];
  const status = fields.find(f => f.fieldName === 'Status')?.fieldValue || '';
  const relateSite = sites.reduce((acc, cur) => {
    acc[cur.linkName] = cur.link || '';
    return acc;
  }, {} as Record<string, string>);
  const missionTypes = fields.find(f => f.fieldName === 'Type')?.fieldValue?.split(',') || [];
  await prisma.mission.create({
    data: {
      name,
      maskUrl,
      abbr,
      href,
      description,
      content,
      launchDate,
      status: toLower(status) as MissionStatus,
      relateSite,
      instruments,
      topics: {
        create: [
          {
            topic: {
              connect: {
                name: kebabCase(topic)
              }
            }
          }
        ]
      },
      types: {
        create: missionTypes.map(t => ({
          type: {
            connect: {
              name: t.trim()
            }
          }
        }))
      },
      targets: {
        create: targets.map(t => ({
          target: {
            connect: {
              name: t.trim()
            }
          }
        }))
      }
    }
  })
}

async function main() {
  // const targets = await prisma.target.findMany()
  // try {
  // await getMission('https://www.jpl.nasa.gov/missions/the-farside-seismic-suite', {
  //   targets
  // })
  // } catch (error) {
  //   console.error(error)
  // }
  await getMissions()
}

main()
