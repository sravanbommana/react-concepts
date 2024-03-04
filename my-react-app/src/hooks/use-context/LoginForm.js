import { useState } from "react";
import "../../styles.css";
import { useUserContextProvider } from "./UserContext";
export const LoginForm = () => {
  const {setUserData} = useUserContextProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = () => {
    setUserData({
      name:name,
      emailAddress:email
    })
  }
  return (
    <div>
      <div className="title-header">Login</div>
      <form className="container">
        <div class="form-group col-md-6" style={{marginLeft:"120px"}}>
          <label style={{marginBottom:"10px"}}> Name</label>
          <input
            type="text"
            class="form-control"
            id="name" 
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="form-group col-md-6"  style={{marginLeft:"120px"}}>
          <label style={{marginBottom:"10px"}} for="exampleInputEmail1">Email address</label>
          <input
            type="Text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </form>
      <button class="btn btn-primary" style={{marginTop:"20px", marginLeft:"-20px"}} onClick={submitHandler}>
          Submit
        </button>
    </div>
  );
};
