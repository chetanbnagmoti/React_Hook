import React from 'react'

import { useState } from 'react';
import useDocumentTitle from './Hooks/DocumentTitle';

 function DocumentTile2() {
    const[count,setCount]=useState(0);

   useDocumentTitle(count);

  return (
    
    <>
      <button onClick={()=>setCount(count+1)}>count {count}</button>
 

    </>
  )
}
export default DocumentTile2;