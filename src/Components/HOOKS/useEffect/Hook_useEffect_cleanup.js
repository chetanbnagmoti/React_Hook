import React,{useState} from "react";
import Hook_useEffect_mouse from "./Hook_useEffect_mouse";
//Replace CompontWillDidUnMount:-
function Hook_useEffect_cleanUp(){

    const[display,setDisplay]=useState(true);

    return(
        <main>
            <div>
                <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
                {display && <Hook_useEffect_mouse/>}
            </div>
        </main>
    )




}
export default Hook_useEffect_cleanUp;
