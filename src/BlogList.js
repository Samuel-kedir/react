import { Link } from "react-router-dom";
const BlogList = ({ blogs }) => {
  return (
    <div className="card-list">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="card" key={blog.id}>
                
              <Link to={`blog/${blog.id}`}>
                <div className="card-head">
                  <h3 className="card-title">{blog.title}</h3>
                  <h4 className="card-subtitle">{blog.author}</h4>
                </div>
                <div className="card-body">
                  <p>{blog.snippet}</p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default BlogList;
