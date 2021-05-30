import React from 'react'
import '../Styles/Login.scss'
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
   
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
    
      const history = useHistory();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, password};
    
        fetch('http://localhost:8080/user/login', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          history.push('/');
        })
      }
   return (
      <div className="loginpage">
     <br/>
     <br/>
     <br/>
      <div class="login">    
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}></form>
      <br/>
      <div className="form">
      <form id="login" method="get" action="">
      <label><b>Email/Phonenumber</b></label>
      <br/>  
      <br/>
      <input type="text" name="Uname" id="Uname" placeholder="Email/Phonenumber" required value={name}
          onChange={(e) => setName(e.target.value)} /> 
      <br/>

      <br/>    
        <label><b>Password</b></label> 
        <br/>
        <br/>   
        <input type="Password" name="Pass" id="Pass" placeholder="Password" required value={password}
          onChange={(e) => setPassword(e.target.value)} />    
        <br/>
<br/>
        <br/>    
        <div className="button">
        <input type="submit" id="submit" value="Login" placeholder="Login" />      
        <br/>
        <br/>  
        </div>  
 <br/>
        New Member?
        <a href="/signup">Sign up</a> 
    </form>  
    </div>   
</div>    
      </div>
   )
}

export default Login
