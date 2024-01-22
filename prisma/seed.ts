import { PrismaClient } from "@prisma/client";
// 初始化 Prisma Client
const prisma = new PrismaClient();

async function main() {
  // await prisma.slide.createMany({
  //   data: [
  //     {
  //       title: "Exploring the universe and searching for new worlds",
  //       url: "",
  //       videoUrl: "./video/Eagle.mp4",
  //     },
  //     {
  //       title: "Exploring our solar system",
  //       url: "",
  //       videoUrl: "./video/MSR.m4v",
  //     },
  //     {
  //       title: "Studying our home planet from air and space",
  //       url: "",
  //       videoUrl: "./video/OMB.m4v",
  //     },
  //     {
  //       title: "Looking for life beyond Earth",
  //       url: "",
  //       videoUrl: "./video/Clippe.mp4",
  //     },
  //     {
  //       title: "Creating robots to go where humans can’t",
  //       url: "",
  //       videoUrl: "./video/Robot.mp4",
  //     },
  //     {
  //       title: "Developing technology to improve life on Earth",
  //       url: "",
  //       videoUrl: "./video/NISAR.mp4",
  //     },
  //   ]
  // })
  // await prisma.topic.create({
  //   data: {
  //     name: "jpl-life",
  //     title: "JPL LIFE",
  //     subtitle: "",
  //     maskUrl: "/topics/jpl-life.jpg",
  //     news: {
  //       createMany: {
  //         data: [
  //           {
  //             title: "This US-Indian Satellite Will Monitor Earth’s Changing Frozen Regions",
  //             content: "",
  //             maskUrl: "/news/1.jpg"
  //           },
  //           {
  //             title: "What Are Some Skywatching Highlights in January 2024?",
  //             content: "",
  //             maskUrl: "/news/2.jpg"
  //           },
  //           {
  //             title: "NASA’s Curiosity Rover Captures a Martian Day, From Dawn to Dusk",
  //             content: "",
  //             maskUrl: "/news/3.jpg"
  //           },
  //           {
  //             title: "NASA’s Juno to Get Close Look at Jupiter’s Volcanic Moon Io on Dec. 30",
  //             content: "",
  //             maskUrl: "/news/4.jpg"
  //           },
  //           {
  //             title: "NASA’s Deep Space Network Turns 60 and Prepares for the Future",
  //             content: "",
  //             maskUrl: "/news/5.jpg"
  //           },
  //           {
  //             title: "Meet the Infrared Telescopes That Paved the Way for NASA’s Webb",
  //             content: "",
  //             maskUrl: "/news/6.jpg"
  //           },
  //           {
  //             title: "As the Arctic Warms, Its Waters Are Emitting Carbon",
  //             content: "",
  //             maskUrl: "/news/7.jpg"
  //           },
  //           {
  //             title: "NASA’s Tech Demo Streams First Video From Deep Space via Laser",
  //             content: "",
  //             maskUrl: "/news/8.jpg"
  //           },
  //           {
  //             title: "NASA Study Finds Life-Sparking Energy Source and Molecule at Enceladus",
  //             content: "",
  //             maskUrl: "/news/9.jpg"
  //           },
  //           {
  //             title: "NASA’s NEOWISE Celebrates 10 Years, Plans End of Mission",
  //             content: "",
  //             maskUrl: "/news/10.jpg"
  //           },
  //           {
  //             title: "NASA’s Perseverance Rover Deciphers Ancient History of Martian Lake",
  //             content: "",
  //             maskUrl: "/news/11.jpg"
  //           },
  //         ]
  //       }
  //     }
  //   },
  // })
  // await prisma.topic.createMany({
  //   data: [
  //     {
  //       name: "solar-system",
  //       title: "SOLAR SYSTEM",
  //       subtitle: "Exploring Our Planetary Neighborhood",
  //       maskUrl: "/topics/solar-system.jpg",
  //     },
  //     {
  //       name: "mars",
  //       title: "AT WORK ON MARS",
  //       subtitle: "Mars Exploration at JPL",
  //       maskUrl: "/topics/mars.jpg",
  //     },
  //     {
  //       name: "earth",
  //       title: "EARTH SCIENCE",
  //       subtitle: "Studying Our Home Planet at JPL",
  //       maskUrl: "/topics/earth.jpg",
  //     },
  //     {
  //       name: "climate-change",
  //       title: "UNDERSTANDING CLIMATE CHANGE",
  //       subtitle: "",
  //       maskUrl: "/topics/climate-change.jpg",
  //     },
  //     {
  //       name: "weather",
  //       title: "UNDERSTANDING WEATHER",
  //       subtitle: "",
  //       maskUrl: "/topics/weather.jpg",
  //     },
  //     {
  //       name: "exoplanets",
  //       title: "EXPLORING EXOPLANETS",
  //       subtitle: "JPL's Search for New Worlds",
  //       maskUrl: "/topics/exoplanets.jpg",
  //     },
  //     {
  //       name: "stars-and-galaxies",
  //       title: "STARS AND GALAXIES",
  //       subtitle: "Exploring Beyond our Solar System",
  //       maskUrl: "/topics/stars-and-galaxies.jpg",
  //     },
  //     {
  //       name: "technology",
  //       title: "TECHNOLOGY",
  //       subtitle: "Inventing the Future",
  //       maskUrl: "/topics/technology.jpg",
  //     },
  //     {
  //       name: "robotics",
  //       title: "ROBOTICS AT JPL",
  //       subtitle: "Precursors to Human Exploration",
  //       maskUrl: "/topics/robotics.jpg",
  //     },
  //     {
  //       name: "asteroid-watch",
  //       title: "ASTEROID WATCH",
  //       subtitle: "",
  //       maskUrl: "/topics/asteroid-watch.jpg",
  //     },
  //     {
  //       name: "cubesats-and-smallsats",
  //       title: "CUBESATS AND SMALLSATS",
  //       subtitle: "A New Revolution in Spacecraft",
  //       maskUrl: "/topics/cubesats-and-smallsats.jpg",
  //     }
  //   ]
  // })
  await prisma.target.createMany({
    data: [
      {
        name: "Earth",
        imgUrl: "/celestial/Earth.webp",
      },
      {
        name: "Mars",
        imgUrl: "/celestial/Mars.webp",
      },
      {
        name: "Jupiter",
        imgUrl: "/celestial/Jupiter.webp",
      },
      {
        name: "Europa",
        imgUrl: "/celestial/Europa.webp",
      },
      {
        name: "Asteroids and Comets",
        imgUrl: "/celestial/Vesta.webp",
      },
      {
        name: "Saturn",
        imgUrl: "/celestial/satur.webp",
      },
      {
        name: "Interstellar Space",
        imgUrl: "/celestial/interstellar.webp",
      },
      {
        name: "Exoplanets",
        imgUrl: "/celestial/exoplanets.webp",
      },
      {
        name: "Stars and Galaxies",
        imgUrl: "/celestial/stars.webp",
      },
    ]
  })
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // 关闭 Prisma Client
    await prisma.$disconnect();
  });

