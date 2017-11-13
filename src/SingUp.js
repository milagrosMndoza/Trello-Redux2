import React, { Component } from 'react';
import './SingUp.css';
import {NavLink} from 'react-router-dom';
import Center from 'react-center';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';
import {singUp} from './actions'

export const SingUp = ({})=>{
    return(
        <Center className="bodyUp">
        <div className="bodyUp">
        <Form horizontal>
        <Center>
        <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="logo"/>
       </Center>
        <FormGroup controlId="formHorizontalEmail  formValidationSuccess2" validationState="success">
          <Col smOffset={4} sm={4}>
          <FormControl className="inputUp" type="text" placeholder="First name" autoComplete="none" />
          </Col>
          <Col smOffset={4} sm={4}>
          <FormControl className="inputUp" type="text" placeholder="Last name" autoComplete="none" />
          </Col>
          <Col sm={10}>
            <FormControl className="inputUp" type="email" placeholder="Email" />
          </Col>
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPassword formValidationSuccess2" validationState="success">
          <Col sm={10}>
            <FormControl  className="inputUp" type="password" placeholder="Password" />
          </Col>
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPasswordarn formValidationSuccess2" validationState="success">
        <Col smOffset={4} sm={4}>
            <FormControl className="inputUp"  type="password" placeholder="Confirm Password" autoComplete="none"/>
        </Col>
    </FormGroup>
    
        <FormGroup>
          <Col smOffset={4} sm={4}>
            <Button className="btnUp" type="submit">
            {/* Sign Up */}
            <NavLink  to="/BoardTrello">Sign Up</NavLink>
            </Button>
          </Col>

        </FormGroup>
        <Center>
        {/* <a>Sign In</a> */}
        <NavLink className="navlinkIn" to="/singIn">Sign In</NavLink>
        </Center>
      </Form>
</div>
</Center>
    )

}
