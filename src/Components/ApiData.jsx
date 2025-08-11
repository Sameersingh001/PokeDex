import React, { useState, useEffect } from "react";
// import Search from "./Search"; // adjust path if needed
import AllPoke from "./AllPoke";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(d => {
        if (cancelled) return;
        setData(d.results || []);
      })
      .catch(err => {
        if (cancelled) return;
        setError(err.message || "Fetch error");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div>Loading Pokémon...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
 console.log(data)
  return (
    <div>
      <AllPoke PokeData={data}/>
      
    </div>
  );
};

export default ApiData;
