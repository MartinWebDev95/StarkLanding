// import { useState } from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.css';
import useMenu from '../../hooks/useMenu';

function Header() {
  const { isMenuHidden, handleOpenMenu } = useMenu();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="#fff" />
          </svg>
        </a>

        <Navigation isMenuHidden={isMenuHidden} />

        <div className={styles.login}>
          <a href="#">Log in</a>

          <button type="button">
            30-day free team trial
          </button>

          <button
            type="button"
            className={styles.buttonMenu}
            aria-hidden={isMenuHidden}
            onClick={handleOpenMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
