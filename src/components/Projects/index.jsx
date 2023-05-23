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
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Voluptatem qui vel incidunt deleniti. Neque blanditiis, ad accusamus
        delectus reprehenderit hic inventore velit quae quo quas! Perferendis
         modi mollitia, nulla repellendus fuga impedit iusto repellat! A
          iure labore tempora ab nostrum. Tempora voluptate quaerat beatae
           eveniet amet iste quod distinctio fuga."
           visit='/contact'
           btname='Work with me ?'
      />
    </>
  )
}

export default index;
