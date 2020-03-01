import React from 'react';
import styles from '../spinner/styles.module.scss';

const Spinner = () => {
  return (
    <div className={styles.divloader}>
      <div className={styles.svgloader}>Loading...</div>
    </div>
  );
};

export default Spinner;