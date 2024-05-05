import Link from 'next/link';
import LinkedInIcon from '../assets/LinkedInIcon';
import SearchIcon from '../assets/SearchIcon';
import YouTube from '../assets/YouTubeIcon';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#00000033]">
      <div className=" m-auto w-full max-w-7xl text-white">
        <div className=" flex  items-center justify-between">
          <div className="py-7 text-xl font-bold">BR BLOGS</div>
          <div className="flex items-center gap-6">
            {/* <Link href="/home" className={classNames({'bg-[#1A1F37]': opt.link === location.pathname,})}>Home</Link> */}
            <Link href="/about">About</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/contact-us">Contact Us</Link>
            <div className="h-5 w-[0.5px] bg-[#E5E5E5]" />
            <Link href="">
              <YouTube />
            </Link>
            <Link href="" className="text-white">
              <LinkedInIcon />
            </Link>
            <Link href=""></Link>
            <div className="h-5 w-[0.5px] bg-[#E5E5E5]" />
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
