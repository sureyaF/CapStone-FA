/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, useState, useEffect } from 'react';
//import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Services } from './components/pages/Services/Services';
import About from './components/pages/About';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import DashboardUser from "./components/Dashboards/DashboardUser"
import DashboardManager from "./components/Dashboards/DashboardManager"
import DashboardCon from "./components/Dashboards/DashboardCon"
import Modal, { contextType } from "react-modal"
import Auth from "./components/Authentication/Auth"



//fix browser modal error
Modal.setAppElement('#root')

function App() {

  const loggedInUser = localStorage.getItem("user");
  const loginStatus = localStorage.getItem("LoginStatus");
  


  console.log(`this is Before use effect ${loginStatus}`)

  function checkLoginUser() {
    // if (isLoggedIn === false || isLoggedIn===null) {
    if (localStorage.getItem("LoginStatus")===null) {
      return <div>{`404 Page Not Found `}</div>
    } else {
      return <DashboardUser />
    }
  }
  function checkLoginManager() {
    if (localStorage.getItem("LoginStatus")===null) {
      return <div>404 Page Not Found </div>
    } else {
      return <DashboardManager />
    }
  }
  function checkLoginConsultant() {
    if (localStorage.getItem("LoginStatus")===null) {
      return <div>404 Page Not Found </div>
    } else {
      return <DashboardCon />
    }
  }
  return (
    <>

      <Router>
        {/*<Navbar />*/}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboardUser' component={checkLoginUser} />
          <Route exact path='/dashboardManager' component={checkLoginManager} />
          <Route exact path='/dashboardCon' component={checkLoginConsultant} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;


/* <Route
  exact
  path="/"
  component={loading ? () => <div>Loading posts...</div> : () => <Home posts={posts} />}
/> */