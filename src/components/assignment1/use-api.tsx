import { useEffect, useState } from "react";

const useApi = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response;
    try {
      response = await fetch("https://randomuser.me/api?results=100");
      const myResponse = await response.json();
      setData(myResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return { state: { data } };
};

export default useApi;
