import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [error, setError]= useState(null)

  

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a2cf48a58emshb63371fca23465cp12942cjsn7a46fcbcaad7',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query}
  
};

const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options);
        setData(response.data.data)
        setIsLoading(false);
    }catch(error){
        setError(error);
        alert('There is an error')
    }finally {
        setIsLoading(false);
    }
}

useEffect(() => {
    setIsLoading(true);
    fetchData();
}, []);

const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
   return {data, isLoading, error, refetch};
}

export default useFetch;