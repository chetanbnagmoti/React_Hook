import React,{useContext} from "react";
import { CountContext } from "../../../App";
function Compontet_D() {
  const countContext =useContext(CountContext);
  return <div>Compontet_D  = =  {countContext.countState}
    <button onClick={()=>countContext.countDispatch('increment')}>Inncrement</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
  </div>;
}
export default Compontet_D;
