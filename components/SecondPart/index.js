import React from 'react';

import players from '../../assets/images/Gramce_playery.svg';
import styles from '../../styles/SecondPart.module.css';

const SecondPart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.playersWrapper}>
        <img className={styles.players} src={players} />
      </div>
    </div>
  );
};
export default SecondPart;
