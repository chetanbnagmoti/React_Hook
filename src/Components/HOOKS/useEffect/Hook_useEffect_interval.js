import React, { useState, useEffect } from "react";
//Conditional Effect runs only once:-
function Hook_useEffect_interval() {
  const [count, setCount] = useState(0);
 

  const tike = () => {
    console.log("MouseEvent");
    setCount(preCount=>preCount+1)
  };

  useEffect(() => {

    function doSomthing(){
        console.log("Hello");
    }
    doSomthing();
    const interval= setInterval(tike,1000);

    return () =>{
       clearInterval(interval);
    }
  },[]);

  return (
    <main>
      <div>
        <h1>{count}</h1>
     
      </div>
    </main>
  );
}

export default Hook_useEffect_interval;

//useEffect:-After the rendering code every time excuted.
//second parameter is Arrya in this propos and state passed when you whatch effect means changes or update documnet.
//second parameter is empty array pass when to achived Conditional Effect runs only once:same as componentDidMount
//return onther  funtion will used to clean up code. =>same as componentWillUnmountDidMount