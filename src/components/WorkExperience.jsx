import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './WorkExperience.module.scss';

const workExperience = [
  {
    title: 'MERN Stack Developer',
    company: 'Ubixstar LLP',
    location: 'Virtual',
    contractType: 'Freelance Contract',
    duration: '31st May 2024 – Present (1 month)',
    description: 'Led backend development, REST APIs, enhancing data flow, and system functionality. Contributed to confidential intellectual projects, implementing best practices, and fostering continuous learning.',
  },
  {
    title: 'MERN Stack Developer (Internship)',
    company: 'Ubixstar LLP',
    location: 'Virtual',
    contractType: 'Internship',
    duration: '1st Dec 2023 – 29th Feb 2024 (3 months)',
    description: 'Built responsive React components, ensuring optimal site performance. Led API integrations, enhancing data flow and system functionality. Contributed to confidential intellectual projects, implementing best practices & fostering continuous learning.',
  },
  {
    title: 'MERN Stack Developer',
    company: 'ADEO',
    location: 'Department of Food & Supplies, Govt. West Bengal',
    contractType: 'Job',
    duration: 'Jan 2022 – Jul 2022 (6 months)',
    description: 'Worked on developing a Life Cycle Management System.',
  },
  {
    title: 'Associate Software Development Engineer Intern',
    company: 'Abhedya Futuristic Solution Pvt. Ltd.',
    location: 'Virtual',
    contractType: 'Internship',
    duration: 'Aug 2021 – Dec 2021 (4 months)',
    description: 'Worked on various software development projects as part of an internship.',
  },
  {
    title: 'React JS Developer (Internship)',
    company: 'Abhedya Futuristic Solution Pvt. Ltd.',
    location: 'Virtual',
    contractType: 'Internship',
    duration: 'Mar 2021 – May 2021 (3 months)',
    description: 'Developed front-end components using React JS.',
  },
  {
    title: 'Front End Development (Internship)',
    company: 'Konfinity Infotech',
    location: 'Virtual',
    contractType: 'Internship',
    duration: 'Aug 2020 – Feb 2021 (6 months)',
    description: 'Worked on front-end technologies like HTML5, CSS3, SCSS, Bootstrap, JavaScript, and React.',
  },
  {
    title: 'Computer Teacher',
    company: 'Incredible IT Training Institute',
    location: '',
    contractType: 'Job',
    duration: 'Jun 2018 – Jul 2020 (2 years 1 month)',
    description: 'Taught computer-related subjects and provided training to students.',
  },
];

const WorkExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (experience) => {
    setModalContent(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className={styles.workExperience}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles['experience-container']}>
        {workExperience.map((experience, index) => (
          <motion.div
            key={index}
            className={styles.experience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.experienceDetails}>
              <h3>{experience.title}</h3>
              <p className={styles.company}>{experience.company}</p>
              <p className={styles.location}>{experience.location}</p>
              <p className={styles.contractType}>{experience.contractType}</p>
              <p className={styles.duration}>{experience.duration}</p>
              <p className={styles.description}>
                {experience.description.length > 77
                  ? `${experience.description.substring(0, 77)}...`
                  : experience.description}
              </p>
              <button className={styles.viewMore} onClick={() => openModal(experience)}>
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full experience details */}
      {isModalOpen && modalContent && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{modalContent.title}</h3>
              <button className={styles.closeModal} onClick={closeModal}>Close</button>
            </div>
            <p><strong>Company:</strong> {modalContent.company}</p>
            <p><strong>Location:</strong> {modalContent.location}</p>
            <p><strong>Contract Type:</strong> {modalContent.contractType}</p>
            <p><strong>Duration:</strong> {modalContent.duration}</p>
            <p><strong>Description:</strong> {modalContent.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkExperience;
