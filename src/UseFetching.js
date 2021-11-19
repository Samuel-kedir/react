import { useEffect, useState } from "react/cjs/react.development";

const UseFetching = (url) => {
    const [data,setData] = useState(null);
    const [error,setError]= useState(null);
    const [isPending,setIsPending] = useState(true);
 

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url,{signal: abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error("Could not fetch data from resource");
            }
            return res.json();
        })
        .then(data=>{
            setIsPending(false);
            setData(data);
            setError(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
                setIsPending(false);
                setError(err.message);
            }
            

            
        })
        return()=>abortCont.abort();
    },[url]);
    return {data,isPending,error}
}
 
export default UseFetching;