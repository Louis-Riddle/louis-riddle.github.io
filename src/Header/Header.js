import React, { useState } from "react";
import Image from "../UI/Image";
import HamburgerMenu from "../UI/HamburgerMenu";
import MobileMenu from "../UI/MobileMenu";
import Menu from "../UI/Menu";

import logo from "../Assets/logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <Image src={logo} alt="Logo of Louis' Site" classStyles={styles.logo} />
      <HamburgerMenu
        displayState={displayMobileMenu}
        setDisplay={setDisplayMobileMenu}
      />

      <MobileMenu
        displayState={displayMobileMenu}
        setDisplay={setDisplayMobileMenu}
      />
      <Menu className={styles.menu} />
    </div>
  );
};

export default Header;
