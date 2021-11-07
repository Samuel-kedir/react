import { useState,useEffect } from "react";
import Card from './Card';
import useFetch from "./useFetch";
import Hero from "./Hero";

const Home = ()=>{
  const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

  
return(
  <div className="home">
    <Hero HeroTitle="Home page" HeroSubtitle="Gotta have some subtitle for sake of clarification" CTA="Stay tuned"/>
   <div className="container">
   {blogs && <Card cards={blogs}/>}
   </div>
  </div>
)

}
export default Home;