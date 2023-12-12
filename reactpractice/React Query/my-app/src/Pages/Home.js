import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
function Home() {
  const { data, isError } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  if (isError) {
    return <p>Error getting data</p>;
  }
  return (
    <h2>
      This is Home Page <p>{data?.fact}</p>
    </h2>
  );
}

export default Home;
