import React from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            src={require("../Assets/Images/Capture1.PNG")}
            class="rounded float-left thumbnail"
            alt="LOGO"
            width={"50px"}
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/AdminDashboard">Admin Dashboard</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/NormalDashboard">Normal Dashboard</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
//https://www.geeksforgeeks.org/reactjs-reactstrap-navbar-component/
export default Navigation;
