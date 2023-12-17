import React from "react";
import Sign from "../UI Design/Sign-Up/sign";

function SignUp({userLogged}) {

    if(userLogged) return null
    else {
      return (
        <div>
          <Sign />
        </div>
      );
    }
  }
  
  export default SignUp;
