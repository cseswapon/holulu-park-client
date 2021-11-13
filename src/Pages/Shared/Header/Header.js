import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import TopBanner from '../TopBanner/TopBanner';
import logo from '../../../image/logo/phpThumb_generated_thumbnailjpg.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const { user,logout } = useAuth();
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
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto navbar-link align-items-center">
                <NavLink
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                  }}
                >
                  About
                </NavLink>
                {user?.email && (
                  <span>
                    <NavLink
                      to="/order"
                      activeStyle={{
                        fontWeight: "bold",
                        borderBottom: "2px solid blue",
                      }}
                    >
                      My Order
                    </NavLink>
                    <NavLink
                      to="/manage"
                      activeStyle={{
                        fontWeight: "bold",
                        borderBottom: "2px solid blue",
                      }}
                    >
                      All Order
                    </NavLink>
                    <NavLink
                      to="/add"
                      activeStyle={{
                        fontWeight: "bold",
                        borderBottom: "2px solid blue",
                      }}
                    >
                      Add New
                    </NavLink>
                  </span>
                )}
                <NavLink
                  to="/support"
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                  }}
                >
                  Support
                </NavLink>
                <NavLink
                  to="/help"
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                  }}
                >
                  Help
                </NavLink>
                {user?.email && (
                  <span className="fw-bold text-primary m-2">
                    <i className="fas fa-user text-danger"></i>{" "}
                    {user.displayName}
                  </span>
                )}
                {user?.email ? (
                  <button className="btn btn-danger" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                ) : (
                  <NavLink to="/login" className="btn btn-primary">
                    <i className="fas fa-unlock"></i> Login
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;