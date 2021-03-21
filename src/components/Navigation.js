import React from 'react';
import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

    return (
        <Col>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand >
                    {/* <img src="./kuvat/nhl_logo.png" */}
                    <img src={window.location.origin + '/kuvat/nhl_logo.png'} 
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink  className="nav-link" to="/">
                            Etusivu
                        </NavLink>
                        <NavLink className="nav-link" to="/sarjataulukko">
                            Sarjataulukko
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
       
    );
};

export default Navigation;