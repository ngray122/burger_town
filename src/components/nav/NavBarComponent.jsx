import React, { useState, useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { ApiContext } from "../../App";
import styles from "./NavBarComponent.module.css";

const headersMap = {
  storeNextDoor: "Store Next Door",
  characters: "Characters",
  episodes: "Episodes",
  pestControlTruck: "Pest Control Truck",
  burgerOfTheDay: "Burger Of The Day",
};
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
                    <span className={styles.header_links}>
                      {headersMap[header] ?? <></>}
                    </span>
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
