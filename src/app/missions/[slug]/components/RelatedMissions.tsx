import prisma from "@/lib/prisma";
import EngageSection from "@/components/EngageSection";

interface Props {
  targetId: string;
}

const RelatedMissions = async({ targetId }: Props) => {
  const engages: Engage[] = [
    {
      name: "Events",
      subject: "Calendar",
      img: "/engage/event.jpg",
    },
    {
      name: "JPL and the Community",
      subject: "",
      img: "/engage/community.jpg",
    },
    {
      name: "Lecture Series",
      subject: "",
      img: "/engage/lecture.jpg",
    },
    {
      name: "Events1",
      subject: "Calendar",
      img: "/engage/event.jpg",
    },
    {
      name: "JPL and the Community1",
      subject: "",
      img: "/engage/community.jpg",
    },
    {
      name: "Lecture Series1",
      subject: "",
      img: "/engage/lecture.jpg",
    },
  ];
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <EngageSection items={engages} title="EXPLORE OTHER MISSIONS" center={false} />;
};


export default RelatedMissions;