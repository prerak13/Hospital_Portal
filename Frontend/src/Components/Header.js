import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import {Container,Nav,Navbar,NavDropdown,Form, FormControl, NavLink} from "react-bootstrap";
import { logout } from "../Apiactions/userapis";

function Header({ setSearch }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h4 className="my-0">WeCare Solutions</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>

          {userInfo && (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          )}

          <Nav>
            <Nav.Link href="https://www.google.com" activeStyle>
              Careers
            </Nav.Link>
          </Nav>

          {userInfo ? (
            <Nav>
              <NavDropdown title="Appointments">
                <NavDropdown.Item href="/appointment">
                  Book Appointments
                </NavDropdown.Item>
                <NavDropdown.Item href="/viewappointment">
                  View Appointments
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            ""
          )}
          <Nav>
            <Nav.Link href="/Blogs" activeStyle>
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
