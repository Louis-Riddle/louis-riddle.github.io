import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.menuContainer}>
        <a href="#Home" className={styles.removeUnderline}>
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

export default Menu;
