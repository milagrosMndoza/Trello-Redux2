import React, {Component} from 'react';
import './BoardTrello.css';
import {NavLink} from 'react-router-dom';
import Center from 'react-center';
import {Col} from 'react-bootstrap';
import {addStage} from '../../actions/actions'
import Stage from '../Stage/Stage';


export const Board = ({stages, tasks}) => {
    const list = stages.map ( stage => {
       return <Stage  key={stage} title={stage} 
          tasks = {  tasks.filter ( e => e.stage === stage )}
       />
    });
 
    return (
           <div className="boards">
                <header className="header">
            <nav>
                <Col sm={1}>
                    <i className="fa fa-columns"></i>
                    <span>Boards</span>
                </Col>-
                
                <Col sm={8}>
                <Center>
                  <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="brandBoard"/>
                </Center>
                </Col>
                
                <Col sm={8}>
                    <span></span>
                </Col>
                <Col sm={1}>
                    <a>Sign Out</a>
                </Col>
            </nav>
        </header>
    
       <div className = "Board-container ">
         
           <div className = "Board-column">
              {list}
           </div>
           <div className = "Board-column">
             <form onSubmit = { (e) => {
                e.preventDefault();
                addStage (this.stageInputRef.value);
             }}>
                <input type="text" ref = {e => this.stageInputRef = e}/>
                <button type="submit">
                   save list
                </button>
                </form>
             </div>
       </div>
    </div>
    
   ); 
 }


 export default Board;