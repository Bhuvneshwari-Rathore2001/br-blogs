'use client';
import { useEffect, useMemo, useState } from 'react';
import BlogCard from './BlogCard';
import Tabs from './Tabs';

export interface IBlog {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

interface IPopularBlogs {
  blogs: IBlog[];
}

const PopularBlogs = ({ blogs }: IPopularBlogs) => {
  const [categories, setCategories] = useState<string[]>([]);

  // Starting mai jab component load hogi toh All wali category selected rahegi
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Extracting category list
    const categoryList = blogs.map((blog: IBlog) => blog.source.name);

    // Creating a Set to remove duplicates
    const uniqueCategories = new Set(['All', ...categoryList]);

    // Converting Set back to array
    const uniqueCategoryList = Array.from(uniqueCategories);

    setCategories(uniqueCategoryList as string[]);
  }, [blogs]);

  // useMemo help kr raha hai blogs ko filter krne mai jab jab selectedCategory badalty hai toh yeh function run krta hai
  const filteredBlogs = useMemo(() => {
    // Yaha par ek check laga hai agar "All" category nahi select hai tb yeh if condition true hogi or filter hoga
    if (selectedCategory !== 'All') {
      // Yeh method array return karega new blogs ki
      const changedBlogs = blogs.filter((blog) => {
        return blog.source.name === selectedCategory;
      });

      return changedBlogs;
    }

    // Agar "All" category selected hai toh all blogs return hojayenge
    return blogs;
  }, [blogs, selectedCategory]);

  return (
    <section className="m-auto max-w-7xl overflow-hidden py-36">
      <div className="text-4xl font-bold text-[#495057]">Popular topics</div>
      <Tabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Yaha par filtered blogs jab jab change hogi tb tb ui par alag blogs dikhengi */}
        {filteredBlogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default PopularBlogs;
