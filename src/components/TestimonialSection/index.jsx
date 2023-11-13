import getTestimonials from '../../services/getTestimonials';
import styles from './TestimonialSection.module.css';
import useTestimonial from '../../hooks/useTestimonials';
import Testimonial from '../Testimonial';

function TestimonialSection() {
  const { testimonialListRef, testimonialRef } = useTestimonial();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>Loved by the community,</span>

          <span>
            trusted by 25,000+ companies

            <svg width="766" height="58" viewBox="0 0 766 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-16"><path d="M0.5 58L4.06515 5.54783L765.5 0L762.225 58H0.5Z" fill="#FEDB63" /></svg>
          </span>
        </h1>

        <div className={styles.testimonial}>
          <ul className={styles.testimonialList} ref={testimonialListRef}>
            {getTestimonials.map((item) => (
              <Testimonial
                key={item.id}
                item={item}
                testimonialRef={testimonialRef}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
