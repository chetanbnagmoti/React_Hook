import React, { useState, useMemo } from "react";

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementByOne = () => {
    console.log("incrementByOne");
    setCountOne(countOne + 1);
  };

  const incrementByTwo = () => {
    console.log("incrementByTwo");
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("isEven");
    let i = 0;
    while (i < 200000) i++;
    return countOne % 2 == 0;
  }, [countOne]);
  
  

  // const isEven =()=>{
  //   let i=0;
  //   while (i<2000000000) i++;
  //   return countOne % 2 === 0;
  // }

  return (
    <main>
      <div>
        <button onClick={incrementByOne}>CountOne- {countOne}</button>
        <span>{isEven ? "Even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementByTwo}>CountTwo- {countTwo}</button>
      </div>
    </main>
  );
}
export default Counter;
//useMemo:-avoding every time rendering.=>when invok cachs result and fuction
//useMemo(function(),[DependencyArrya]) :- 
