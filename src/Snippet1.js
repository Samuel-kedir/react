import {useState } from 'react';
import Card from './Card';
import Hero from './Hero';

const Home = () => {
    const heading = "Homepage";

//     const handleClick = (e)=>{
//         console.log(e.clientX," , "+e.clientY);
//    }
//    const handleClickAgain = (name)=>{
//         console.log("hello "+ name);
//    }

    // const [name , setName] = useState('mario');
    // const [age , setAge] = useState(21);
    // const handleClick = ()=>{
    //     setName('Taniya');
    // }
        
    // const increase = ()=>{
    //    setAge(age+1);
    // }

    const [blogs,setBlogs] = useState([
        {title: 'My new website',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'mario',id: 1},
        {title: 'Welcome party',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'Tamiya',id: 2},
        {title: 'Dev op tips',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'Rebekah',id: 3},

    ])

    const [contact , setContact] = useState ([
        {title: "Samuel Kedir",author: 'CEO at DevX',id:1,body: "+251904738484       samuel.datros@gmail.com"},
        {title: "Yonatan Abera",author: 'CTO at DevX',id:2,body: "+251922365222      yonatanabera@gmail.com"},

    ])

    return ( 
        <div  className="home ">
            <Hero HeroTitle="Home page" HeroSubtitle="This is the page where you find the home page , stay tuned to this page to find about how the home and thee rest of the website is made." CTA="Sign UP" active="home"/>
           <div className="container">
           <Card cards={contact} title = "Contact Us"/>
            <Card cards = {blogs} title="All Blogs"/>
            <Card cards={blogs.filter((blog)=>blog.author == 'mario')} title="Mario's Blogs"/>
           </div>
           {/* <Card  cards= {contact} title="Production Crew"/> */}
            {/* <p>{name}  is {age} years old</p>
            <button onClick={handleClick}>click</button>
            <button onClick={increase}>increase</button> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={()=>handleClickAgain('sam')}>Click me again</button> */}
        </div>
    
     );

}
 
export default Home;