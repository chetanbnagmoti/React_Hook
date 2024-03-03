import React, { useReducer } from "react";
//useReducer => Simple state =>number and action =>string
//Step :2 Defind initialState and reducer method:-
const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function Hook_useReducer_multiple_UseReducer() {
  //Step :1  Defind useReducer method this give two  argument:
  //step :3 useReducer method return pair of value one is currentState(count) and dispatch method executed code with base action
  const [count, dispatch] = useReducer(reducer, initialState);
  const[countTwo,dispatchTwo] =useReducer(reducer,initialState);
  return (
    <main>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>Inncrement</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>
      <div>
        <h1>{countTwo}</h1>
        <button onClick={()=>dispatchTwo('increment')}>Inncrement</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>Reset</button>
      </div>
    </main>
  );
}

export default Hook_useReducer_multiple_UseReducer;
