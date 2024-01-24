import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Image from "next/image";

import bgImage from "@/assets/image/astronount.jpeg";
const ErrorPage = () => {
  return (
    <div className="h-screen w-full  py-40  bg-stone-900 text-white  overflow-hidden">
      <div className="mx-auto container grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1 space-y-14 flex flex-col justify-center">
          <div className="text-[70px] font-bold">
            Houston, we have a problem!
          </div>
          <div className="text-3xl">
            Error 404, the page you are looking for doesn’t exist.
          </div>
          <Link className="flex items-center text-2xl" href="/">
            <HomeOutlinedIcon className="inline-block mr-2" />
            Take me home
          </Link>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Image
            src={bgImage}
            alt="error"
            style={{
              margin: "auto",
              width: "80%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
