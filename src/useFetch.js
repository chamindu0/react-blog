import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    fetch(url,{signal:abortCtrl.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resourse");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        if(e.name === 'AbortError'){
            console.log('fetch Aborted')
        }else{
        setError(e.message);
        setIsPending(false);
        }

      });
    return () => abortCtrl.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
