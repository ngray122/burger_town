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

  const isToggle = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/`)
      .then((res) => {
        // console.log("res =>", res);
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, []);
  {
    // console.log("category list -> ", categoryList);
  }
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Bob's BurgerTown</NavbarBrand>
        <NavbarToggler onClick={isToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {/* <h1>{Object.keys(categoryList)}</h1> */}
            {console.log(typeof categoryList)}
            {/* {categoryList.map((i, category) => {
              <NavItem>
                <NavLink href={""}>{category.name}</NavLink>{" "}
              </NavItem>; */}

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Go To
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>

                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
