import axios from 'axios';

// Yaha par api request lag rahi hai
export const fetchBlogs = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f5e6e00fa634efd9a304e3edbaeaa55`
  );
  return res.data.articles;
};
