import React, { useReducer } from "react";
//useReducer => Complex state=>object and action=>object
//Step :2 Defind initialState and reducer method:-
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {...currentState, firstCounter: currentState.firstCounter + action.value };
    case "decrement":
      return {...currentState, firstCounter: currentState.firstCounter - action.value };
    case "increment2":
      return { ...currentState,secondCounter: currentState.secondCounter + action.value };
    case "decrement2":
      return {...currentState, secondCounter: currentState.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function Hook_useReducer_complexState_action() {
  //Step :1  Defind useReducer method this give two  argument:
  //step :3 useReducer method return pair of value one is State(count) and dispatch method executed code with base action
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <main>
      <div>
        <h1>count -1 :-{count.firstCounter} /// count -2:- {count.secondCounter}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Inncrement
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Inncrement 5+
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement 5-
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Inncrement_2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement_2
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </main>
  );
}

export default Hook_useReducer_complexState_action;
