import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/Images/img1.webp';
import Common from './Common';

const Home=()=>{
  return(
    <>
      <Common
         name='Learn new things with'
         imgsrc={web}
         visit='/service'
         btname='Get Started'/>
    </>
  );
}

export default Home;