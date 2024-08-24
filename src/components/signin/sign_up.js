import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Sign_up = () => {
  const [udata, setudata] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    confirmpassword: "",
  });

  console.log(udata);
  

  const addData = (e) => {
    const {name,value} = e.target;

    setudata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

  const senddata = async(e)=>{
    e.preventDefault();
    const {name,email,mobile,password,confirmpassword}=udata;
    const res = await fetch("register",{
      method:"POST",
      headers:{ 
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name,email,mobile,password,confirmpassword
      })
    });
    const data = await res.json();
    // console.log(data);
    if(res.status ===422 || !data){
      // alert("invalid details");
     toast.warn("Invalid Data",{
      position: "top-center"
     })
    }else{
      // alert("Data Successfully added");
     toast.success("Data Successfully Added",{
      position:"top-center"
     })
      setudata({...udata,name:"",email:"",mobile:"",password:"",confirmpassword:""})
    }
    
  }

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>Create your account</h1>
              <div className="form_data">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={addData}
                  value={udata.name}
                  placeholder="Enter your Name"
                  id="name"
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobilr">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  onChange={addData}
                  value={udata.mobile}
                  placeholder="Enter your number"
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={addData}
                  value={udata.email}
                  placeholder="Enter your email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={addData}
                  value={udata.password}
                  placeholder="At least 6 characters"
                  id="password"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  onChange={addData}
                  value={udata.confirmpassword}
                  placeholder="At least 6 characters"
                  id="confirmpassword"
                />
              </div>
              <button className="signin_btn" onClick={senddata}>Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign In</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer/>
        </div>
      </section>
    </>
  );
};

export default Sign_up;
