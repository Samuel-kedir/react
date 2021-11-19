import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [refresh,setRefresh] = useState(null);
  const handleRefresh = ()=>{
    if(refresh===0){
      setRefresh(1);
    }else{
      setRefresh(0);
    }
    console.log("refreshed");

  }


  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url,{signal:abortCont.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for the resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if(err.name === 'AbortError'){
          console.log('fetch aborted');
        }else{
          setError(err.message);
          setIsPending(false);
        }
        
      });
      return()=>abortCont.abort();
  }, [url,refresh]);
  return { data, isPending, error,refresh,handleRefresh };
};

export default useFetch;
