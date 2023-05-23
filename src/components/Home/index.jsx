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
     <div className="d-flex educont">
     <section id="education">
      <div className="container">
        <h1> <strong>Education</strong> <hr /> </h1>

        <div className="education-item">
          <h3>XIM University, Bhubaneswar</h3>
          <p> <strong>Degree:</strong>  Bachelor of Technology in Computer Science and Engineering</p>
          <p><strong>Grade:</strong> 8.12 (6th Semester)</p>
          <p> <strong> Year:</strong> 2020 - 2024</p>
          <p> <strong> Location:</strong> Bhubaneswar, India</p>
        </div> <hr />

        <div className="education-item">
          <h3>MBS Public School</h3>
          <p> <strong>Course:</strong>  Senior Secondary Education (12th Standard)</p>
          <p> <strong>Percentage:</strong> 70%</p>
          <p> <strong> Year:</strong> 2019 - 2020</p>
          <p> <strong> Location: </strong> Bhubaneswar, India</p>
        </div>

        {/* Add more education items as needed */}

      </div>
    </section>
    </div> <br /> <br /> <br /> <br />
    </>
  )
}
export default index
