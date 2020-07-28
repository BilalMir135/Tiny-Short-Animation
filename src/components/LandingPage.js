import React from 'react';
import BurgerMenu from './BurgerMenu';
import FirstOverlay from './FirstOverlay';
import SecondOverlay from './SecondOverlay';
import Content from './Content';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <BurgerMenu />
      <FirstOverlay />
      <SecondOverlay />
      <Content />
    </div>
  );
};
export default LandingPage;
