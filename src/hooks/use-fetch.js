import useAsync from "./use-async";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

const useFetch = (url, options = {}, dependencies = []) => {
  return useAsync(() => {
    if (!url) return;
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed!: ${res.status}`);
      }
      return res.json();
    });
  }, dependencies);
};

export default useFetch;
