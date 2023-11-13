import styles from './NavFooter.module.css';

function NavFooter() {
  return (
    <ul className={styles.footerList}>
      <li className={styles.listItem}>
        Product

        <ul className={styles.footerSubmenus}>
          <li className={styles.submenuItem}>
            <a href="#">Stark for Figma</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for FigJam</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Sketch</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for AdobeXD</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Chrome</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Firefox</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Edge</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Safari</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Arc</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Stark for Brave</a>
          </li>
        </ul>
      </li>

      <li className={styles.listItem}>
        Resources

        <ul className={styles.footerSubmenus}>
          <li className={styles.submenuItem}>
            <a href="#">Blog</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Library</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Release Notes</a>
          </li>
        </ul>
      </li>

      <li className={styles.listItem}>
        Help

        <ul className={styles.footerSubmenus}>
          <li className={styles.submenuItem}>
            <a href="#">My Account</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Support Docs</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Contact Us</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Feature Requests</a>
          </li>
        </ul>
      </li>

      <li className={styles.listItem}>
        Company

        <ul className={styles.footerSubmenus}>
          <li className={styles.submenuItem}>
            <a href="#">Press Releases</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Privacy Policy</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Cookie Policy</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Security Overview</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Status</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Terms of Service</a>
          </li>

          <li className={styles.submenuItem}>
            <a href="#">Code of Conduct</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavFooter;
