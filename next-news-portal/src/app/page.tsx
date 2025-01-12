import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { NewsItem } from "@/types/news";
import Image from "next/image";

export default async function Home() {
  const response = await fetch('https://news-api-next-js-kappa.vercel.app/api/news');
  const news = await response.json();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner/>
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        {/* news */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
          {
            news.slice(0,4).map((item: NewsItem)=>(
              <div key={item._id}>
                {item.title}
                <NewsCard key={item._id} item={item}/>
              </div>
            ))
          }
        </div>
      </div>

      {/* For letter news */}
      <NewsLetter/>
    </div>
  );
}
 