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
  const [rootEndpoint, setRootEndpoint] = useState({});
  const headers = Object.keys(rootEndpoint);
  const { header } = useParams();

  const isToggle = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/`)
      .then((res) => {
        setRootEndpoint(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, []);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="">Bob's BurgerTown</NavbarBrand>
        <NavbarToggler onClick={isToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>Item</NavItem>

            <UncontrolledDropdown nav>
              {headers.map((header, i) => (
                <DropdownToggle key={i} nav>
                  <Link to={`/categories/${header}`}>{header}</Link>
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
