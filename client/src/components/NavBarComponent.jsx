import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryList, setCategoryList] = useState({});
  // const { headers, values } = categoryList;
  const headers = Object.keys(categoryList);
  const values = Object.values(categoryList);

  console.log("values -> ", values);
  console.log("values typeof -> ", typeof values);
  console.log("categoryList -> ", categoryList);

  const isToggle = (e) => {
    setIsOpen(!isOpen);
  };

  {
    console.log("headers[0]-> ", headers[0]);
    console.log("values[0]-> ", values[0]);
  }
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
                  <NavLink href={values[i]}>{header}</NavLink>
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
