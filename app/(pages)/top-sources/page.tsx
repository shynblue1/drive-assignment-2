'use client'
import useTopHeadlineSourcesData from '@/app/hooks/useTopHeadlineSourcesData'
import Link from 'next/link'

const TopSources = () => {
    const { topHeadlineSources, loadingTopHeadlineSources, errorTopHeadlineSources } = useTopHeadlineSourcesData();

    return (
        <div className='flex flex-col p-2 items-center min-h-screen bg-white font-sans'>
            <span className="text-2xl font-semibold align-self-center mt-4">Top Sources</span>
            <main className="flex flex-col justify-center items-center p-10 gap-4">
                {loadingTopHeadlineSources && <div>Loading...</div>}
                {errorTopHeadlineSources && <div>Error: {errorTopHeadlineSources}</div>}
                {!loadingTopHeadlineSources && !errorTopHeadlineSources && (
                    <div className='grid grid-cols-1 gap-4 max-w-4xl'>
                        {topHeadlineSources?.map((news: any, index: number) => (
                            <Link key={index} href={news?.url} target='blank' prefetch={true}>
                                <div className="border-1 border-gray-200 p-4 gap-3 rounded-lg flex flex-col hover:shadow-lg transition-shadow">
                                    <span className='text-2xl text-blue-500 font-semibold'>{news.source.name}</span>
                                    <p className="text-gray-700">{news.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )
                }
            </main >
        </div >
    )
}

export default TopSources