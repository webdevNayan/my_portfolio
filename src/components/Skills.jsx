// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGit, FaDatabase, FaBootstrap, FaJsSquare, FaWordpress, FaFacebook, FaMicrosoft } from 'react-icons/fa';
import styles from './Skills.module.scss';

const Skills = () => {
  const skillList = [
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Express.js', icon: <FaNode /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Redux', icon: <FaReact /> },
    { name: 'REST API', icon: <FaJsSquare /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'GitHub', icon: <FaGit /> },
    { name: 'Heroku', icon: <FaGit /> },
    { name: 'Responsive Design', icon: <FaHtml5 /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt /> },
    { name: 'User Interface (UI) Development', icon: <FaHtml5 /> },
    { name: 'SCSS', icon: <FaCss3Alt /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'Canva', icon: <FaWordpress /> },
    { name: 'Facebook Ads', icon: <FaFacebook /> },
    { name: 'Facebook Marketing', icon: <FaFacebook /> },
    { name: 'MS-PowerPoint', icon: <FaMicrosoft /> },
    { name: 'CRM', icon: <FaReact /> },
    { name: 'Email Marketing', icon: <FaFacebook /> },
    { name: 'MS-Excel', icon: <FaMicrosoft /> },
    { name: 'MS-Office', icon: <FaMicrosoft /> },
    { name: 'MS-Word', icon: <FaMicrosoft /> },
    { name: 'English Proficiency (Written)', icon: <FaReact /> },
    { name: 'English Proficiency (Spoken)', icon: <FaReact /> },
    { name: 'Hindi Proficiency (Spoken)', icon: <FaReact /> },
    { name: 'Bengali Proficiency (Written)', icon: <FaReact /> },
    { name: 'Bengali Proficiency (Spoken)', icon: <FaReact /> },
    { name: 'Client Interaction', icon: <FaReact /> },
    { name: 'Client Relationship', icon: <FaReact /> },
    { name: 'WordPress', icon: <FaWordpress /> }
  ];

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles['skill-container']}>
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
