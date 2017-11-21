import React, { Component } from 'react';
import './SingUp.css';
import {connect} from 'redux-zero/react'
import {NavLink, Redirect} from 'react-router-dom';
import Center from 'react-center';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';
import {signIn, signOut, signUp} from './actions/actions'

// import {SingUp} from './actions'

export const SingUp = ({successLogin})=>{
    return(
        <Center className="bodyUp">
          <div className="bodyIn margin">
          <Form horizontal>
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
                  signUp (this.fullNameRef.value, this.fullLastNameRef.value, this.emailRef.value, this.passwordRef.value, this.surveyRef.value) 
               }
            }>
            <FormGroup controlId="formHorizontalEmail">
            <Col smOffset={4} sm={4}>
              <FormControl className="inputUp" type="text" placeholder="First name" autoComplete="none" ref = {e => this.fullNameRef = e} />
            </Col>
            <Col smOffset={4} sm={4}>
              <FormControl className="inputUp" type="text" placeholder="Last name" autoComplete="none" ref = {e => this.fullLastNameRef = e} />
            </Col>
            <Col smOffset={4} sm={4}>
              <FormControl  className="inputUp" placeholder = "Email" ref = {e => this.emailRef = e}/>
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
            <Col smOffset={4} sm={4}>
            <FormControl className="inputUp" type="password" placeholder = "Password" ref = {e => this.passwordRef = e}/>
            </Col>
            <Col smOffset={4} sm={4}>
            <FormControl className="inputUp" type="password" placeholder = "Confirm Password" ref = {e => this.surveyRef = e} />
            </Col>
            </FormGroup>
              <button className="btnUp" type="submit">
                 Sign Up!
              </button>
            </form>
    
</div>
</Form>
</div>
</Center>
    )

}
const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(SingUp) ;