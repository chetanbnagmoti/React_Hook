import React, { useState } from 'react'
import useCount from './Hooks/Count';

function Count2() {
 const [count,increment,decrement,reset] =useCount(0,5);
  return (
   <>
   <div>{count}</div>
    <div><button onClick={increment}>Increment</button></div>
    <div><button onClick={decrement}>Decrement</button></div>
    <div><button onClick={reset}>Reset</button></div>
   </>
  )
}

export default Count2;