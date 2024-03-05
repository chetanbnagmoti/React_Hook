import React, { useReducer } from 'react';
import './App.css';
import Compontet_A from './Components/HOOKS/useReducer_useContext/Componet_A';
import Compontet_B from './Components/HOOKS/useReducer_useContext/Componet_B';
import Compontet_C from './Components/HOOKS/useReducer_useContext/Componet_C';
import DataFetching_without_useReducer from './Components/HOOKS/DataFetching/DataFetching_without_useReducer';


export const CountContext =React.createContext();

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

//App is commonet.
function App() {
  const  [count ,dispatch] =useReducer(reducer,initialState);
  return  (
    <CountContext.Provider value={{countState:count , countDispatch:dispatch}}>
    <div className='App'>
         Count - {count}
         <Compontet_A />
         <Compontet_B />
         <Compontet_C />
         <DataFetching_without_useReducer />
    </div>
    </CountContext.Provider>
  )   
  
}

export default App;
