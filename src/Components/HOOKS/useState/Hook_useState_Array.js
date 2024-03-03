import React, { useState } from "react";

function Hook_UseSate_Array() {
  const [item, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...item,
      { id: item.length, value: Math.floor(Math.random() * 10) + 1 }
    ]);
  };

  return (
    <main>
      <button onClick={addItem}>ADD-Items</button>
      <div>
        <ul>
        {item.map(item=>( <li key={item.id}>{item.value}</li>))}
        </ul>
       
      </div>
    </main>
  );
}
export default Hook_UseSate_Array;
