import styles from './GetStartedSection.module.css';

function GetStartedSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>
            So, you’re ready to get started and

            <svg width="710" height="59" viewBox="0 0 710 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-20">
              <path d="M0.5 58.8569L10.8925 6.40476L709.5 0.856934L692.179 58.8569H0.5Z" fill="#99D6CC" />
            </svg>
          </span>

          <span>
            supercharge accessibility?
          </span>
        </h1>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h2>Step 1</h2>
            <h3>Start with a free account</h3>

            <p>
              Wherever you are in your accessibility journey, we believe you should
              have access to the best tools.
            </p>

            <button type="button">Create free account</button>
          </li>

          <li className={styles.listItem}>
            <h2>Step 2</h2>
            <h3>Download and install Stark</h3>

            <p>
              Download and install our plugins for Figma, Sketch, as well as our browser extensions.
            </p>

            <button type="button">Download Stark</button>
          </li>

          <li className={styles.listItem}>
            <h2>Step 3</h2>
            <h3>Go Pro when you’re ready</h3>

            <p>
              From Alt-Text and Typography to Touch Targets and Suggestions, there’s
              much more you can do with a Pro account.
            </p>

            <button type="button">Compare plans</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GetStartedSection;
