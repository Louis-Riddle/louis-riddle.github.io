import styles from "./MobileMenu.module.css";

const MobileMenu = (props) => {
  const displayMenu = {
    display: props.displayState ? "block" : "none",
  };

  return (
    <div className={styles.container} style={displayMenu}>
      <ul className={styles.menuContainer}>
        <a href="#" className={styles.removeUnderline}>
          <li className={styles.menuItem}>Home</li>
        </a>
        <a href="#AboutMe" className={styles.removeUnderline}>
          <li className={styles.menuItem}>About Me</li>
        </a>
        <a href="#MySkills" className={styles.removeUnderline}>
          <li className={styles.menuItem}>Skills</li>
        </a>
        <a href="#Works" className={styles.removeUnderline}>
          <li className={styles.menuItem}>Featured Works</li>
        </a>
      </ul>
    </div>
  );
};

export default MobileMenu;
