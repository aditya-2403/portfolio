import React from 'react';
import myphoto from '../../images/home-illustration.svg';
import Shared from '../../components/Shared';

const index = () => {
  return (
    <>
     <Shared
     main="Hi I am"
     small="Aditya Prasad Sahoo"
     imgsrc={myphoto}
     content="Welcome Aboard! My name is Aditya, I am a passionate
      and skilled web developer, dedicated to creating visually stunning 
      and user-friendly websites. With expertise in ReactJS, Angular HTML, CSS, and Vanilla JavaScript,
       I bring ideas to life. Explore my work and let's collaborate to make your
        digital vision a reality."
          visit='/projects'
          btname='See Projects'
     />
    </>
  )
}
export default index
