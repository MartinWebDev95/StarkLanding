import getStarkSuite from '../../services/getStarkSuite';
import styles from './SuiteSection.module.css';

function SuiteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Meet the Suite</h1>

        <ul className={styles.suiteList}>
          {getStarkSuite.map((suite) => (
            <li key={suite.id} className={styles.suiteItem}>
              <img src={suite.image} alt={suite.name} />

              <p>{suite.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SuiteSection;
