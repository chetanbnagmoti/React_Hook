import React ,{useEffect,useRef}from "react";
//Step 1: -Import useRef
function FocusInput(){

    //Step 2:- defined useRef:-
 const inputRef =useRef(null);

    useEffect(()=> {
 
  //Step 4:- call current.focus()
    inputRef.current.focus()
    },[])
    return(
        <main>
            <div>
                {/* step 3:- insert ref={refValue} */}
                <input  ref={inputRef} type='text'/>
            </div>
        </main>
    )
}

export default FocusInput;
//useRef=>focus the input element