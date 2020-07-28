import React from 'react';
import Books from '../assets/books1.png';
import useWebAnimations from '@wellyshen/use-web-animations';
import { Link } from 'react-router-dom';

const Content = () => {
  const bookAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translatex(100%)' },
      { transform: 'translatex(0%)' },
    ],
    timing: {
      duration: 1000,
      delay: 3000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  const textAnimation = useWebAnimations({
    keyframes: [{ opacity: '0' }, { opacity: '1' }],
    timing: {
      duration: 2000,
      delay: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  const btnAnimation = useWebAnimations({
    keyframes: [{ opacity: '0' }, { opacity: '1' }],
    timing: {
      duration: 2000,
      delay: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  });

  return (
    <div className='content'>
      <img src={Books} alt='books' ref={bookAnimation.ref} />
      <div className='text'>
        <h1>
          Books are a uniquely portable{' '}
          <span ref={textAnimation.ref}>magic</span>
        </h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipisicing elit. accusantium
          animi blanditiis cumque ea, error esse eveniet harum illo magnam minus
          natus neque optio placeat quibusdam ratione saepe sint tenetur
          voluptas lorem ipsum dolor sit amet, consectetur adipisicing elit.
          accusantium animi blanditiis cumque ea, error esse eveniet harum illo
          magnam minus natus neque optio placeat quibusdam ratione saepe sint
          tenetur voluptas!
        </p>
        <Link to='/buy-now' ref={btnAnimation.ref}>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Content;
