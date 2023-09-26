"use client";

import { useEffect, useState } from "react";
import Leftbar from "../components/leftbar";
import Navbar from "../components/navbar";
import axios from "axios";

export default function Home() {
  interface NewsItem {
    title: string;
    description: string;
    author: string;
    publishedAt: string;
    urlToImage: string;
  }
  
  const API = `https://api.newscatcherapi.com/v2/search?q=Tesla`;
  const API_KEY = '4aaGGHb99yBHpwfYDQE61NKE-vGeR-XSnBBBNZdt38g';

  const [fetchData, setFetchData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(API, {
          headers: {
            'x-api-key': API_KEY
          }
        });
        setFetchData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (fetchData.length === 0) {
    return <div>No news available</div>;
  }
  
  
  return (
    <div>
      <Navbar />
      <div className="my-4 flex items-center justify-center mx-auto flex-col w-[100%] ">
        <h1 className="text-5xl  italic font-black lg:block hidden ">
          INFINITE NEWS
        </h1>
        <h4 className="text-md py-2 lg:block hidden">The News Never Ends</h4>
      </div>
      <div className="flex">
        <div className="ml-[225px]">
        {fetchData.map((news, index) => (
            <div
              className="flex  max-w-[1000px] mx-auto border-b-2 border-black"
              key={index}
            >
              <div className="flex flex-col w-[625px] mr-2 space-y-1.5">
                <div>
                  <h1 className="text-4xl font-semibold text-gray-600">
                    {news.title}
                  </h1>
                  <h3 className="text-sm">{news.description}</h3>
                  <h5 className="text-xs text-gray-700">By {news.author}</h5>
                  <h5 className="font-black text-xs text-gray-500">
                    {news.publishedAt}
                  </h5>
                </div>
              </div>

              <div className="w-[625px] ">
                <figure className="max-w-[450px]  mt-2">
                  <img
                    className="w-[100%] h-[100%]"
                    src={news.urlToImage}
                    alt={news.title}
                  />
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius repellendus impedit molestias eum cumque earum sequi, itaque libero quaerat!
                  </p>
                </figure>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-[75px]">
          <Leftbar />
        </div>
      </div>
    </div>
  );
}
