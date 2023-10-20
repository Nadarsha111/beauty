import { useEffect, useState } from 'react';
import { makeRequest } from '../makerequest';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeRequest.get(url);
        const data = await response.data;
        setData(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading,error };
};
