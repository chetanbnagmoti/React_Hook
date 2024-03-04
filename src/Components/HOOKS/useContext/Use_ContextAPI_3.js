import React from "react";
// import { UserContext, ChannelContext,ShopContext } from "../../App";

function Compontet_C() {
  return (
    <main>
      <div>
        {/* <UserContext.Consumer>
          {(user) => {
            return (
              <ChannelContext.Consumer>
                {(chanale) => {
                  return (
                    <ShopContext.Consumer>
                        {
                            shop=>{
                              return  <div>User Context_C are {user} {chanale} {shop} </div>
                            }
                        }

                    </ShopContext.Consumer>
                    
                  );
                }}
              </ChannelContext.Consumer>
            );
          }}
        </UserContext.Consumer> */}
      </div>
    </main>
  );
}
export default Compontet_C;
