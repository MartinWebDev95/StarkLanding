import styles from './Submenu.module.css';

function Submenu({ isSubmenuHidden }) {
  return (
    <ul className={styles.submenu} aria-hidden={isSubmenuHidden}>
      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Figma
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for FigJam
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Sketch
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Chrome
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Firefox
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Edge
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Safari
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Arc
        </a>
      </li>

      <li className={styles.submenuItem}>
        <a href="#" className={styles.submenuLink}>
          Stark for Brave
        </a>
      </li>
    </ul>
  );
}

export default Submenu;
