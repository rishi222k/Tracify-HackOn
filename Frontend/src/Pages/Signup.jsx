import React from 'react'
import '../Styles/Signup.scss'
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pno, setPno] = useState('');
    const [status, setStatus] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [valid, setvalid] = useState(false);
    
    const history = useHistory();

    const handlechange=(e)=>{
        setStatus(e.target.value)
        if(status==="Vaccinated" || status==="Partially Vaccinated")
        setvalid(true);
        
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { name, email,pno,status,aadhar,password,image};
console.log('aa')
      fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log(blog);
        history.push('/ab');
      })
    }
    
    return (
        <div className="Signuppage">
        <br/>
        <br/>
         <div class="login">    
         <h2>SIGNUP</h2>
         <form onSubmit={handleSubmit}></form>
         <div className="form">
         <form id="login" method="get" action="/action_page.php">
         <label><b>Name</b></label><br/><br/>
         <input type="text" name="name" id="Uname" placeholder="Name" required  value={name}
          onChange={(e) => setName(e.target.value)}/> 
         <br/>
         <br/>
         <label><b>Email</b></label><br/>
         <br/>
         <input type="text" name="Email" id="Uname" required placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
         <br/> 
         <br/>
         <label><b>Phonenumber</b></label>
         <br/>
         <br/>
         <input type="text" name="number" id="Uname" placeholder="Phonenumber" required value={pno}
          onChange={(e) => setPno(e.target.value)} /> 
         <br/>
         <br/>
         <label><b>Aadhar Number</b></label><br/><br/>
         <input type="text" name="aadhar" id="Uname" placeholder="Aadhar Number" required  value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}/><br/><br/>
         
         <label for="Vaccine"><b>Vaccination Status        </b></label>
         <select class ="vaccine" name="Vaccine" id="Vaccine" required  value={status} onChange={handlechange}>
          <option value=" ">Select your Status</option>
           <option value="Vaccinated">Vaccinated</option>
           <option value="PartiallyVaccinated">Partially Vaccinated</option>
           <option value="Notvaccinated">Not Vaccinated</option>
         </select> 
         <br/>
         <br/>
         <p>If Vaccinated Please upload your Certificate</p><br/>
          <input 
          type="file" 
          id="myFile" 
          name="filename"  
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={!valid}
          ></input><br/>
         <br/>
           <label><b>Password</b></label>  
           <br/>
           <br/>  
           <input type="Password" name="Pass" id="Pass" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
           <br/><br/>
           
           <input type="checkbox" id="check" name="Checkbox" value="Agree" required/>
           <label for="Checkbox">All the information provided are correct as per my knowledge</label><br></br>

           <br/>
           <br/>    
           <div className="button">
           {/* <button>Add Blog</button> */}
           <input type="submit" id="submit" value="Sign Up" placeholder="Sign Up"  />   
           <br/>
           <br/>  
           </div>  
    <br/>
           Already a Member?
           <a href="/login">Login</a> 
           
       </form>  
       </div>
   </div>    
         </div>


    )
}

export default Signup
