import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact=()=>{
  const [cdata,setData]=useState({
    fullname:"",
    email:"",
  });
  const[Comname,upname]=useState();

  const inputEvent=(event)=>{
    setData(event.target.value);
  }
    return(
        <>
        <div className="bg-light">
        <h2 style={{textAlign:'center',marginTop:'50px',paddingTop:'5%'}}>Fill This Form❤️ {Comname}</h2>
        <div className="container" style={{width:'60%',marginTop:'5%'}}>
            <div className="row">
                <div className="col-12">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your Name</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" name="fullname"  onChange={inputEvent} placeholder="Enter Your Name" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
  </div>
  <div class="form-group mt-4">
    <label for="exampleInputPassword1">Enter Your Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" name="email" onChange={inputEvent} placeholder="Enter Your Email" required/>
  </div>
  <div class="form-check mt-4">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary mt-4" onClick={()=>{upname(cdata);}}>Submit</button>
</form>
</div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Contact;