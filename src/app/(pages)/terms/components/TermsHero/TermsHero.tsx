import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import styles from './TermsHero.module.css';

// ============================================================================
// TERMS OF USE CONTENT CONFIGURATION - CENTRALIZED TEXT MANAGEMENT
// ============================================================================

const TERMS_CONTENT = {
  pageTitle: 'Terms of Use',
  lastRevised: 'Last Revised: January 15, 2025',
  companyName: 'Invest Founders',
  tableOfContents: [
    'Access to the Site',
    'Indemnification',
    'Third-Party Links & Ads; Other Users',
    'Disclaimers',
    'Limitation of Liability',
    'Term and Termination',
    'General',
    'Arbitration Agreement',
    'Contact Information'
  ],
  mainContent: {
    introduction: {
      paragraph1: 'Please read these Terms of Use (the "Terms") and our Privacy Policy carefully because they govern your use of the website located at www.investfounders.com and all related websites and subdomains (collectively, the "Site") and other services enabled or offered by Invest Founders (and our subsidiaries and affiliates) ("Invest Founders", "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.',
      paragraph2: 'THESE TERMS SET FORTH THE LEGALLY BINDING TERMS AND CONDITIONS THAT GOVERN YOUR USE OF THE SITE. BY ACCESSING OR USING THE SITE, YOU ARE ACCEPTING THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT). YOU MAY NOT ACCESS OR USE THE SITE OR ACCEPT THE TERMS IF YOU ARE NOT AT LEAST 18 YEARS OLD. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THESE TERMS, DO NOT ACCESS AND/OR USE THE SITE.',
      arbitrationNotice: 'PLEASE BE AWARE THAT SECTION 7.2 CONTAINS PROVISIONS GOVERNING HOW TO RESOLVE DISPUTES BETWEEN YOU AND INVEST FOUNDERS. AMONG OTHER THINGS, SECTION 7.2 INCLUDES AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY BINDING AND FINAL ARBITRATION. SECTION 7.2 ALSO CONTAINS A CLASS ACTION AND JURY TRIAL WAIVER. PLEASE READ SECTION 7.2 CAREFULLY.',
      optOutNotice: 'UNLESS YOU OPT OUT OF THE AGREEMENT TO ARBITRATE WITHIN 30 DAYS: (1) YOU WILL ONLY BE PERMITTED TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION; AND (2) YOU ARE WAIVING YOUR RIGHT TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL.'
    },
    accessToSite: {
      title: 'Access to the Site',
      license: {
        title: '1. License.',
        description: 'Subject to these Terms, Invest Founders grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, noncommercial use.'
      },
      restrictions: {
        title: '2. Certain Restrictions.',
        description: 'The rights granted to you in these Terms are subject to the following restrictions:',
        items: [
          'you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed on the Site;',
          'you shall not modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Site;',
          'you shall not access the Site in order to build a similar or competitive website, product, or service; and',
          'except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means.'
        ],
        additional: 'Unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site (or on any content displayed on the Site) must be retained on all copies thereof.'
      },
      modification: {
        title: '3. Modification.',
        description: 'Invest Founders reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Invest Founders will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any part thereof.'
      },
      noSupport: {
        title: '4. No Support or Maintenance.',
        description: 'You acknowledge and agree that Invest Founders will have no obligation to provide you with any support or maintenance in connection with the Site.'
      },
      ownership: {
        title: '5. Ownership.',
        description: 'You acknowledge that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Invest Founders or Invest Founders\' suppliers. Neither these Terms (nor your access to the Site) transfers to you or any third party any rights, title, or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Sections 1.1 and 1.2. Invest Founders and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.'
      },
      feedback: {
        title: '6. Feedback.',
        description: 'If you provide Invest Founders with any feedback or suggestions regarding the Site or any of its products or Services ("Feedback"), you hereby grant Invest Founders a perpetual, irrevocable, worldwide, royalty-free, transferable, sublicensable, nonexclusive right and license to use and fully exploit such Feedback and related information in any manner it deems appropriate. Invest Founders will treat any Feedback you provide to Invest Founders as non-confidential and non-proprietary. You agree that you will not submit to Invest Founders any information or ideas that you consider to be confidential or proprietary.'
      }
    },
    indemnification: {
      title: 'Indemnification',
      description: 'You agree to indemnify and hold Invest Founders and our affiliates (and the officers, employees, and agents of Invest Founders and our affiliates) harmless, including costs and attorneys\' fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site, (b) your violation of these Terms, or (c) your violation of applicable laws or regulations. Invest Founders reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of Invest Founders. Invest Founders will use reasonable efforts to notify you of any such claim, action, or proceeding upon becoming aware of it.'
    },
    thirdPartyLinks: {
      title: 'Third-Party Links & Ads; Other Users',
      thirdPartyLinks: {
        title: '1. Third-Party Links & Ads.',
        description: 'The Site may contain links to third-party websites and services, and/or display advertisements for third parties (collectively, "Third-Party Links & Ads"). Such Third-Party Links & Ads are not under the control of Invest Founders, and Invest Founders is not responsible for any Third-Party Links & Ads. Invest Founders provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at your own risk and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party\'s terms and policies apply, including the third party\'s privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third-Party Links & Ads.'
      },
      otherUsers: {
        title: '2. Other Users.',
        description: 'Your interactions with other Site users are solely between you and such users. You agree that Invest Founders or our affiliates will not be responsible for any loss or damage incurred as the result of any such interactions. If there is a dispute between you and any Site user, we are under no obligation to become involved.'
      },
      release: {
        title: '3. Release.',
        description: 'You hereby release and forever discharge Invest Founders and our affiliates (including the officers, employees, agents, successors, and assigns of Invest Founders and our affiliates) from, and hereby waive and relinquish, each and every past, present, and future dispute, claim, controversy, demand, right, obligation, liability, action, and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site (including any interactions with, or act or omission of, other Site users or any Third-Party Links & Ads). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY."'
      }
    },
    disclaimers: {
      title: 'Disclaimers',
      description: 'YOU EXPRESSLY UNDERSTAND THAT TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF THE SITE IS AT YOUR SOLE RISK, AND THE SITE IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS, AND INVEST FOUNDERS (AND OUR AFFILIATES AND SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR AFFILIATES AND SUPPLIERS) MAKE NO WARRANTY THAT THE SITE WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE. IF APPLICABLE LAW REQUIRES ANY WARRANTIES WITH RESPECT TO THE SITE, ALL SUCH WARRANTIES ARE LIMITED IN DURATION TO NINETY (90) DAYS FROM THE DATE OF FIRST USE.'
    },
    limitationOfLiability: {
      title: 'Limitation of Liability',
      description: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL INVEST FOUNDERS (OR OUR AFFILIATES OR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SITE, EVEN IF INVEST FOUNDERS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA RESULTING THEREFROM.'
    },
    termAndTermination: {
      title: 'Term and Termination',
      description: 'Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your rights to use the Site (including your Account) at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately. You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases. Invest Founders will not have any liability whatsoever to you for any termination of your rights under these Terms, including for termination of your Account or deletion of your User Content.'
    },
    general: {
      title: 'General',
      export: {
        title: '1. Export.',
        description: 'The Site may be subject to the export and import control laws and regulations of any country, including the United States. You agree not to export, reexport, or transfer, directly or indirectly, any U.S. technical data acquired from Invest Founders, or any products utilizing such data, in violation of the United States export laws or regulations.'
      },
      disclosures: {
        title: '2. Disclosures.',
        description: 'Invest Founders is located at the address in Section 7.9. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N-112, Sacramento, CA 95834, or by telephone at (800) 952-5210.'
      },
      electronicCommunications: {
        title: '3. Electronic Communications.',
        description: 'The communications between you and Invest Founders use electronic means, whether you use the Site or send us emails, or whether Invest Founders posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Invest Founders in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Invest Founders provides to you electronically satisfy any legal requirement that such communications would satisfy if they were in a hardcopy writing. The foregoing does not affect your non-waivable rights.'
      },
      entireTerms: {
        title: '4. Entire Terms.',
        description: 'These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is, for any reason, held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired, and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Invest Founders\' prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. Invest Founders may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon assignees.'
      },
      governingLaw: {
        title: '5. Governing Law.',
        description: 'Except for Section 7.2 of these Terms, including the Arbitration Agreement, these Terms shall be governed by the laws of the United States without regard to conflict of laws rules.'
      },
      copyrightTrademark: {
        title: '6. Copyright/Trademark Information.',
        description: 'Copyright © 2025 Invest Founders, Inc. All rights reserved. All trademarks, logos, and service marks displayed on the Site are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.'
      }
    },
    arbitrationAgreement: {
      title: 'Arbitration Agreement',
      description: 'Please read this Arbitration Agreement carefully. It is part of your contract with Invest Founders and affects your rights. It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.',
      scope: {
        title: '1. Applicability of Arbitration Agreement.',
        description: 'Subject to the terms of this Arbitration Agreement, you and Invest Founders agree that any dispute, claim, disagreements arising out of or relating in any way to your access to or use of the Site, any communications you receive, any products sold or distributed through the Site, or these Terms and prior versions of these Terms, including claims and disputes that arose between us before the effective date of these Terms (each, a "Dispute") will be resolved by binding arbitration, rather than in court, except that: (1) you may assert claims or seek relief in a small claims court if your claims qualify; and (2) you or Invest Founders may seek equitable relief in court for infringement or other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents). For clarity and without limitation of the foregoing, any dispute, claim, or controversy concerning the arbitrability of any Dispute (including disputes about the scope, applicability, enforceability, revocability, or validity of the Arbitration Agreement) shall be decided by an arbitrator, not by a court or judge.'
      },
      optOut: {
        title: '2. 30-Day Right to Opt Out.',
        description: 'You have the right to opt out of the provisions of this Arbitration Agreement by sending a timely written notice of your decision to opt out by email or by regular mail to the applicable addresses set forth in Section 7.9, within 30 days after first becoming subject to this Arbitration Agreement. Your notice must include your name and address and a clear statement that you want to opt out of this Arbitration Agreement. If you opt out of this Arbitration Agreement, all other parts of these Terms will continue to apply to you. Opting out of this Arbitration Agreement has no effect on any other arbitration agreements that you may currently have with us or may enter into in the future with us.'
      }
    },
    contact: {
      title: 'Contact Information',
      description: 'If you have any questions about these Terms of Use or our services, please contact us at:',
      email: 'legal@investfounders.com'
    }
  }
} as const;

/**
 * TermsHero component for the terms page
 * Displays terms of use with two-column layout
 */
const TermsHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageHeader title={TERMS_CONTENT.pageTitle} />
      
      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          <div className={styles.tableOfContents}>
            <h3 className={styles.tocTitle}>Table of content</h3>
            <ul className={styles.tocList}>
              {TERMS_CONTENT.tableOfContents.map((item, index) => (
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
              <h1 className={styles.mainTitle}>{TERMS_CONTENT.pageTitle}</h1>
              <p className={styles.lastRevised}>{TERMS_CONTENT.lastRevised}</p>
            </div>
            
            <div className={styles.contentBody}>
              <div className={styles.section}>
                <p className={styles.paragraph}>
                  {TERMS_CONTENT.mainContent.introduction.paragraph1}
                </p>
                <p className={styles.paragraph}>
                  <strong>{TERMS_CONTENT.mainContent.introduction.paragraph2}</strong>
                </p>
                <p className={styles.paragraph}>
                  <strong>{TERMS_CONTENT.mainContent.introduction.arbitrationNotice}</strong>
                </p>
                <p className={styles.paragraph}>
                  <strong>{TERMS_CONTENT.mainContent.introduction.optOutNotice}</strong>
                </p>
              </div>
              
              <div className={styles.section} id="access-to-the-site">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.title}</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.license.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.license.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.restrictions.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.restrictions.description}</p>
                  <ul className={styles.bulletList}>
                    {TERMS_CONTENT.mainContent.accessToSite.restrictions.items.map((item, index) => (
                      <li key={index} className={styles.bulletItem}>{item}</li>
                    ))}
                  </ul>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.restrictions.additional}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.modification.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.modification.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.noSupport.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.noSupport.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.ownership.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.ownership.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.accessToSite.feedback.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.accessToSite.feedback.description}</p>
                </div>
              </div>
              
              <div className={styles.section} id="indemnification">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.indemnification.title}</h2>
                <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.indemnification.description}</p>
              </div>
              
              <div className={styles.section} id="third-party-links-ads-other-users">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.thirdPartyLinks.title}</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.thirdPartyLinks.thirdPartyLinks.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.thirdPartyLinks.thirdPartyLinks.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.thirdPartyLinks.otherUsers.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.thirdPartyLinks.otherUsers.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.thirdPartyLinks.release.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.thirdPartyLinks.release.description}</p>
                </div>
              </div>
              
              <div className={styles.section} id="disclaimers">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.disclaimers.title}</h2>
                <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.disclaimers.description}</p>
              </div>
              
              <div className={styles.section} id="limitation-of-liability">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.limitationOfLiability.title}</h2>
                <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.limitationOfLiability.description}</p>
              </div>
              
              <div className={styles.section} id="term-and-termination">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.termAndTermination.title}</h2>
                <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.termAndTermination.description}</p>
              </div>
              
              <div className={styles.section} id="general">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.general.title}</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.general.export.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.general.export.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.general.disclosures.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.general.disclosures.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.general.electronicCommunications.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.general.electronicCommunications.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.general.entireTerms.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.general.entireTerms.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.general.governingLaw.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.general.governingLaw.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.general.copyrightTrademark.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.general.copyrightTrademark.description}</p>
                </div>
              </div>
              
              <div className={styles.section} id="arbitration-agreement">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.arbitrationAgreement.title}</h2>
                <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.arbitrationAgreement.description}</p>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.arbitrationAgreement.scope.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.arbitrationAgreement.scope.description}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{TERMS_CONTENT.mainContent.arbitrationAgreement.optOut.title}</h3>
                  <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.arbitrationAgreement.optOut.description}</p>
                </div>
              </div>
              
              <div className={styles.section} id="contact-information">
                <h2 className={styles.sectionTitle}>{TERMS_CONTENT.mainContent.contact.title}</h2>
                <p className={styles.paragraph}>{TERMS_CONTENT.mainContent.contact.description}</p>
                <p className={styles.paragraph}>
                  <a href={`mailto:${TERMS_CONTENT.mainContent.contact.email}`} className={styles.contactLink}>
                    {TERMS_CONTENT.mainContent.contact.email}
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

export default TermsHero;
