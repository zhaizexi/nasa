interface Site {
  key: string;
  title: string;
  url: string;
}
interface Slide {
  title: string;
  href: string;
  video: string;
}

interface News {
  title: string;
  subject: string;
  href: string;
  img: string;
}

interface Celestial {
  name: string;
  missions: {
    current: number;
    past: number;
  }
  img: string;
}