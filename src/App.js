import React from 'react';
import './App.css';
import ComponetA from './Components/HOOKS/useContext/UseContextNew/ComponetA';

export const UserContext=React.createContext();

//App is commonet.
function App() {

  return  (
    <div className='App'>
      <UserContext.Provider value={{name:'chetan'}} >
      <ComponetA />
      </UserContext.Provider>
    </div>
  )   
  
}

export default App;
