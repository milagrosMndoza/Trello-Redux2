import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import {SingIn} from './SingIn';
import {SingUp} from './SingUp';
import {BoardTrello} from './BoardTrello';
import { connect } from 'redux-zero/react';

const App =({board, user})=> {
return (
 <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <SingIn />} />
        <Route exact path="/singIn" render={() => <SingIn />} /> 
        <Route exact path="/singUp" render={() => <SingUp />} />
        <Route exact path="/BoardTrello" render={() => <BoardTrello />} />
        <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
</BrowserRouter> 

)
}
/* <SingUp/> */
const mapToProps = ({ board, user }) => ({
    board, user 
 });
 export default connect(mapToProps)(App);

