import { MDXRemote } from "next-mdx-remote/rsc";
import prisma from "@/lib/prisma";
import ErrorPage from "./empty";
import Image from "next/image";
import { startCase } from "lodash-es";
import Link from "next/link";
import { Suspense } from "react";
import RelatedItems from "./components/RelatedItems";
import LoadingItems from "./components/LoadingItems";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import { Prisma } from "@prisma/client";
import RelatedMissions from "./components/RelatedMissions";

export default async function MissionPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const mission = await prisma.mission.findUnique({
    where: {
      name: slug,
    },
    include: {
      target: true,
      topic: true,
    },
  });
  if (mission === null) {
    return <ErrorPage />;
  }
  return (
    <>
      <div className="max-w-screen-3xl relative mx-auto bg-black">
        <div className="w-full h-full absolute before:absolute before:top-1/2 before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent">
          <Image
            src={mission.maskUrl}
            width={1023}
            height={767}
            alt={mission.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative inset-0 container mx-auto lg:mb-0 lg:py-48 grid grid-cols-12 gap-6 sm:pt-24 py-10 z-20 text-white">
          <div className="flex flex-col lg:px-10 3xl:px-0  col-span-12 lg:col-span-6  px-4 text-contrast">
            <p className="text-body-sm mb-3 font-normal tracking-normal">
              {mission.abbr || mission.name}
            </p>
            <h1 className="text-h1-alt break-normal">
              {startCase(mission.name)}
            </h1>
            <p className="xl:text-2xl lg:text-md xl:pr-26 xl:leading-normal text-xl leading-relaxed">
              {mission.description}
            </p>
            {mission.href && (
              <Link
                className="flex items-center space-x-2 mt-8 w-fit px-5 py-3 border-2 border-jpl-red text-jpl-red text-xl hover:bg-jpl-red hover:text-white"
                href={mission.href}
              >
                <span>Visit Mission Website</span>
                <CropOutlinedIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="lg:relative lg:z-20 lg:-mt-20 lg:pl-0 lg:mb-20 pl-4 mb-12 grid grid-cols-12">
        <div className="col-start-1 lg:col-start-2 col-end-13 lg:py-12 lg:px-0 text-body-lg px-8 py-10 pr-0 bg-neutral-100">
          <div className="gap-y-10 grid grid-cols-10">
            <div className="lg:block hidden col-span-1 row-span-2"></div>
            <div className="lg:col-span-2 col-span-5">
              <p className="text-jpl-red text-subtitle mb-3">Launch Date</p>{" "}
              <p>
                {mission.launchDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="lg:col-span-2 col-span-5">
              <p className="text-jpl-red text-subtitle mb-3">Type</p>
              {mission.type}
            </div>
            <div className="lg:col-span-2 col-span-5">
              <p className="text-jpl-red text-subtitle mb-3">Target</p>
              {mission.target?.name}
            </div>
            <div className="lg:col-span-2 col-span-5">
              <p className="text-jpl-red text-subtitle mb-3">Status</p>
              {mission.status}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-12 gap-6 lg:px-0 container px-4 mx-auto py-10">
        <article className="prose prose-2xl col-start-2 col-end-8 max-w-none">
          <h2>About the mission</h2>
          <MDXRemote source={mission.content || ""} />
        </article>
        {mission.instruments && (
          <div className="col-start-9 col-end-13">
            <p className="pt-10 font-secondary mb-5 text-base leading-tight tracking-wider uppercase">
              Instruments
            </p>
            <ul className="lg:mb-5 flex flex-wrap items-start mb-3 space-y-2">
              {mission.instruments.map((instrument) => (
                <li
                  key={instrument}
                  className="flex items-center w-full align-middle animated"
                >
                  <span className="w-7 h-0.5 bg-jpl-red mr-2"></span>
                  <span>{instrument}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="col-start-2 col-end-13 lg:mt-24 mt-18 lg:mb-18 mb-10">
          <h2 className="font-primary text-gray-dark lg:text-6xl text-3xl font-semibold leading-normal tracking-normal uppercase mb-6">
            More about {mission.topic?.name}
          </h2>
          <Suspense fallback={<LoadingItems />}>
            <RelatedItems topicId={mission.topicId} />
          </Suspense>
        </div>
        {mission.relateSite && (
          <div className="lg:mb-18 mb-10 col-start-2 col-end-9">
            {Object.keys(mission.relateSite).map((key) => {
              const site = mission.relateSite as Prisma.JsonObject;
              return (
                <Link
                  key={key}
                  className="flex items-center justify-between space-x-2 mt-8 w-full px-5 py-3 bg-neutral-100 text-2xl hover:bg-neutral-200"
                  href={site[key] as string}
                >
                  <span>{key}</span>
                  <CropOutlinedIcon />
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="bg-neutral-100 lg:py-24 py-12 ">
        <div className="container mx-auto px-4 grid grid-cols-12 gap-6">
          <div className="col-start-2 col-end-13">
            <Suspense fallback={<LoadingItems />}>
              <RelatedMissions targetId={mission.targetId} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
