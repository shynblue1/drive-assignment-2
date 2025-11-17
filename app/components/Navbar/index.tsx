import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className='bg-white border-2 border-gray-200 p-4 flex justify-between items-center'>
            <span className='text-4xl font-[sans,arial] flex-1'>Times of India</span>
            <div className="flex flex-0.5 gap-4 p-2 rounded-lg">
                <Link href='/' className='text-blue-500 hover:underline ml-2 text-lg'>Home</Link>
                <Link href='/top-sources' className='text-blue-500 hover:underline ml-2 text-lg'>Top Sources</Link>
                <Link href='/search-news' className='text-blue-500 hover:underline ml-2 text-lg'>Search News</Link>
            </div>

        </header>
    )
}

export default Navbar