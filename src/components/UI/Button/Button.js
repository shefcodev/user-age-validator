import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, className }) => {
  return <button className={styles[className]}>{children}</button>;
};

export default Button;
