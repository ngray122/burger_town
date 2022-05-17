import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const headers = Object.keys(categoryList);

  const isToggle = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, []);

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
                <DropdownToggle key={i} caret nav>
                  {header}
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
