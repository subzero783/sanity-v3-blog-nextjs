import Image from 'next/image';
import Link from 'next/link';

function Header(){
    return(
        <header
            className="flex items-center justify-between space-x-2 font-bold px-10 py-5"
        >
            <div
                className="flex items-center space-x-2"
            >
                <Link href="/">
                    <Image
                className="rounded-full"
                height={50}
                width={50}
                src="https://avatars.githubusercontent.com/u/28282324"
                alt="Gustavo Amezcua"
                    />  
                </Link>
                <h1>NextJS Blog with Sanity and TailwindCSS</h1>
            </div>
            <div>
                <Link
                    href="/"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
                >
                    Sign up to my Project Based Web Design Course
                </Link>
            </div>
        </header>
    )
}

export default Header; 