import React, { useEffect, useState } from 'react'

function useFetch(url, options={}) {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try{
        setLoading(true)
        const response = await fetch(url);
        if(!response.ok) throw new Error(response.statusText);
        const result = await response.json();
       
        if(result){
            setLoading(false)
            setData(result)
            setError(null)
            
        }
    }catch(e){
        setError(e)
        setLoading(false)
        setError(e)
    }
        
  }
  useEffect(()=>{
    fetchData()
  },[url])
  return {
    data,
    loading,
    error,
  };
}

export default useFetch