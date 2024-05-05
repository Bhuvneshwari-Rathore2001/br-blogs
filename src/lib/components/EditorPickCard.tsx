import moment from 'moment';
import { IBlog } from './PopularBlogs';

interface IEditorPickCard {
  blog: IBlog;
}

const EditorPickCard = ({ blog }: IEditorPickCard) => {
  return (
    <div className="relative text-white">
      <img
        src={
          blog.urlToImage ||
          'https://images.unsplash.com/photo-1714715529966-c9f079e3a3ad?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="blog"
        className="h-80 w-[420px] rounded-md"
      />
      <div className="absolute right-6 top-5 rounded-lg bg-[#FFFFFF33] px-2 py-1 text-xs font-bold text-white">
        {blog.source.name}
      </div>
      <div className="absolute left-10 top-36 flex flex-col gap-4">
        <div className="text-xs font-normal text-[#E5E5E5]">
          {moment(blog.publishedAt).format('DD.MM.YYYY')}
        </div>
        <div className="w-64 text-lg font-bold">{blog.title}</div>
        <div className="w-80 text-xs font-normal text-[#E5E5E5]">
          {blog.description && blog.description.slice(0, 110)}
        </div>
      </div>
    </div>
  );
};

export default EditorPickCard;
