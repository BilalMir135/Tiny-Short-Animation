import React from 'react';
import CircleImg from '../assets/circle-large.png';
import useWebAnimations from '@wellyshen/use-web-animations';

const SecondOverlay = () => {
  const circleOne = useWebAnimations({
    keyframes: [
      { transform: 'translatex(-100%)' },
      { transform: 'translatex(0%)' },
    ],
    timing: {
      duration: 1000,
      delay: 1500,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  const circleTwo = useWebAnimations({
    keyframes: [
      { transform: 'translatex(100%)' },
      { transform: 'translatex(0%)' },
    ],
    timing: {
      duration: 1000,
      delay: 2000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  return (
    <div>
      <img
        src={CircleImg}
        alt='circle-img'
        className='circle-one'
        ref={circleOne.ref}
      />
      <img
        src={CircleImg}
        alt='circle-img'
        className='circle-two'
        ref={circleTwo.ref}
      />
    </div>
  );
};

export default SecondOverlay;
