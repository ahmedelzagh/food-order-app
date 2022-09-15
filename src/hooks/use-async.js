import { useCallback, useEffect, useState } from "react";

const useAsync = (callback, dependencies = []) => {
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const asyncRequest = useCallback(async () => {
    setError(null);
    try {
      const res = await callback();
      setValue(res);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setLoading(false);
  }, dependencies);

  useEffect(() => {
    asyncRequest();
  }, [asyncRequest]);

  return { loading, error, value };
};

export default useAsync;
