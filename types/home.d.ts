interface Site {
  key: string;
  title: string;
  url: string;
}

interface Category {
  name: string;
  items: CategoryItem[];
}

interface CategoryItem {
  name: string;
  href: string;
}
interface Engage {
  subject: string;
  name: string;
  img: string;
}