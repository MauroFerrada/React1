import React from 'react';
import styles from './Boton.module.css';

const Boton = ({ onClick, children }) => {
    return (
      <button className={styles.boton} onClick={onClick}> 
        {children}
      </button>
    );
  };

export default Boton;