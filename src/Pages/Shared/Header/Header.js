import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import TopBanner from '../TopBanner/TopBanner';

const Header = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Navbar className="custom-bg" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/main">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;