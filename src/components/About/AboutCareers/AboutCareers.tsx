import React from 'react';
import Image from 'next/image';
import styles from './AboutCareers.module.css';

interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
}

interface AboutCareersProps {
  className?: string;
}

const AboutCareers: React.FC<AboutCareersProps> = ({ className = '' }) => {
  const jobListings: JobListing[] = [
    {
      id: '1',
      title: 'PR & Communications Lead',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      id: '2',
      title: 'Chief Policy Officer',
      location: 'United States',
      type: 'Remote • Full-Time'
    },
    {
      id: '3',
      title: 'Chief Revenue Officer',
      location: 'United States',
      type: 'Remote • Full-Time'
    }
  ];

  const handleAllRolesClick = () => {
    console.log('All 19 Roles button clicked');
    // Navigate to careers page or open careers portal
  };

  const handleJobClick = (job: JobListing) => {
    console.log('Job clicked:', job.title);
    // Navigate to job details or application page
  };

  return (
    <section className={`${styles.careers} ${className}`} role="region" aria-labelledby="careers-section-title">
      <div className={styles.container}>
        <div className={styles.careersContent}>
          <div className={styles.headerSection}>
            <p className={styles.sectionLabel}>Careers at Ondo</p>
            <h2 id="careers-section-title" className={styles.title}>
              Come join our decentralized<br />but tight-knit team
            </h2>
            <button 
              className={styles.allRolesButton}
              onClick={handleAllRolesClick}
              aria-label="View all 19 available roles"
            >
              All 19 Roles
            </button>
          </div>
          
          <div className={styles.jobListings} role="list" aria-label="Featured job openings">
            {jobListings.map((job) => (
              <div 
                key={job.id} 
                className={styles.jobCard} 
                role="listitem"
                onClick={() => handleJobClick(job)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleJobClick(job);
                  }
                }}
                tabIndex={0}
                aria-label={`${job.title} position in ${job.location}, ${job.type}`}
              >
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDetails}>
                  {job.location} • {job.type}
                </p>
              </div>
            ))}
          </div>
          
          <div className={styles.teamPhotoSection}>
            <div className={styles.teamPhotoContainer}>
              <Image
                src="/images/about/team-boat.webp"
                alt="Team celebration photo on boat with bridge in background"
                width={1200}
                height={800}
                className={styles.teamPhoto}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareers;
