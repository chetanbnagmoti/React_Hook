import React, { useState, useEffect } from "react";
//Conditional Effect:-
function Hook_useEffect() {
  const [count, setCount] = useState(0);
  const [name ,setName]=useState('');

  useEffect(() => {
    console.log("updatiing title");
    document.title = `You Clicke ${count} Times`;
  },[count]);

  return (
    <main>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count +</button>
      </div>
    </main>
  );
}

export default Hook_useEffect;

//useEffect:-After the rendering code every time excuted.
//second parameter is Arrya in this propos and state passed when you whatch effect means changes or update documnet.
