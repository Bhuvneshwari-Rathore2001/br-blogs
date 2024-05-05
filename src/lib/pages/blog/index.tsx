import BlogDetail from '@/lib/components/BlogDetail';
import EditorPickSection from '@/lib/components/EditorPickSection';
import PromotionalBanner from '@/lib/components/PromotionalBanner';
import Header from '@/lib/layout/Header';

const Blog = () => {
  return (
    <div>
      <PromotionalBanner />
      <BlogDetail />
      <EditorPickSection />
    </div>
  );
};

export default Blog;
