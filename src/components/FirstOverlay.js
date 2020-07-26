import React from 'react';
import styles from './LandingPage.module.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const FirstOverlay = () => {
  const folPart1 = useWebAnimations({
    keyframes: [
      { transform: 'translateY(-100%)' },
      { transform: 'translateY(0%)' },
    ],
    timing: {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  const folPart2 = useWebAnimations({
    keyframes: [
      { transform: 'translateY(100%)' },
      { transform: 'translateY(0)' },
    ],
    timing: {
      duration: 1000,
      delay: 400,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  const folPart3 = useWebAnimations({
    keyframes: [
      { transform: 'translateY(-100%)' },
      { transform: 'translateY(0%)' },
    ],
    timing: {
      duration: 1000,
      delay: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  return (
    <div className={styles.folWrapper}>
      <div className={styles.folPart1} ref={folPart1.ref}></div>
      <div className={styles.folPart2} ref={folPart2.ref}></div>
      <div className={styles.folPart3} ref={folPart3.ref}></div>
    </div>
  );
};

export default FirstOverlay;
