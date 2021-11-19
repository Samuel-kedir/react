import { useHistory, useParams } from "react-router";
import UseFetching from "./UseFetching";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog } = UseFetching("http://localhost:8000/blogs/" + id);
  const history = useHistory();
 
 const handleClick = ()=>{
   fetch('http://localhost:8000/blogs/'+blog.id,{
     method: 'DELETE'
   }).then(()=>{
    history.push('/blogs');
   })
 }
 
  return (
    <div className="">
      <Navbar pageTitle={blog && blog.author}/>
      <div className="container">
        <Link to={"/blogs"} className="button">
          Back
        </Link>
        <button onClick={handleClick}>Delete</button>
        <h1>{blog && blog.title}</h1>
        <h3>{blog && blog.author}</h3>
        <p>{blog && blog.body}</p>
      </div>
  
    </div>
  );
};

export default BlogDetail;
