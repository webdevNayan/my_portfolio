// src/components/Contact.jsx
import React from 'react';
import styles from './Contact.module.scss';
import { FaWhatsapp, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.detailsContainer}>
        <p className={styles.details}>
          <strong>Email:</strong> <a href="mailto:official.nayandas@gmail.com">official.nayandas@gmail.com</a>
        </p>
        <p className={styles.details}>
          <strong>Phone:</strong> <a href="tel:+919382867996">+91 9382867996</a>
        </p>
        <p className={styles.details}>
          <strong>GitHub:</strong> <a href="https://github.com/webdevNayan" target="_blank" rel="noopener noreferrer">github.com/yourgithubprofile</a>
        </p>
        <p className={styles.details}>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/web-developer-nayan" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourlinkedinprofile</a>
        </p>
      </div>
      <div className={styles.floatingButtons}>
        <a
          href="https://wa.me/919382867996"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingButton} ${styles.whatsapp}`}
        >
          <FaWhatsapp />
        </a>
        <a href="tel:+919382867996" className={`${styles.floatingButton} ${styles.call}`}>
          <FaPhone />
        </a>
        <a
          href="https://github.com/webdevNayan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingButton} ${styles.github}`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/web-developer-nayan"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingButton} ${styles.linkedin}`}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
