import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from 'axios';

export interface FetchResponse<T>{
  results:T[]
  count: number
  }

export const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
        setCount(res.data.count)
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          setIsLoading(false)
          return;
        } else {
          setIsLoading(false)
          setError(err.message)};
      });
      
    return () => controller.abort();
  }, []);

  return { data, error, isLoading, count};
};
