import { useState } from 'react';
import styles from './AISection.module.css';

function AISection() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <section className={styles.aiSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>
            Introducing Sidekick

            <svg width="568" height="57" viewBox="0 0 568 57" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.titleBg}>
              <path d="M0 57L8.32573 5.45217L568 0L554.124 57H0Z" fill="var(--lightYellow)" />
            </svg>
          </span>

          <span>
            Your new AI-powered accessibility
            assistant in Stark
          </span>
        </h1>

        <p className={styles.description}>
          Designing with accessibility in mind just got ten times faster. Automatically
          scan your Figma or Sketch files and, in only seconds, you’ll get suggestions
          for how to fix the accessibility issues in your design - no prior knowledge
          needed!
        </p>

        <div className={styles.containerVideo}>
          <svg width="445" height="410" viewBox="0 0 445 410" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.shapeCyan}>
            <path d="M46.9349 338.378C30.2143 326.986 16.5724 311.079 8.59625 292.456C-9.37038 250.476 0.868112 195.19 41.948 172.708C83.7292 149.84 135.828 142.321 169.402 106.081C195.152 78.2885 205.456 36.7387 236.895 15.6064C288.079 -18.8073 361.823 12.7332 400.593 51.8842C416.52 67.9692 428.512 88.7202 430.826 111.237C433.14 133.755 425.959 156.059 422.906 178.508C416.222 227.494 441.621 264.257 444.198 310.598C448.552 388.984 362.659 423.241 298.44 404.999C244.722 389.738 198.834 356.367 141.166 355.961C128.054 355.865 114.92 357.677 101.83 357.128C82.1513 356.057 63.1553 349.568 46.9349 338.378V338.378Z" fill="#99D6CC" />
          </svg>

          <svg width="540" height="617" viewBox="0 0 540 617" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.shapeYellow}>
            <path d="M445.56 149.191C453.145 160.728 460.257 172.267 466.883 183.53C535.913 301.021 588.678 463.395 466.33 567.45C413.653 612.261 305.493 648.752 262.078 572.438C227.389 511.456 276.773 439.467 238.154 379.566C189.892 304.746 68.3036 308.579 19.2668 234.287C-10.6299 189.067 -2.17208 125.338 30.7347 82.2435C80.6644 16.8525 178.135 -9.74503 256.666 4.20797C343.899 19.8029 399.074 78.4789 445.56 149.191Z" fill="#FEDB63" />
          </svg>

          <div className={styles.video}>
            <img
              src="/assets/video-still__052023.webp"
              alt="Thumbnail for the 'Meet the Stark Suite' video"
              aria-hidden={isVideoHidden}
              onClick={() => setIsVideoHidden(false)}
              loading="lazy"
            />

            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden={isVideoHidden}
              onClick={() => setIsVideoHidden(false)}
            >
              <circle cx="40" cy="40" r="40" fill="#381FD1" />
              <path d="M56.125 36.8971C58.625 38.2762 58.625 41.7239 56.125 43.1029L33.625 55.5146C31.125 56.8937 28 55.1699 28 52.4117L28 27.5883C28 24.8301 31.125 23.1063 33.625 24.4854L56.125 36.8971Z" fill="white" />
            </svg>

            {!isVideoHidden && (
              <iframe
                src="https://www.youtube.com/embed/tjriZyHjF4k?autoplay=1&amp;cc_load_policy=1&amp;fs=0&amp;color=white"
                title="Stark Sidekick Announcement"
                allow="autoplay"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISection;
