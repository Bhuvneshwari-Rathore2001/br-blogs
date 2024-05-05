import classNames from 'classnames';

interface ITabs {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
}

const Tabs = ({ categories, selectedCategory, setSelectedCategory }: ITabs) => {
  // const tabs = [{ id: 1, name: 'All' ,link:}];

  return (
    <div
      className={classNames(
        'my-10 flex flex-wrap gap-x-2 gap-y-4 text-xs font-bold'
      )}
    >
      {categories.map((cat: string) => (
        <div
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={classNames('cursor-pointer px-2 py-1 text-[#495057]', {
            '!text-[#ecb3ff]': selectedCategory === cat,
          })}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
