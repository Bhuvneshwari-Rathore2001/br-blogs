import Banner from '@/lib/components/Banner';
import EditorPickSection from '@/lib/components/EditorPickSection';
import PopularBlogs, { IBlog } from '@/lib/components/PopularBlogs';
import PromotionalBanner from '@/lib/components/PromotionalBanner';

interface IHome {
  blogs: IBlog[];
}

const Home = async ({ blogs }: IHome) => {
  return (
    <div>
      <Banner />
      <PopularBlogs blogs={blogs} />
      <PromotionalBanner blogs={blogs} />
      <EditorPickSection blogs={blogs} />
    </div>
  );
};

export default Home;
