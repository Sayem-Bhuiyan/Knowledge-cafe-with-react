import PropTypes from "prop-types";
import { CiBookmarkPlus } from 'react-icons/ci';

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-4 rounded-2xl" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-4">
          <img className="h-16 w-16" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p className="text-base">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button className="ml-2 text-red-600 text-2xl"><CiBookmarkPlus /></button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>

      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
