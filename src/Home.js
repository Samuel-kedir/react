import {useState } from 'react';

const Home = () => {
    const title = "Homepage";

//     const handleClick = (e)=>{
//         console.log(e.clientX," , "+e.clientY);
//    }
//    const handleClickAgain = (name)=>{
//         console.log("hello "+ name);
//    }


    return ( 
        <div  className="home">
            <h1>{title}</h1>
            
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={()=>handleClickAgain('sam')}>Click me again</button> */}
        </div>
    
     );

}
 
export default Home;