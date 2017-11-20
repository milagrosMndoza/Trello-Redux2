import React, { Component } from 'react';
import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp} from './actions/actionsLogin'
// import './App.css';


export const Home  = ({successLogin, user}) => {
    return (
      <div className="App">
         {
            !successLogin  && <Redirect to = "/home" />
         }
         <h1> Kahoot Survey Admin </h1>
         <button onClick = {signOut}>
            SignOut
         </button>
         <Redirect to = "/Board" />
            {/* <div>
                 {user.email} - {user.fullname} - {user.survey} -  {user.question} - {user.options} 
            </div> */}
      </div>
    );
}