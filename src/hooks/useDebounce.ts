import { useState, useEffect } from "react";
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedTerm, setDebouncedTerm] = useState<T>(value);
  useEffect(() => {
    const interval = setTimeout(() => {
      setDebouncedTerm(value);
    }, delay);

    return () => clearTimeout(interval);
  }, [value,delay]);
  return debouncedTerm;
};
export default useDebounce;
