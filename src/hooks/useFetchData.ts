import { useState, useEffect, useCallback, useRef } from "react";
import type { ApiError } from "../types";

const cache = new Map<string, unknown>();

const useFetchData = <T>(
  initialData: T,
  fetchDataFunction: () => Promise<T>,
  initialLoad: boolean = false,
  cacheKey?: string,
) => {
  const fetchFnRef = useRef(fetchDataFunction);
  fetchFnRef.current = fetchDataFunction;

  const initialDataRef = useRef(initialData);

  const [data, setData] = useState<T>(() =>
    cacheKey && cache.has(cacheKey) ? (cache.get(cacheKey) as T) : initialData,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(
    async (invalidateCache = false) => {
      if (cacheKey && !invalidateCache && cache.has(cacheKey)) {
        setData(cache.get(cacheKey) as T);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetchFnRef.current();

        if (cacheKey) {
          cache.set(cacheKey, response);
        }

        setData(response);
      } catch (err) {
        setError(err as ApiError);
        setData(initialDataRef.current);
      } finally {
        setLoading(false);
      }
    },
    [cacheKey],
  );

  const refetch = useCallback(() => fetchData(true), [fetchData]);

  useEffect(() => {
    if (initialLoad) {
      fetchData();
    }
  }, [fetchData, initialLoad]);

  return { data, loading, error, refetch };
};

export default useFetchData;
