interface Site {
  key: string;
  title: string;
  url: string;
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

interface Engage {
  subject: string;
  name: string;
  img: string;
}