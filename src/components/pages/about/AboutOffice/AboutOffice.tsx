import React from 'react';
import Image from 'next/image';
import styles from './AboutOffice.module.css';

type AboutOfficeProps = object

const AboutOffice: React.FC<AboutOfficeProps> = () => {
  return (
    <section className={styles.office}>
      <div className={styles.container}>
        <div className={styles.officeContent}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Building tomorrow&apos;s finance, and
              IT solutions from our global hub
            </h2>
            <p className={styles.description}>
              Located in the heart of the financial district, our state-of-the-art facility brings together the brightest minds in finance and technology. We foster innovation through collaboration, cutting-edge infrastructure, and a culture that values both creativity and precision.
            </p>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/about/office-building.webp"
                alt="Modern office building exterior"
                width={800}
                height={600}
                className={styles.officeImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOffice;
