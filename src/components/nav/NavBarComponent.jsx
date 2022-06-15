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

const NavBarComponent = () => {
  const { headers, setPath } = useContext(ApiContext);
  const [isOpen, setIsOpen] = useState(false);
  const isToggle = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">Bob's BurgerTown</NavbarBrand>

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
