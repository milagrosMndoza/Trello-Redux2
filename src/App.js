// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import { HashRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import {SingIn} from './components/SingIn/SingIn';
// import {SingUp} from './components/SingUp/SingUp';
// import {Board} from './components/Board/BoardTrello';
// import {BoardTrello} from './components/Board/BoardTrello';
// import {Home} from './Home'

// // import {readBoard} from './actions    
// import { connect } from 'redux-zero/react';

// const App =({successLogin, user, stages, tasks})=> {
//   // readBoard()
//   console.log (stages);
//   console.log (tasks);
// return (
//  <HashRouter>
//       <Switch>
//         <Route  path="/SingIn" render={() => <SingIn successLogin={successLogin} />} /> 
//         <Route  path="/SingUp" render={() => <SingUp successLogin={successLogin}  />} />
//         <Route  path="/Board" render={() => <Board stages={stages}  tasks = {tasks}/>} />
//         <Route  path="/home" render={() => <Home successLogin={successLogin}  user = {user}/>} />

//         {/* <Route render={() => <Redirect to={"/"} />}/> */}
//         <Route exact path="/" render={() => <SingIn successLogin={successLogin}  />} />
//       </Switch>
// </HashRouter> 

// )
// }
// /* <SingUp/> */
// const mapToProps = ({successLogin, user,stages, tasks})  => ({successLogin, user ,stages, tasks});
//  export default connect(mapToProps)(App);

 