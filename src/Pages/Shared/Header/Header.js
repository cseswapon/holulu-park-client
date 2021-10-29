import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import TopBanner from '../TopBanner/TopBanner';
import logo from '../../../image/logo/phpThumb_generated_thumbnailjpg.png'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Navbar className="custom-bg" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                    <img
                    alt="not found"
                    src={logo}
                    // width="30"
                    height="50"
                    // className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navbar-link">
                            <NavLink
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                borderBottom : "2px solid blue"
                            }}
                            >
                            Home
                            </NavLink>
                            <NavLink
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                borderBottom : "2px solid blue"
                            }}
                            >
                            About
                            </NavLink>
                            <NavLink
                            to="/support"
                            activeStyle={{
                                fontWeight: "bold",
                                borderBottom : "2px solid blue"
                            }}
                            >
                            Support
                            </NavLink>
                            <NavLink
                            to="/help"
                            activeStyle={{
                                fontWeight: "bold",
                                borderBottom : "2px solid blue"
                            }}
                            >
                            Help
                            </NavLink>
                            <NavLink
                            to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                borderBottom : "2px solid blue"
                            }}
                            >
                            Login
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;