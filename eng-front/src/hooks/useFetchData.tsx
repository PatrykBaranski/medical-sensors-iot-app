import { useEffect, useState } from "react";

export const useFetchData = <T,>(dataPath: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://127.0.0.1:3000/api/${dataPath}`);
      const response = await data.json();
      setData(response);
    };
    fetchData();
  }, [dataPath]);
  return data;
};
