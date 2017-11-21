import React, {Component} from 'react';
import {connect} from 'redux-zero/react'
import './SingIn.css';
import {NavLink, Redirect} from 'react-router-dom';
import Center from 'react-center';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel, HelpBlock} from 'react-bootstrap';
import {signIn, signOut, signUp} from '../../actions/actions'

// import {SingIn} from './actions'


export const SingIn = ({successLogin})=>{
    return(
       
         <Center className="bodyIn">
          <div className="bodyIn margin">
          <Form horizontal>
          <Center>
        <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="logo"/>
        </Center>
      
        <div className="App">
         {
            successLogin  && <Redirect to = "/home" />
         }
        
         <form onSubmit = {
            e => {
               e.preventDefault();
               signIn ( this.emailInputRef.value,  this.passwordInputRef.value)
            }
         }>
          <FormGroup controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl   placeholder="email"  className="inputIn" ref = { e => this.emailInputRef = e}/>
            </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
            <Col smOffset={4} sm={4}>
             <FormControl    type="password" className="inputIn" placeholder="password"  ref = { e => this.passwordInputRef = e}/>
            </Col>
            </FormGroup>
            <button className="btnIn" type = "submit" > 
               Sign In 
            </button>
         </form>
         
      </div>
        <Center>
           <NavLink className="navlinkIn" to="/singUp">Create new account</NavLink>
        </Center>

      </Form>
      </div>
</Center>
    )

}

const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(SingIn) ;





