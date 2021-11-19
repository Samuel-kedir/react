import BlogList from "./BlogList";
// import Hero from "./Hero";
import Navbar from "./Navbar";
import UseFetching from "./UseFetching";

const Blogs = () => {
    const {data:blogs} = UseFetching('http://localhost:8000/blogs');
    return ( 
        <div>
            <Navbar pageTitle='Blog List'/>
            {/* <Hero HeroTitle="Blogs" HeroSubtitle="The home of spicy news from all over the world , buckle up for the journey begins right away." CTA="Subscribe"/> */}
            <div className="container">
           
                <BlogList blogs={blogs} HeroTitle="Blog List"/>
            </div>
        </div>
     );
}
 
export default Blogs;