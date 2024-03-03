import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useDocumentTitle from './Hooks/DocumentTitle';

 function DocumentTile() {
    const[count,setCount]=useState(10);

   useDocumentTitle(count);

  return (
    
    <>
      <button onClick={()=>setCount(count+1)}>count {count}</button>
 

    </>
  )
}
export default DocumentTile;