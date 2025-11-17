'use client'
import SearchBar from '@/app/components/Searchbar'
import useSearchData from '@/app/hooks/useSearchData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SearchNews = () => {
  const { searchResults, loadingSearch, errorSearch, fetchSearchResults } = useSearchData();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    fetchSearchResults(query);
  }, [query]);


  return (
    <div className='flex flex-col p-2 items-center min-h-screen bg-white font-sans'>
      <span className="text-2xl font-semibold align-self-center mt-4">Search News</span>
      <main className="flex flex-col justify-center items-center p-10 gap-4 w-screen">
        <div className="w-full max-w-3xl">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        {/* Search results */}
        <div className="w-full max-w-3xl ">
          {/* Display search results here */}
          {searchResults?.length == 0 && !loadingSearch && <span className='text-gray-500'>No search results to display.</span>}
          <div className="grid grid-col-1 gap-3">
            {/* Map through search results and display them */}
            {loadingSearch && <div>Loading...</div>}
            {errorSearch && <div>Error: {errorSearch}</div>}
            {!loadingSearch && !errorSearch && searchResults?.map((news: any, index: number) => (
              <Link href={`/news/${news?.source?.id ?? news?.source?.name}/${news?.title}`} replace prefetch={true} key={index}>
                <div
                  key={index}
                  className="border-1 border-gray-200 p-4 gap-2 rounded-lg flex flex-col hover:shadow-lg transition-shadow"
                >
                  <span className="text-xl font-semibold text-blue-500">{news.title}</span>
                  <p className="text-gray-700">{news.description}
                    <span className="text-xs text-gray-500 mt-2">{new Date(news.publishedAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div >
  )
}

export default SearchNews