import React,{useContext} from "react";
import { CountContext } from "../../../App";

//useReducer => Local state maintain + useContext => both used for maintaine globale state

function Compontet_A() {
  const countContext =useContext(CountContext);
  return <div>Compontet_A  = =  {countContext.countState}
    <button onClick={()=>countContext.countDispatch('increment')}>Inncrement</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
  </div>;
}
export default Compontet_A;
