import React, { Component } from 'react';
import './SingUp.css';
import {connect} from 'redux-zero/react'
import {NavLink, Redirect} from 'react-router-dom';
import Center from 'react-center';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';
import {signIn, signOut, signUp} from '../../actions/actions'

// import {SingUp} from './actions'

export const SingUp = ({successLogin})=>{
    return(
        <Center className="bodyUp">
          <div className="bodyIn margin">
          <Center>
        <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="logo"/>
        </Center>
        <div>
            {
               successLogin  && <Redirect to = "/home" />
            }
            <form onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp (this.fullNameRef.value, this.lastNameRef.value, this.emailRef.value, this.passwordRef.value) 
               }
            }>
            <input type="text" placeholder = "FullName" ref = {e => this.fullNameRef = e} />
            <input type="text" placeholder = "Lastname" ref = {e => this.lastnameRef = e} />
            <input type="email" placeholder = "Email" ref = {e => this.emailRef = e}/>
            <input type="password" placeholder = "Password" ref = {e => this.passwordRef = e}/>


{/*             <FormGroup controlId="formHorizontalEmail">
            <Col smOffset={4} sm={4}>
              <FormControl className="inputUp" type="text" placeholder="First name" autoComplete="none" ref = {e => this.fullNameRef = e} />
            </Col>
            <Col smOffset={4} sm={4}>
              <FormControl className="inputUp" type="text" placeholder="Last name" autoComplete="none" ref = {e => this.fullLastNameRef = e} />
            </Col>
            <Col smOffset={4} sm={4}>
              <FormControl type="email"  className="inputUp" placeholder = "Email" ref = {e => this.emailRef = e}/>
            </Col>
            <Col smOffset={4} sm={4}>
            <FormControl className="inputUp" type="password" placeholder = "Password" ref = {e => this.passwordRef = e}/>
            </Col>
            </FormGroup> */}

{/*             <FormGroup controlId="formHorizontalPassword">
            <Col smOffset={4} sm={4}>
            <FormControl className="inputUp" type="password" placeholder = "Confirm Password" ref = {e => this.surveyRef = e} />
            </Col>
            </FormGroup> */}
              <button className="btnUp" type="submit">
                 Sign Up!
              </button>
            </form>
    
</div>
</div>
</Center>
    )

}
 const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(SingUp) ; 