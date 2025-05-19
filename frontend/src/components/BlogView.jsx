import { useParams } from "react-router-dom";
import blogs from "../components/blogdata/blogs";

const BlogView = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <p className="text-gray-500 mt-2">Please check the URL or go back to the blog list.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {blog.author} | {blog.date}</p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {blog.description}
      </p>
    </div>
  );
};

export default BlogView;
