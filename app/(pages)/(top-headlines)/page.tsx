'use client';
import Image from "next/image";

import useTopHeadlinesData from "../../hooks/useTopHeadlinesData";
import Link from "next/link";

export default function Home() {
  const { topHeadlines, loadingTopHeadlines, errorTopHeadlines } = useTopHeadlinesData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-5 ">
        <span className="text-2xl font-semibold align-self-center">Top Headlines</span>

        <div className="py-5">
          {loadingTopHeadlines && <div>Loading...</div>}
          {errorTopHeadlines && <div>Error: {errorTopHeadlines}</div>}
          {!loadingTopHeadlines && !errorTopHeadlines && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topHeadlines?.map((news: any, index: number) => (
                <div
                  key={index}
                  className="border-1 border-gray-200 p-4 gap-2 rounded-lg flex flex-col"
                >
                  <span className="text-xl font-semibold">{news.title}</span>
                  <p className="text-gray-700">{news.description}
                    <span className="text-xs text-gray-500 mt-2">{new Date(news.publishedAt).toLocaleDateString()}</span>
                  </p>
                  <Image
                    src={news.urlToImage}
                    alt={news.title}
                    width={400}
                    height={200}
                    className="object-cover rounded-md"
                    unoptimized={true}
                  />
                  <Link
                    href={news.url}
                    target="_blank"
                    className="text-blue-500 hover:underline mt-2"
                  >
                    Read more
                  </Link>
                </div>
              ))}
            </div>
          )}

        </div>
        {/* <Image
          // className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}

      </main>
    </div>
  );
}
