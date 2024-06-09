import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ApiResponse<T> {
  response: T | null;
  loading: boolean;
  error: any | null;
}

const useAxios = <T = any,>(url: string): ApiResponse<T> => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
        setLoading(false);
      }
    };
    fetch();
  }, [url]);

  return { response, loading, error };
};

export default useAxios;
