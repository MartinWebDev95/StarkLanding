import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroInfo}>
          <h1>Introducing the all-new Stark suite</h1>
          <h2>Supercharge Accessibility</h2>
          <p>
            Tired of manually checking spreadsheets, messy handovers, and
            expensive retrofitting? Stark connects the tools you and your
            team already use in a streamlined end-to-end accessibility workflow
            you actually love.
          </p>

          <div className={styles.buttonsContainer}>
            <button type="button" className={styles.primaryButton}>
              Create a free account
            </button>

            <button type="button" className={styles.secondaryButton}>
              Contact Sales
            </button>

            <img src="/assets/homepage__header-yellow-arrow.svg" alt="Arrow" />
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/assets/homepage__052023.webp"
            alt="Stylized illustration showing Stark customers floating around the Contrast Checker tool"
            className={styles.image}
          />
          <img
            src="/assets/homepage__sparkle.webp"
            alt="Spark to the rounded corners"
            className={styles.sparkle}
          />
          <img
            src="/assets/homepage__avatar-circle.png"
            alt="Circle"
            className={styles.circleTop}
          />
          <img
            src="/assets/homepage__avatar-circle.png"
            alt="Circle"
            className={styles.circleBottom}
          />
          <img
            src="/assets/homepage__alttext-bubble.png"
            alt="Alt text bubble"
            className={styles.altTextBubble}
          />
          <img
            src="/assets/homepage__contrast-bubble.png"
            alt="Contrast bubble"
            className={styles.contrastBubble}
          />
          <img
            src="/assets/homepage__focusorder-bubble.png"
            alt="Focus order bubble"
            className={styles.focusOrderBubble}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
