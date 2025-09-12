import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import styles from './MembersTeam.module.css';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const MembersTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Emin Mammadov',
      title: 'Founder at Invest Founders',
      image: '/images/about/team/male.png',
      linkedin: 'https://www.linkedin.com/in/eminmammadov',
      twitter: 'https://x.com/eminmammadov'
    },
    {
      id: '2',
      name: 'Naila Jabrailova',
      title: 'Project Manager',
      image: '/images/about/team/female.png',
      linkedin: '#'
    },
    {
      id: '3',
      name: 'Kamran Nabataliyev',
      title: 'Economist & Finance Analysis',
      image: '/images/about/team/male.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '4',
      name: 'Idris Gurbanov',
      title: 'System Administrator',
      image: '/images/about/team/male.png',
      linkedin: '#'
    },
    {
      id: '5',
      name: 'Seymur Suleyman',
      title: 'ESTG-Civil Engineering in Master',
      image: '/images/about/team/male.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '6',
      name: 'Chichek Agaverdiyeva',
      title: 'Account Manager',
      image: '/images/about/team/female.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '7',
      name: 'Miri Surname',
      title: 'Crypto Trader',
      image: '/images/about/team/male.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '8',
      name: 'Seymur Safaraliyev',
      title: 'Brand Manager',
      image: '/images/about/team/male.png',
      linkedin: '#'
    },
    {
      id: '9',
      name: 'Farid Mammadov',
      title: 'Investor',
      image: '/images/about/team/male.png',
      linkedin: '#'
    }
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="Our Members" />
      
      <div className={styles.contentSection}>
        <div className={styles.teamContent}>
          <div className={styles.teamGrid} role="list" aria-label="Leadership team members">
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMember} role="listitem">
                <div className={styles.memberImageContainer}>
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    width={280}
                    height={320}
                    className={styles.memberImage}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 280px"
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <div className={styles.socialLinks}>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className={styles.socialLink}
                        aria-label={`${member.name}'s LinkedIn profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className={styles.socialLink}
                        aria-label={`${member.name}'s Twitter profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTeam;
