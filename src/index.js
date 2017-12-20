import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import Board from './components/Board/BoardTrello';
import BoardTrello from './components/Board/BoardTrello'
import Home from './Home';

// import {Home} from './Home'
import {Provider} from 'redux-zero/react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import store from './store/store'
import registerServiceWorker from './registerServiceWorker';
// import {readBoard} from './actions/actions'

const Index = () =>  (
   <Provider store={store}>
      <HashRouter>
         <Switch>
            <Route name="login" exact path = "/SingIn" component = {SingIn}/>
            <Route name="register"  exact path = "/SingUp" component = {SingUp}/>     
            <Route name="home"  exact path = "/home" component = {Home}/>
            <Route name="Board"  exact path = "/board" component = {Board}/>
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(
   <Index />,
    document.getElementById('root'));
registerServiceWorker();
