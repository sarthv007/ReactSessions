import React, { useContext } from "react";
import ComponentG from "./ComponentG";
import { Cntx, MyContext } from "./Context";

function ComponentF() {
  const userName = useContext(MyContext);
  const users = useContext(Cntx);
  return (
    // <ComponentG />
    <>
      <h2>{userName}</h2>
      {users.map((user) => (
        <>
          <h2>{user.name}</h2>
          <h2>{user.lname}</h2>
          <h2>{user.phone}</h2>
        </>
      ))}
    </>

    // <MyContext.Consumer>
    //   {(userName) => (
    //     <Cntx.Consumer>
    //       {(users) => (
    //         <div>
    //           User Name is :{userName}
    //           <h2>Users are as :</h2>
    //           {users.map((user) => (
    //             <>
    //               <h2>{user.name}</h2>
    //               <h2>{user.lname}</h2>
    //               <h2>{user.phone}</h2>
    //             </>
    //           ))}
    //         </div>
    //       )}
    //     </Cntx.Consumer>
    //   )}
    // </MyContext.Consumer>
  );
}

export default ComponentF;
