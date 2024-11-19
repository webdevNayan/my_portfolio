// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';

const projects = [
  {
    title: 'EdTech',
    image: "./edtech.JPG",
    link: 'https://stalwart-eclair-9f262e.netlify.app/',
    description: 'An Edtech Platform from where students can get free online courses',
    role: 'React JS developer',
    teamSize: 1,
    technologies: 'React Js, Redux Toolkit, Async Thunk, REST API, SCSS, React Bootstrap, Bootstrap Icons',
  },
//   {
//     title: 'SCIENCE ACADEMY',
//     image: "",
//     link: 'https://scienceacademy.purulia.net/',
//     description: 'Contributor to Science Academy\'s website, showcasing academic courses, student success stories, and popular classes.',
//     role: 'Front-end Developer',
//     teamSize: 2,
//     technologies: 'HTML5, SCSS, BOOTSTRAP-5',
//   },
  {
    title: 'GLOBAL INFOTECH',
    image: "./global.JPG",
    link: 'https://www.globalinfotech.org.in/',
    description: 'Business Website and Student Management System of an IT training institute named Global Infotech',
    role: 'Front-end Developer',
    teamSize: 2,
    technologies: 'HTML5, SCSS, BOOTSTRAP-5, PHP, MySQL',
  },
  {
    title: 'IITTI',
    image: "./iitti.JPG",
    link: 'https://iitti.co.in/',
    description: 'Business Website and Student Management System of an Incredible IT Training Institute',
    role: 'Front-end Developer',
    teamSize: 2,
    technologies: 'HTML5, SCSS, BOOTSTRAP-5, PHP, MySQL',
  },
  {
    title: 'ABHEDYA CORSESA (An E-Commerce Web Application)',
    image: "./corsesa.JPG",
    link: 'https://6522b12a7dda7a3a43ba738c--animated-torte-ba515b.netlify.app/',
    description: 'Front-End of an E-Commerce Web Application',
    role: 'Front-end Developer',
    teamSize: 7,
    technologies: 'React JS, SCSS, REACT BOOTSTRAP-5',
  },
  {
    title: 'ABHEDYA.TECH',
    image: "./abhedya.JPG",
    link: 'https://6522810d477a951b84a36fe8--voluble-conkies-d1ab8f.netlify.app/',
    description: 'Abhedya Futuristic Solution Pvt. Ltd.\'s website',
    role: 'Front-end Developer',
    teamSize: 5,
    technologies: 'JSX, SCSS, REACT BOOTSTRAP-5',
  },
  {
    title: 'COVIDPUR',
    image: "./coovidpur.JPG",
    link: 'https://6522a72c57a00f30c5e991a9--brilliant-blini-d8d4ce.netlify.app/',
    description: 'Web application to help people find oxygen cylinder, medicine, free foods, hospital and plasma to survive in COVID-19.',
    role: 'React Js Developer',
    teamSize: 5,
    technologies: 'React JS, Node JS, Firebase',
  },
//   {
//     title: 'ABHEDYA.IN',
//     image: "",
//     link: '#',
//     description: 'Company\'s own website.',
//     role: 'Front-end Developer',
//     teamSize: 5,
//     technologies: 'React JS, SCSS, REACT BOOTSTRAP-5',
//   },
//   {
//     title: 'TVASTRA',
//     image: "",
//     link: '#',
//     description: 'A healthcare website where people can find hospitals, fix appointments with doctors, and much more.',
//     role: 'Front-end Developer',
//     teamSize: 10,
//     technologies: 'REACT JS, SCSS, REACT BOOTSTRAP, FONT AWESOME ICONS',
//   },
  {
    title: 'CAR RENTING REACT JS APPLICATION',
    image: "./car.JPG",
    link: 'https://6522c9e647086d488d413bfe--sprightly-treacle-83a879.netlify.app/',
    description: 'A web application where users can rent a car, search for desired cars, and navigate through pages.',
    role: 'React JS Developer',
    teamSize: 1,
    technologies: 'React JS, SCSS, React Bootstrap-5',
  }
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles['project-container']}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.project}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <img className={styles.project_img} src={project.image} alt="MERN" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>Role: {project.role}</span>
              <span>Team size: {project.teamSize}</span>
              <span>Technologies: {project.technologies}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
