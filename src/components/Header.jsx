// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles['header-content']}>
        <h1 className={styles.name}>Nayan Das</h1>
        <p className={styles.title}>React Developer | MERN Stack</p>
        <div className={styles['contact-info']}>
          <p className={styles.email}>Email: official.nayandas@gmail.com</p>
          <p className={styles.phone}>Phone: +91 9382867996</p>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
