import {useState} from 'react'

function useCount(intialValue=0,value) {
    const[count,setCount]=useState(intialValue);
    
    const increment=()=>{
         setCount(preCount=>preCount+value);
    }

    const decrement=()=>{
        setCount(preCount=>preCount-value);
    }

    const reset=()=>{
      setCount(intialValue);
    }

     return [count,increment,decrement,reset] ;
}

export default useCount