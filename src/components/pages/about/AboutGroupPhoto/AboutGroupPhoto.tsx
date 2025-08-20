import React from 'react';
import Image from 'next/image';
import styles from './AboutGroupPhoto.module.css';

type AboutGroupPhotoProps = object

const AboutGroupPhoto: React.FC<AboutGroupPhotoProps> = () => {
  return (
    <section className={styles.groupPhoto}>
      <div className={styles.groupPhotoContent}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>
            Come join our dynamic team
          </h2>
          <p className={styles.description}>
            Were always looking for talented individuals who share our passion for innovation and excellence. Join us in building the future of finance.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.joinButton}>
              View Open Positions
            </button>
          </div>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about/team-boat.webp"
              alt="Team group photo on boat"
              width={800}
              height={600}
              className={styles.groupImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGroupPhoto;
