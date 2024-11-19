import React from 'react';
import styles from './Education.module.scss';
import { FaUniversity, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className={styles.education}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles['education-item']}>
          <h3 className={styles.degree}>
            <FaGraduationCap className={styles.icon} />
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className={styles.institute}>
            <FaUniversity className={styles.icon} />
            Dr. C.V Raman University, Khandwa
          </p>
          <p className={styles.duration}>
            <FaCalendarAlt className={styles.icon} />
            2019 - 2022
          </p>
          <p className={styles.cgpa}>CGPA: 6.76/10</p>
          <div className={styles.collegeLink}>
            <a
              href="https://www.cvrump.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.photoLink}
            >
              <img
                src="/cvru_campus.jpg"
                alt="Dr. C.V Raman University"
                className={styles.collegePhoto}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.backgroundAnimation}></div>
    </section>
  );
};

export default Education;
