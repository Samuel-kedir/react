import Navbar from "./Navbar";
import { useState } from "react";
import { useHistory } from "react-router";



const Create = () => {
  const [title, setTitle] = useState("hello");
  const [author, setAuthor] = useState("yoshi");
  const [body, setBody] = useState("");
  const [isPending,setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e)=>{
      e.preventDefault();
      const snippet = body.slice(0,200)+"...";
      const blog= {title,body,snippet,author};
      
      setIsPending(true);

      fetch("http://localhost:8000/blogs",{
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(blog)
      }).then(()=>{
          console.log('new Blog Added');
          setIsPending(false);
        //   history.go(-1);
        history.push(`/blogs`)
      })

      
  }


  return (
    <div>
      <Navbar pageTitle="Create" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blog title</label>
            <input
              type="text"
              className="input"
              required
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Blog Author</label>
            <select
              className="input"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="mario"> Mario</option>
              <option value="yoshi"> Yoshi</option>
            </select>
          </div>
          <div className="form-group">
            <label>Blog title</label>
            <textarea
              className="input"
              placeholder="Write a blog ..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
              {!isPending && <input type="submit" value="Add Blog" className=" button" />}
              {isPending && <input disabled value="Adding BLog" className=" button" />}
            
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Create;
