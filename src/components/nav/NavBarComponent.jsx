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
          <img
            className={styles.nav_logo}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e503f688-c23b-44bc-96d8-1c0c9958121f/d7rvdss-e8fe7e03-3e9e-47a4-bd66-cf650ed1ed68.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1MDNmNjg4LWMyM2ItNDRiYy05NmQ4LTFjMGM5OTU4MTIxZlwvZDdydmRzcy1lOGZlN2UwMy0zZTllLTQ3YTQtYmQ2Ni1jZjY1MGVkMWVkNjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.124ovyeSJTtbXpI8rkA_KR61QNaM3smdQC2-ZUH7kY4"
            alt="kuchi kopi"
          ></img>
        </NavbarBrand>
        <NavbarToggler onClick={isToggle} className={styles.navbar_toggler} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav>
              {headers.map((header, id) =>
                header === "endCreditsSequence" ? null : (
                  <DropdownToggle key={id} nav>
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
                )
              )}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
