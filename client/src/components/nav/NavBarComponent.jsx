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
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryList, setCategoryList] = useState({});
  // const { headers, values } = categoryList;
  const headers = Object.keys(categoryList);
  const values = Object.values(categoryList);

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
                <DropdownToggle key={i} nav>
                  <Link to={header}>{header}</Link>
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
