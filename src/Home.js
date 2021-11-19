// import { useState,useEffect } from "react";
import Card from "./Card";
// import useFetch from "./useFetch";
import Hero from "./Hero";
import UseFetching from "./UseFetching";

const Home = () => {
  // const {data:blogs,isPending,error,handleRefresh} = useFetch('http://localhost:8000/blogs');
  const {data:blogs,isPending,error} = UseFetching('http://localhost:8000/blogs');
  return (
    <div className="home">
      <Hero
        HeroTitle="Home page"
        HeroSubtitle="Gotta have some subtitle for sake of clarification"
        CTA="Stay tuned"
      />
      <div className="container">
        {error && <div> {error}</div>}
        {isPending && <div id="loader"></div>}
        {blogs && <Card cards={blogs} title="From Fetch"/>}

      </div>
    </div>
  );
};
export default Home;
