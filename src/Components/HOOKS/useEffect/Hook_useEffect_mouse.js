import React, { useState, useEffect } from "react";
//Conditional Effect runs only once:-
function Hook_useEffect_mouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("MouseEvent");
    setX(e.x);
    setY(e.y);
  };

  useEffect(() => {
    console.log(" useEffect :-updatiing title");
    window.addEventListener("mousemove", logMousePosition)

    return () =>{
        window.removeEventListener("mousemove", logMousePosition)
    }
  },[]);

  return (
    <main>
      <div>
       X - {X} & Y-{Y}
      </div>
    </main>
  );
}

export default Hook_useEffect_mouse;

//useEffect:-After the rendering code every time excuted.
//second parameter is Arrya in this propos and state passed when you whatch effect means changes or update documnet.
//second parameter is empty array pass when to achived Conditional Effect runs only once:
//return onther  funtion will used to clean up code. =>same as componentWillUnmountDidMount