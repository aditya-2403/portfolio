import React from 'react';
import Shared from '../../components/Shared';
import projects from '../../images/project.svg';




const index = () => {
  return (
    <>
      <Shared
      
      main="Projects over"
      small="Live Experience"
      imgsrc={projects}
      content="Here you'll find a collection of my innovative and 
      impactful projects in web development, UI/UX developmnet and 
      beyond. Each project showcases my skills, creativity, and attention 
      to detail. Dive in and explore the solutions I've crafted to meet diverse 
      challenges."
           visit='/contact'
           btname='Work with me ?'
      />
    </>
  )
}

export default index;
