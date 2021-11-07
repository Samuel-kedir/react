import {useState } from 'react';
import Card from './Card';
import Hero from './Hero';

const Home = () => {
    const heading = "Homepage";
    const [blogs,setBlogs] = useState([
        {title: 'My new website',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'mario',id: 1},
        {title: 'Welcome party',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'Tamiya',id: 2},
        {title: 'Dev op tips',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'Rebekah',id: 3},
        {title: 'My new website',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'mario',id: 4},
        {title: 'Welcome party',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'mario',id: 5},
        {title: 'Dev op tips',body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eius velit illo. Sint a at officiis quidem voluptatum saepe quis, eligendi quas! Nesciunt excepturi dolorum dolores omnis voluptatibus ut!',author: 'Rebekah',id: 6},
    ])
   const handleDelete= (id)=>{
      
      if(id == "all"){

        setBlogs(blogs);
      }else{
        const newBlogs=  blogs.filter(b=>b.id !== id);
        setBlogs(newBlogs);
      }
   }
    return ( 
        <div  className="home ">
            <Hero HeroTitle="Home page" HeroSubtitle="This is the page where you find the home page , stay tuned to this page to find about how the home and thee rest of the website is made." CTA="Sign UP" active="home"/>
           <div className="container">
               <Card cards={blogs} title="All blogs" handleDelete={handleDelete}/>
           </div>
      </div>
    
     );

}
 
export default Home;