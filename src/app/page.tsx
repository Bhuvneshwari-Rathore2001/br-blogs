import { fetchBlogs } from '@/lib/fetchHandler/blogs';
import Home from '@/lib/pages/home';

export default async function Index() {
  const blogs = await fetchBlogs();

  return <Home blogs={blogs} />;
}
