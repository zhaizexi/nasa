import prisma from "@/lib/prisma";
import NewsSection from "./NewsSection";

interface Props {
  topicId: string;
}

const RelatedItems = async({ topicId }: Props) => {
  const news = await prisma.news.findMany({
    take: 11,
    // where: {
    //   topicId:topicId
    // },
    include: {
      topic: true,
    },
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <NewsSection news={news} />;
};


export default RelatedItems;