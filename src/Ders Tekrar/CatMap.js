import React, { useState } from "react";

const cats = [
  "https://http.cat/200.jpg",
  "https://http.cat/100.jpg",
  "https://http.cat/400.jpg",
];

function CatMap() {
  const [catSelected, setCatSelected] = useState("");
  return (
    <>
    {catSelected ? <img src={catSelected} /> : <div>No cat selected!</div>}
    
    {cats.map(
        (cat, index) => <button
        key={cat}
        onClick={()=> setCatSelected(cat)}
        >
            Select cat {index + 1}
        </button>
    )}
    
    </>
  );
}

export default CatMap;
