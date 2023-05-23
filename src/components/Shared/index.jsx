import React from 'react'
import { Link } from 'react-router-dom';
const index = (props) => {
  return (
    <>
      <section id="header" className="d-flex aligm-items-center ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                  <h1 className="mainheader" >
                    {props.main}
                    <strong className="brand-name"> {props.small}</strong>
                  </h1>
                  <p className="subheader my-3" style={{color: 'rgb(123, 120, 120)'}} >
                    {props.content}.
                  </p>
                  <div className="mt-3"></div>
                  <Link to={props.visit} className="btn btn-outline-primary mb-5">
                   <strong>{props.btname}</strong>
                  </Link>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={props.imgsrc}
                    className="image-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
