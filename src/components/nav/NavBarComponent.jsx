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
          <h1 className={styles.logo}>BurgerTown</h1>
        </NavbarBrand>

        <NavbarToggler onClick={isToggle} className={styles.navbar_toggler} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav>
              {headers.map((header, id) => (
                <DropdownToggle nav>
                  <Link
                    className={styles.nav_links}
                    key={id}
                    onClick={() => setPath(header)}
                    to={`/categories/${header}`}
                  >
                    {console.log("header in NavBar", header)}
                    {header === "storeNextDoor" ? (
                      <span>Store Next Door</span>
                    ) : header === "characters" ? (
                      <span>Characters</span>
                    ) : header === "episodes" ? (
                      <span>Episodes</span>
                    ) : header === "pestControlTruck" ? (
                      <span>Pest Control Truck</span>
                    ) : header === "burgerOfTheDay" ? (
                      <span>Burger Of The Day</span>
                    ) : null}
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
