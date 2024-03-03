import React from 'react';
import './App.css';

import Count1 from './Components/HOOKS/customHook/Count1';
import Count2 from './Components/HOOKS/customHook/Count2';

//App is commonet.
function App() {
  return  (
    <div className='App'>
      
      <Count1 />
      <Count2 />
    </div>
  )   
  
}

export default App;
