import React from 'react';
import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = () => {

    return (
        <Col>
            <Navbar variant="dark" bg="dark"expand="lg">
                <Navbar.Brand >
                    {/* <img src="./kuvat/nhl_logo.png" */}
                    <img src={window.location.origin + '/kuvat/nhl_logo.png'} 
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="NHL logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink  className="nav-link" to="/">
                            <b>Etusivu</b>
                        </NavLink>
                        <NavLink className="nav-link" to="/sarjataulukko">
                            <b>Sarjataulukko </b>
                        </NavLink>
                        <NavLink className="nav-link" to="/joukkueet">
                            <b>Joukkueet</b>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
       
    );
};

export default Navigation;