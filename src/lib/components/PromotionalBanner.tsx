import moment from 'moment';
import { IBlog } from './PopularBlogs';

interface IPromotionalBanner {
  blogs: IBlog[];
}
const PromotionalBanner = ({ blogs }: IPromotionalBanner) => {
  return (
    <section
      style={{
        background: `url(${blogs[3].urlToImage || 'https://images.unsplash.com/photo-1714715529966-c9f079e3a3ad?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
      }}
      className="flex h-[600px] items-center justify-center !bg-cover bg-center !bg-no-repeat"
    >
      <div className="m-auto flex max-w-7xl text-white ">
        <div className="flex w-[530px] flex-col items-center justify-center text-center">
          <div className="w-fit rounded-lg bg-[#FFFFFF26] px-2 py-1 text-xs font-bold">
            {blogs[3].source.name}
          </div>
          <div className="pb-3 pt-6 text-4xl font-bold">{blogs[3].title}</div>
          <div className="pb-6 text-xs font-normal">{blogs[3].description}</div>
          <div className="mb-3 h-[1px] w-8 bg-white" />
          <div className="text-xs font-normal">
            {moment(blogs[3].publishedAt).format('DD.MM.YYYY')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
