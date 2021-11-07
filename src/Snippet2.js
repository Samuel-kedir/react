import { useState, useEffect } from "react";
import Card from "./Card";
import Hero from "./Hero";
// npx json-server --watch data/db.json --port 8000 // json server

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   {
  //     title: "My new website",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!",
  //     author: "mario",
  //     id: 1,
  //   },
  //   {
  //     title: "Welcome party",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!",
  //     author: "Tamiya",
  //     id: 2,
  //   },
  //   {
  //     title: "Dev op tips",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!",
  //     author: "Rebekah",
  //     id: 3,
  //   },
  //   {
  //     title: "My new website",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!",
  //     author: "mario",
  //     id: 4,
  //   },
  //   {
  //     title: "Welcome party",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!",
  //     author: "mario",
  //     id: 5,
  //   },
  //   {
  //     title: "Dev op tips",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!",
  //     author: "Rebekah",
  //     id: 6,
  //   },
  // ]);

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [heading, setHeading] = useState("Home page");
  const [refresh, setRefresh] = useState(1);

  const handleHeading = () => {
    if (heading === "Home page") {
      setHeading("Landing page");
    } else {
      setHeading("Home page");
    }
  };

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleRefresh = () => {
    setIsPending(true);
    if (refresh === 1) {
      setRefresh(0);
    } else {
      setRefresh(1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for the resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [refresh]);

  return (
    <div className="home ">
      <Hero
        HeroTitle={heading}
        handleHeading={handleHeading}
        HeroSubtitle="This is the page where you find the home page , stay tuned to this page to find about how the home and thee rest of the website is made."
        CTA="Sign UP"
        active="home"
      />
      <div className="container">
        {isPending && <p id="loader"></p>}
        {error && <p>{error}</p>}
        {blogs && (
          <Card
            cards={blogs}
            title="All blogs"
            handleRefresh={handleRefresh}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
