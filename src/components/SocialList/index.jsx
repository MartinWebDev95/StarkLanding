import styles from './SocialList.module.css';

function SocialList() {
  return (
    <ul className={styles.socialList}>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/twitter.png" alt="Twitter" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/instagram.png" alt="Instagram" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/slack.png" alt="Slack" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/share-linkedin.webp" alt="Linkedin" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/youtube.png" alt="YouTube" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/dribbble.png" alt="Dribbble" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="#">
          <img src="/assets/meetup.png" alt="Meetup" />
        </a>
      </li>
    </ul>
  );
}

export default SocialList;
