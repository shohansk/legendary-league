import React from 'react';
import {  Button, Container, Form, FormControl, Nav, Navbar  } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import './Header.css';


import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Teams</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            
                        </Nav>
                       
                    </NavbarCollapse>
                </Container>
            </Navbar>
            {/* <img className="media-image w-100 h-25" src={process.env.PUBLIC_URL + "/wwe.jpg"} alt="dsfdfsdf" /> */}
            
        </div>
    );
};

export default Header;