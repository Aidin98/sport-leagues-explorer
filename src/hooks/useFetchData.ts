import { useState, useEffect, useCallback, useRef } from "react";
import type { ApiError } from "../types";

const useFetchData = <T>(
  initialData: T,
  fetchDataFunction: () => Promise<T>,
  initialLoad: boolean = false,
) => {
  const fetchFnRef = useRef(fetchDataFunction);
  fetchFnRef.current = fetchDataFunction;

  const initialDataRef = useRef(initialData);

  const [data, setData] = useState<T>(() => initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchFnRef.current();

      setData(response);
    } catch (err) {
      setError(err as ApiError);
      setData(initialDataRef.current);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialLoad) {
      fetchData();
    }
  }, [fetchData,initialLoad]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
