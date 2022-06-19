import React, { useState, useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { ApiContext } from "../../App";
import styles from "./NavBarComponent.module.css";

const NavBarComponent = () => {
  const { headers, setPath } = useContext(ApiContext);
  const [isOpen, setIsOpen] = useState(false);
  const isToggle = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">
          <h1 className="logo">BurgerTown</h1>
        </NavbarBrand>

        <NavbarToggler onClick={isToggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>Item</NavItem>
            <UncontrolledDropdown nav>
              {headers.map((header, id) => (
                <DropdownToggle nav>
                  <Link
                    className="header-link"
                    key={id}
                    onClick={() => setPath(header)}
                    to={`/categories/${header}`}
                  >
                    {console.log("header in NavBar", header)}
                    {header}
                  </Link>
                </DropdownToggle>
              ))}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
