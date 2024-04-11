import React from 'react';
import styles from './Titulo.module.css';

const Titulo = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Titulo;