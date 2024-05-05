import EditorPickCard from './EditorPickCard';
import { IBlog } from './PopularBlogs';

interface IEditorPickSection {
  blogs: IBlog[];
}

const EditorPickSection = ({ blogs }: IEditorPickSection) => {
  return (
    <section className="m-auto max-w-7xl overflow-hidden py-36">
      <div className="pb-16 text-4xl font-bold text-darkGray">
        Editor’s Pick
      </div>
      <div className="grid grid-cols-3 gap-5">
        {blogs.slice(0, 3).map((blog, index) => (
          <EditorPickCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default EditorPickSection;
