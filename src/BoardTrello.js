import React, {Component} from 'react';
import './BoardTrello.css';
import {NavLink} from 'react-router-dom';
import Center from 'react-center';
import {Col} from 'react-bootstrap';
import {boardTrello} from './actions'
export const BoardTrello = ({}) => {
    return(
        <header className="header">
            <nav>
                <Col sm={1}>
                    <i className="fa fa-columns"></i>
                    <span>Boards</span>
                </Col>
                
                <Col sm={8}>
                
                    <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="brandBoard"/>
                </Col>
                <Center/>
                <Col sm={2}>
                    <span></span>
                </Col>
                <Col sm={1}>
                    <a>Sign Out</a>
                </Col>
            </nav>
        </header>
    );
}