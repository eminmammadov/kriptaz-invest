import React from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  className = ''
}) => {
  return (
    <div className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default PageHeader;
