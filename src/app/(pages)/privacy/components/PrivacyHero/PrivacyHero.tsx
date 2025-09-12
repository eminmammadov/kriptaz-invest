import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import styles from './PrivacyHero.module.css';

// ============================================================================
// PRIVACY POLICY CONTENT CONFIGURATION - CENTRALIZED TEXT MANAGEMENT
// ============================================================================

const PRIVACY_CONTENT = {
  pageTitle: 'Privacy Policy',
  effectiveDate: 'Effective as of January 15, 2025',
  companyName: 'Invest Founders',
  tableOfContents: [
    'Index',
    'Personal information we collect',
    'Tracking & other technologies',
    'How we use your personal information',
    'How we share your personal information',
    'Your choices',
    'Other sites and services',
    'Security',
    'International data transfer',
    'Children',
    'Changes to this Privacy Policy',
    'How to contact us',
    'Notice to European users'
  ],
  mainContent: {
    introduction: {
      paragraph1: 'Invest Founders (and our subsidiaries and affiliates) (collectively, "Invest Founders", "we", "us" or "our") develops investment-focused blockchain technologies and products. This Privacy Policy describes how Invest Founders processes personal information that we collect through our digital or online properties or services that link to this Privacy Policy (including, as applicable, our website and social media pages) as well as our marketing and other activities described in this Privacy Policy (collectively, the "Service"). Invest Founders may provide additional or supplemental privacy policies to individuals for specific products or services that we offer at the time we collect personal information.',
      paragraph2: 'For clarity, this Privacy Policy does not apply to any decentralized aspect of the Invest Founders blockchain that we do not control due to the decentralized nature of such services.',
      europeanNote: 'European Users: Please see the \'Notice to European Users\' section below for additional information for individuals located in the European Economic Area or United Kingdom (which we refer to as "Europe," and "European" should be understood accordingly).'
    },
    personalInformation: {
      title: 'Personal information we collect',
      infoYouProvide: {
        title: 'Information you provide to us.',
        description: 'Personal information you may provide to us through the Service or otherwise includes:',
        items: [
          'Contact data, such as your first and last name, salutation, email address, mailing address, and phone number.',
          'Demographic data, such as your city, state, country of residence, postal code, and age.',
          'Profile data, such as the username and password that you may set to establish an online account on the Service, avatar, date of birth, biographical details, profile photograph or picture, interests, preferences, and any other information that you add to your account profile.',
          'Communications data based on our exchanges with you, including when you contact us through the Service, social media, or otherwise.',
          'Marketing data, such as your preferences for receiving our marketing communications and details about your engagement with them.',
          'Transaction data, such as information about payments to and from you and other details of products or services you have purchased from us.',
          'Other data that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Policy or as otherwise disclosed at the time of collection.'
        ]
      },
      thirdPartySources: {
        title: 'Third-party sources.',
        description: 'We may combine personal information we receive from you with personal information falling within one of the categories identified above that we obtain from other sources, such as:',
        items: [
          'Public sources, such as government agencies, public records, public blockchains, and other publicly available sources.',
          'Marketing partners, such as joint marketing partners and event co-sponsors.',
          'Service providers that provide services on our behalf or help us operate the Service or our business.',
          'Third-party linked services, such as third-party cryptocurrency platforms or wallets, that you use to log into, or otherwise link to, your Service account. This data may include your username, profile picture and other information associated with your account on that third-party service that is made available to us based on your account settings on that service.'
        ]
      },
      automaticCollection: {
        title: 'Automatic data collection.',
        description: 'We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, and your interaction over time with the Service, our communications and other online services, such as:',
        items: [
          'Device data, such as your computer or mobile device operating system type and version number, manufacturer and model, device identifier, browser type, screen resolution, IP address, the website you visited before browsing to our Service, and general location information such as city, state or geographic area.',
          'Online activity data, such as information about your use of, and actions on, our Service, including pages or screens you viewed, how long you spent on a page or screen, navigation paths between pages or screens, information about your activity on a page or screen, access times, and length of access.'
        ]
      }
    },
    trackingTechnologies: {
      title: 'Tracking & other technologies',
      description: 'For more information concerning our automatic collection of data, please see the Tracking & other technologies section below and our Cookie Policy.'
    },
    howWeUse: {
      title: 'How we use your personal information',
      serviceDelivery: {
        title: 'Service delivery and operations.',
        description: 'We may use your personal information to:',
        items: [
          'Provide, operate, maintain, secure and improve the Service.',
          'Process or facilitate payments and transactions.',
          'Provide information about our Service.',
          'Communicate with you about the Service, including by sending you announcements, updates, security alerts, and support and administrative messages.',
          'Understand your needs and interests, and personalize your experience with the Service and our communications.',
          'Provide support and maintenance for the Service.'
        ]
      },
      serviceImprovement: {
        title: 'Service improvement and analytics.',
        description: 'We may use your personal information to analyze your usage of the Service, improve the Service, improve the rest of our business, help us understand user activity on the Service, including which pages are most and least visited and how visitors move around the Service, as well as user interactions with our emails, and to develop new products and services. For example, we may use Google Analytics for this purpose. You can learn more about Google Analytics and how to prevent the use of Google Analytics relating to your use of our sites here: https://tools.google.com/dlpage/gaoptout?hl=en.'
      },
      marketing: {
        title: 'Marketing.',
        description: 'We and our service providers may collect and use your personal information for marketing purposes. We may send you direct marketing communications and may personalize these messages based on your needs and interests. You may opt-out of our marketing communications as described in the Opt-out of marketing section below.'
      },
      compliance: {
        title: 'Compliance and protection.',
        description: 'We may use your personal information to:',
        items: [
          'Comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities.',
          'Protect our, your or others\' rights, privacy, safety or property (including by making and defending legal claims).',
          'Audit our internal processes for compliance with legal and contractual requirements and internal policies.',
          'Enforce the terms and conditions that govern the Service.',
          'Prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity, including cyberattacks and identity theft.'
        ]
      }
    },
    howWeShare: {
      title: 'How we share your personal information',
      description: 'We may share your personal information in the following circumstances or as otherwise described in this policy:',
      items: [
        'Service providers. We may share your personal information with third party companies and individuals that provide services on our behalf or help us operate the Service (such as customer support, hosting, analytics, email delivery, marketing, and database management services). These third parties may use your personal information only as directed or authorized by us and in a manner consistent with this Privacy Policy.',
        'Professional advisors. We may disclose your personal information to professional advisors, such as lawyers, bankers, auditors and insurers, where necessary in the course of the professional services that they render to us.',
        'Business transfers. We may sell, transfer or otherwise share some or all of our business or assets, including your personal information, in connection with a business transaction (or potential business transaction) such as a corporate divestiture, merger, consolidation, acquisition, reorganization or sale of assets, or in the event of bankruptcy or dissolution.',
        'Compliance and protection. We may share your personal information as we believe necessary or appropriate to: (a) comply with applicable laws; (b) enforce our terms and conditions; (c) protect our, your or others\' rights, privacy, safety or property; and (d) protect, investigate and deter against fraudulent, harmful, unauthorized, unethical or illegal activity.',
        'Consent. We may share your personal information for other purposes pursuant to your consent or at your direction.'
      ]
    },
    yourChoices: {
      title: 'Your choices',
      accessUpdate: {
        title: 'Access or update your information.',
        description: 'If you have registered for an account with us through the Service, you may review and update certain account information by logging into the account.'
      },
      optOut: {
        title: 'Opt-out of communications.',
        description: 'You may opt-out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of the email, or by contacting us. Please note that if you choose to opt-out of marketing-related emails, you may continue to receive service-related and other non-marketing emails.'
      },
      doNotTrack: {
        title: 'Do Not Track.',
        description: 'Some Internet browsers may be configured to send "Do Not Track" signals to the online services that you visit. We currently do not respond to "Do Not Track" signals. To find out more about "Do Not Track," please visit http://www.allaboutdnt.com.'
      }
    },
    otherSites: {
      title: 'Other sites and services',
      description: 'The Service may contain links to websites, mobile applications, and other online services operated by third parties. In addition, our content may be integrated into web pages or other online services that are not associated with us. These links and integrations are not an endorsement of, or representation that we are affiliated with, any third party. We do not control websites, mobile applications or online services operated by third parties, and we are not responsible for their actions. We encourage you to read the privacy policies of the other websites, mobile applications and online services you use.'
    },
    security: {
      title: 'Security',
      description: 'We employ technical, organizational and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information.'
    },
    internationalTransfer: {
      title: 'International data transfer',
      description: 'We are headquartered in the United States and may use service providers that operate in other countries, including the United Kingdom. Your personal information may be transferred to the United States or other locations where privacy laws may not be as protective as those in your state, province, or country.'
    },
    children: {
      title: 'Children',
      description: 'The Service is not intended for use by anyone under 18 years of age. If you are a parent or guardian of a child from whom you believe we have collected personal information in a manner prohibited by law, please contact us. If we learn that we have collected personal information through the Service from a child without the consent of the child\'s parent or guardian as required by law, we will comply with applicable legal requirements to delete the information.'
    },
    changes: {
      title: 'Changes to this Privacy Policy',
      description: 'We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service or other appropriate means. Any modifications to this Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Service after the effective date of any modified Privacy Policy indicates your acknowledging that the modified Privacy Policy applies to your interactions with the Service and our business. Depending on the kind of change we make to this Privacy Policy, we might notify you of the change or request your consent to it.'
    },
    contact: {
      title: 'How to contact us',
      description: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at:',
      email: 'legal@investfounders.com'
    }
  }
} as const;

/**
 * PrivacyHero component for the privacy page
 * Displays privacy policy with two-column layout
 */
const PrivacyHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageHeader title={PRIVACY_CONTENT.pageTitle} />
      
      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          <div className={styles.tableOfContents}>
            <h3 className={styles.tocTitle}>Table of content</h3>
            <ul className={styles.tocList}>
              {PRIVACY_CONTENT.tableOfContents.map((item, index) => (
                <li key={index} className={styles.tocItem}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}`} className={styles.tocLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.mainContent}>
            <div className={styles.headerSection}>
              <p className={styles.effectiveDate}>{PRIVACY_CONTENT.effectiveDate}</p>
            </div>
            
            <div className={styles.contentBody}>
              <div className={styles.section}>
                <p className={styles.paragraph}>
                  {PRIVACY_CONTENT.mainContent.introduction.paragraph1}
                </p>
                <p className={styles.paragraph}>
                  {PRIVACY_CONTENT.mainContent.introduction.paragraph2}
                </p>
                <p className={styles.paragraph}>
                  <strong>{PRIVACY_CONTENT.mainContent.introduction.europeanNote}</strong>
                </p>
              </div>
              
              <div className={styles.section} id="personal-information-we-collect">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.personalInformation.title}</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.personalInformation.infoYouProvide.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.personalInformation.infoYouProvide.description}</p>
                  <ul className={styles.bulletList}>
                    {PRIVACY_CONTENT.mainContent.personalInformation.infoYouProvide.items.map((item, index) => (
                      <li key={index} className={styles.bulletItem}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.personalInformation.thirdPartySources.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.personalInformation.thirdPartySources.description}</p>
                  <ul className={styles.bulletList}>
                    {PRIVACY_CONTENT.mainContent.personalInformation.thirdPartySources.items.map((item, index) => (
                      <li key={index} className={styles.bulletItem}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.personalInformation.automaticCollection.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.personalInformation.automaticCollection.description}</p>
                  <ul className={styles.bulletList}>
                    {PRIVACY_CONTENT.mainContent.personalInformation.automaticCollection.items.map((item, index) => (
                      <li key={index} className={styles.bulletItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.section} id="tracking-other-technologies">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.trackingTechnologies.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.trackingTechnologies.description}</p>
              </div>
              
              <div className={styles.section} id="how-we-use-your-personal-information">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.howWeUse.title}</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.howWeUse.serviceDelivery.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.howWeUse.serviceDelivery.description}</p>
                  <ul className={styles.bulletList}>
                    {PRIVACY_CONTENT.mainContent.howWeUse.serviceDelivery.items.map((item, index) => (
                      <li key={index} className={styles.bulletItem}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.howWeUse.serviceImprovement.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.howWeUse.serviceImprovement.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.howWeUse.marketing.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.howWeUse.marketing.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.howWeUse.compliance.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.howWeUse.compliance.description}</p>
                  <ul className={styles.bulletList}>
                    {PRIVACY_CONTENT.mainContent.howWeUse.compliance.items.map((item, index) => (
                      <li key={index} className={styles.bulletItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.section} id="how-we-share-your-personal-information">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.howWeShare.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.howWeShare.description}</p>
                <ul className={styles.bulletList}>
                  {PRIVACY_CONTENT.mainContent.howWeShare.items.map((item, index) => (
                    <li key={index} className={styles.bulletItem}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section} id="your-choices">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.yourChoices.title}</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.yourChoices.accessUpdate.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.yourChoices.accessUpdate.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.yourChoices.optOut.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.yourChoices.optOut.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{PRIVACY_CONTENT.mainContent.yourChoices.doNotTrack.title}</h3>
                  <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.yourChoices.doNotTrack.description}</p>
                </div>
              </div>
              
              <div className={styles.section} id="other-sites-and-services">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.otherSites.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.otherSites.description}</p>
              </div>
              
              <div className={styles.section} id="security">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.security.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.security.description}</p>
              </div>
              
              <div className={styles.section} id="international-data-transfer">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.internationalTransfer.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.internationalTransfer.description}</p>
              </div>
              
              <div className={styles.section} id="children">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.children.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.children.description}</p>
              </div>
              
              <div className={styles.section} id="changes-to-this-privacy-policy">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.changes.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.changes.description}</p>
              </div>
              
              <div className={styles.section} id="how-to-contact-us">
                <h2 className={styles.sectionTitle}>{PRIVACY_CONTENT.mainContent.contact.title}</h2>
                <p className={styles.paragraph}>{PRIVACY_CONTENT.mainContent.contact.description}</p>
                <p className={styles.paragraph}>
                  <a href={`mailto:${PRIVACY_CONTENT.mainContent.contact.email}`} className={styles.contactLink}>
                    {PRIVACY_CONTENT.mainContent.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyHero;
