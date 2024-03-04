import React, { useContext } from 'react'
import { UserContext } from '../../../../App';


const ComponetC = () => {
   const userInfo=useContext(UserContext);

  return (
    <div>ComponetC :- {userInfo.name}</div>
  )
}

export default ComponetC