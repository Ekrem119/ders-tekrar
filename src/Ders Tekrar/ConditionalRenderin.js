import React, { useState } from "react";
function ConditionalRendering() {
  const [catSelected, setCatSelected] = useState("");

  return (
    <>{catSelected ? <img src={catSelected} /> : <div>No cat selected</div>}
    <button onClick={() => setCatSelected("https://http.cat/200.jpg")}>Select cat 1</button>
    <button onClick={() => setCatSelected("https://http.cat/300.jpg")}>Select cat 2</button>
    <button onClick={() => setCatSelected("https://http.cat/404.jpg")}>Select cat 3</button>
    <button onClick={() => setCatSelected("https://http.cat/100.jpg")}>Select cat 4</button>

    
    </>
  );
}

export default ConditionalRendering;
