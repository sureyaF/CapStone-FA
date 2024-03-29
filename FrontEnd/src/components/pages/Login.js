import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Navbar from "../Navbar"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from "../Authentication/Auth"



function Login() {

  //-----------------------------------
  const history = useHistory()
  const [error, seterror] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const logIn = e => {
    e.preventDefault();
    let user = {
      "email": email,
      "password": password
    }
    if (user.email === "" || user.password === "") {
      seterror("Some fields are empty")
    } else {
      axios.post("http://localhost:8080/users/login", user)
        .then(res => {
          //console.log(res)
          const resLen = res.data.length
          if (resLen === 0) {
            //this response is for all users
            seterror('No User Found Please register')
          } else {
            //catch response info and analyse them
            const resInfo = res.data[0]
            if (resInfo.password === user.password) {
              const userTostore={
                "first_name":resInfo.first_name,
                "last_name":resInfo.last_name,
                "phone":resInfo.phone,
                "email":resInfo.email,
                "password":resInfo.password,
              }

              localStorage.setItem('user', resInfo.email)
              localStorage.setItem('LoginStatus', true)
              if (resInfo.authlevel === "manager") {
                //use manager data
                // auth.setAuth()
                history.push('/dashboardManager')
              } else if (resInfo.authlevel === "consult") {
                //use consultant data
                // auth.setAuth()
                history.push('/dashboardCon')
              } else if (resInfo.authlevel === "user") {
                //use user data
                history.push('/dashboardUser')
              }
            } else {
              seterror("Incorrect Password")
            }
          }
        }
        )
    }
  }

  //-----------------------------------
  return (
    <div>

      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <h1>Login Page</h1>
        <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
        <button onClick={logIn} className="btn btn-primary">Login</button>
      </div>
      <br />
      <br />
      <br />
      <h1>{error}</h1>

    </div>
  )
}

export default Login