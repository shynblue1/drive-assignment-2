'use client';
import useSearchData from '@/app/hooks/useSearchData';
import Link from 'next/link';
import { useEffect } from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image';
const SpecificNews = () => {
  const params = useParams();
  const { slug } = params;
  const { searchResults, loadingSearch, errorSearch, fetchSpecificNews } = useSearchData();

  useEffect(() => {
    if (slug && slug.length >= 2) {
      const decodedTitle = decodeURIComponent(slug[1]);
      fetchSpecificNews(slug[0], decodedTitle ?? "");
    }
  }, []);
  console.log(errorSearch)
  return (
    <div className='flex flex-col p-2 items-center min-h-screen bg-white font-sans'>
      <span className="text-2xl font-semibold align-self-center mt-4">News</span>
      <main className="flex flex-col justify-center items-center p-10 gap-4 w-screen">
        {/* Search results */}
        <div className="w-full max-w-3xl ">
          {/* Display search results here */}
          {searchResults?.length == 0 && !loadingSearch && <span className='text-gray-500'>No news to display.</span>}
          <div className="grid grid-col-1 gap-3">
            {/* Map through search results and display them */}
            {loadingSearch && <div>Loading...</div>}
            {errorSearch && <div>Error: {errorSearch}</div>}
            {!loadingSearch && !errorSearch && searchResults?.map((news: any, index: number) => (

              <div
                key={index}
                className=" p-4 gap-2 rounded-lg flex flex-col "
              >
                <Link href={`/news/${news?.source?.name}/${news?.title}`} replace key={index}>
                  <span className="text-xl font-semibold text-blue-500">{news.title}</span>
                </Link>
                <p className="text-xs text-gray-500 mt-2">{new Date(news.publishedAt).toLocaleDateString()}</p>
                <p className="text-gray-700 text-sm">{news.description}
                </p>
                <p>{news?.content}</p>
                <Image src={news?.urlToImage ?? 'file.svg'} alt={'News Image'} height={500} width={700} unoptimized={true} />
              </div>
            ))}
          </div>
        </div>
      </main >
    </div >
  )
}

export default SpecificNews