import React, { useState } from 'react'
import useCount from './Hooks/Count';

function Count1() {
    const [count,increment,decrement,reset] =useCount(10,10);
   // Calculator_HTML_CSS_JavaScript
  return (
   <>
   <div>{count}</div>
    <div><button onClick={increment}>Increment</button></div>
    <div><button onClick={decrement}>Decrement</button></div>
    <div><button onClick={reset}>Reset</button></div>
   </>
  )
}

export default Count1