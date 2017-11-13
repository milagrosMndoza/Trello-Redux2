import React, {Component} from 'react';
import './SingIn.css';
import {NavLink} from 'react-router-dom';
import Center from 'react-center';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel, HelpBlock} from 'react-bootstrap';
import {singIn} from './actions'


export const SingIn = ({})=>{
    return(
        <Center className="bodyIn">
        <div className="bodyIn margin">
        <Form horizontal>
        <Center>
        <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="logo"/>
       </Center>
        <FormGroup controlId="formHorizontalEmail formValidationSuccess1"  validationState="success">

          <Col sm={10}>
            <FormControl className="inputIn" type="email" placeholder="Email" />
            </Col>
            <Col sm={10}><HelpBlock>Complete los campos.</HelpBlock>
          </Col>
         
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPassword formValidationSuccess2" validationState="success">
          <Col smOffset={4} sm={4}>
            <FormControl  className="inputIn" type="password" placeholder="Password" />
            <FormControl.Feedback />
          </Col>
        </FormGroup>
 
        <FormGroup>
          <Col smOffset={4} sm={4}>
            <Button className="btnIn" type="submit">
             <NavLink  to="/BoardTrello">Sign In</NavLink>
            </Button>
          </Col>

        </FormGroup>
        <Center>
   
        <NavLink className="navlinkIn" to="/singUp">Create new account</NavLink>
        </Center>
      </Form>
</div>
</Center>
    )

}







