"use client";

import { useEffect, useState } from "react";
import Leftbar from "../components/leftbar";
import Navbar from "../components/navbar";
import axios from "axios";

export default function Home() {
  const [fetchData, setFetchData] = useState({ articles: [] });
  const API = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-24&sortBy=publishedAt&apiKey=d45c3485f8cf4038907c5eefa3af2e39`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(API);

        setFetchData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    }
    fetchNews();
  }, [API]);

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
          {fetchData.articles &&
            fetchData.articles.slice(0, 5).map((news, index) => (
              <div className="flex  max-w-[1000px] mx-auto border-b-2 border-black">
                <div className="flex flex-col w-[625px] mr-2 space-y-1.5">
                  <div key={index}>
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
                    <img className="w-[100%] h-[100%]" src={news.urlToImage} />
                    <p className="text-xs">
                      This Photo Displays Seth's Account Before The Trip To
                      Georgia
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
