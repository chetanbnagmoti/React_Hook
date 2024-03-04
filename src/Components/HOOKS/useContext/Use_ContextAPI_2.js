import React, { useContext } from "react";
import Compontet_C from "./Use_ContextAPI_3";


function Compontet_B() {
  // const user = useContext(UserContext);
  // const lastName = useContext(ShopContext);
  return (
    <main>
      {/* {user} {lastName} */}
      <Compontet_C />
    </main>
  );
}
export default Compontet_B;


//useContext it is Hooks Concept