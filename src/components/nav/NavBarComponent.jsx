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
import styles from "./NavBarComponenr.module.css";

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
          <h1 id="logo">BurgerTown</h1>
        </NavbarBrand>

        <NavbarToggler onClick={isToggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>Item</NavItem>
            <UncontrolledDropdown nav>
              {headers.map((header, i) => (
                <DropdownToggle key={i} nav>
                  <Link
                    onClick={() => setPath(header)}
                    to={`/categories/${header}`}
                  >
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
