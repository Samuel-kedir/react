import {useState } from 'react';

const Home = () => {
    const title = "Homepage";

//     const handleClick = (e)=>{
//         console.log(e.clientX," , "+e.clientY);
//    }
//    const handleClickAgain = (name)=>{
//         console.log("hello "+ name);
//    }

    const [name , setName] = useState('mario');
    const [age , setAge] = useState(21);
    const handleClick = ()=>{
        setName('Taniya');
    }
        
    const increase = ()=>{
       setAge(age+1);
    }


    return ( 
        <div  className="home">
            <h1>{title}</h1>
            <p>{name}  is {age} years old</p>
            <button onClick={handleClick}>click</button>
            <button onClick={increase}>increase</button>
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={()=>handleClickAgain('sam')}>Click me again</button> */}
        </div>
    
     );

}
 
export default Home;