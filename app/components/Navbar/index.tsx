import Link from 'next/link'
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
           <header className={`${styles.navbar}`}>
            <span className='text-4xl font-[sans,arial] flex-1'>Times of India</span>
            <div className={`flex gap-4 p-2 rounded-lg ${styles.navLinks}`}>
                <Link href='/' className='text-blue-500 hover:underline ml-2 text-lg'>Home</Link>
                <Link href='/top-sources' className='text-blue-500 hover:underline ml-2 text-lg'>Top Sources</Link>
                <Link href='/search-news' className='text-blue-500 hover:underline ml-2 text-lg'>Search News</Link>
            </div>

        </header>
    )
}

export default Navbar