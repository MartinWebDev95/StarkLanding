import NavFooter from '../NavFooter';
import SocialList from '../SocialList';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Made remotely with love by Stark Lab, Inc.</h1>

          <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <title>Stark logo</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M32 64.8574C49.6731 64.8574 64 50.5305 64 32.8574C64 15.1843 49.6731 0.857422 32 0.857422C14.3269 0.857422 0 15.1843 0 32.8574C0 50.5305 14.3269 64.8574 32 64.8574ZM30.8449 46.2821V52.0715C36.3431 52.4081 41.7211 50.3675 45.6119 46.4685C53.1294 38.9513 53.1294 26.7637 45.6119 19.247C44.9287 18.5634 44.1954 17.9318 43.418 17.3574L39.2672 21.5078L20.6491 40.1239C17.2379 34.7923 17.9961 27.8057 22.4716 23.3298C25.281 20.5148 29.1927 19.0879 33.1549 19.4327V13.6433C27.6567 13.3069 22.2788 15.3475 18.3881 19.2466C10.8706 26.7639 10.8706 38.9514 18.3881 46.4682C19.0713 47.1518 19.8046 47.7834 20.582 48.3577L24.7327 44.2074L43.3508 25.5909C46.762 30.9225 46.0038 37.9092 41.5283 42.385C38.7188 45.2 34.8072 46.6269 30.8449 46.2821Z" fill="#F6F6EB" />
          </svg>
        </div>

        <NavFooter />

        <div className={styles.containerSocial}>
          <SocialList />

          <p>Stark Lab, Inc. Copyright 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
