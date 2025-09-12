import React from 'react';
import Image from 'next/image';
import { RiTwitterXFill } from "react-icons/ri";
import PageHeader from '@/components/ui/PageHeader';
import styles from './ContactHero.module.css';

// ============================================================================
// CONTACT CONTENT CONFIGURATION - CENTRALIZED TEXT MANAGEMENT
// ============================================================================

const CONTACT_CONTENT = {
  pageTitle: 'Contact us',
  description: 'Are you interested in one of our products, or do you have any questions? Feel free to send us a message, and our team will be happy to assist you and get back to you as soon as possible.',
  contactCategories: {
    newProjects: {
      title: 'Fund E-mail',
      contact: {
        email: 'contact@investfounders.com'
      }
    },
    generalInquiries: {
      title: 'General Information',
      contact: {
        phone: '+99450 552 5557'
      }
    },
    address: {
      title: 'Address',
      contact: {
        line1: 'USA & Europe'
      }
    },
    careers: {
      title: 'Consalting',
      contact: {
        email: 'mentor@investfounders.com'
      }
    },
    followUs: {
      title: 'Follow us',
      contact: {
        social: 'Tw Fb Ins Pin'
      }
    }
  }
} as const;

/**
 * ContactHero component for the contact page
 * Displays contact information and instructions
 */
const ContactHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageHeader title={CONTACT_CONTENT.pageTitle} />
      
      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              {CONTACT_CONTENT.description}
            </p>
            
            <div className={styles.contactGrid}>
              <div className={styles.contactColumn}>
                <div className={styles.contactCategory}>
                  <h3 className={styles.categoryTitle}>
                    {CONTACT_CONTENT.contactCategories.newProjects.title}
                  </h3>
                  <div className={styles.contactDetails}>
                    <a 
                      href={`mailto:${CONTACT_CONTENT.contactCategories.newProjects.contact.email}`}
                      className={styles.contactLink}
                    >
                      {CONTACT_CONTENT.contactCategories.newProjects.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactCategory}>
                  <h3 className={styles.categoryTitle}>
                    {CONTACT_CONTENT.contactCategories.generalInquiries.title}
                  </h3>
                  <div className={styles.contactDetails}>
                    <p className={styles.contactItem}>
                      {CONTACT_CONTENT.contactCategories.generalInquiries.contact.phone}
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactCategory}>
                  <h3 className={styles.categoryTitle}>
                    {CONTACT_CONTENT.contactCategories.address.title}
                  </h3>
                  <div className={styles.contactDetails}>
                    <p className={styles.contactItem}>
                      {CONTACT_CONTENT.contactCategories.address.contact.line1}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.contactColumn}>
                <div className={styles.contactCategory}>
                  <h3 className={styles.categoryTitle}>
                    {CONTACT_CONTENT.contactCategories.careers.title}
                  </h3>
                  <div className={styles.contactDetails}>
                    <a 
                      href={`mailto:${CONTACT_CONTENT.contactCategories.careers.contact.email}`}
                      className={styles.contactLink}
                    >
                      {CONTACT_CONTENT.contactCategories.careers.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactCategory}>
                  <h3 className={styles.categoryTitle}>
                    {CONTACT_CONTENT.contactCategories.followUs.title}
                  </h3>
                  <div className={styles.contactDetails}>
                    <a 
                      href="https://x.com/InvestFounders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <RiTwitterXFill className={styles.socialIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about/contact.png"
              alt="Contact us"
              width={500}
              height={600}
              className={styles.contactImage}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
