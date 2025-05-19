import { Link } from "react-router-dom";

const BlogCard = ({ id, image, title, description }) => {
  return (
    <Link to={`/blogs/${id}`} className="block bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
