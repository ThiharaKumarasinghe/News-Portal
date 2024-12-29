import Image from "next/image";
import bannerImg from "@/assets/banner.jpg";
import { Button } from "./ui/button";
const Banner = () => {
  return (
    <section className="bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="w-full">
          <Image
            src={bannerImg}
            alt="Banner Image"
            placeholder="blur"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        {/* content */}
        <div className=" space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Stay Updated with the Latest News
          </h1>
          <p className="text-lg text-gray-600">
            Get the most recent updates and insights from around the world
            delivered to you in real-time.
          </p>
          <Button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Explore News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
