import moment from 'moment';
import Link from 'next/link';
import { IBlog } from './PopularBlogs';

interface IBlogCard {
  blog: IBlog;
}

const BlogCard = ({ blog }: IBlogCard) => {
  return (
    <Link href="/blog" className="relative flex w-72 flex-col gap-3">
      <img
        src={
          blog.urlToImage ||
          'https://images.unsplash.com/photo-1714715529966-c9f079e3a3ad?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="blog"
        className="relative h-64 rounded object-cover object-center"
      />
      <div className="absolute right-6 top-5 rounded-lg bg-[#FFFFFF33] px-2 py-1 text-xs font-bold text-white">
        {blog.source.name}
      </div>
      <div className="text-xs font-normal text-lightGray">
        {moment(blog.publishedAt).format('DD.MM.YYYY')}
      </div>
      <div className="text-lg font-bold text-darkGray">{blog.title}</div>
      <div className="text-xs font-normal text-lightGray">
        {blog.description}
      </div>
    </Link>
  );
};

export default BlogCard;
