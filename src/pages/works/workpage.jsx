import { useInView } from "react-intersection-observer";

import "./workpage.css";

import React from 'react';

const Workpage = function () {

  const [section1Ref, section1View] = useInView({
    threshold: 0.4,
  });

  const [section2Ref, section2View] = useInView({
    threshold: 0.4,
  });

  const [section3Ref, section3View] = useInView({
    threshold: 0.4,
  });

  const [section4Ref, section4View] = useInView({
    threshold: 0.4,
  });

  const [section5Ref, section5View] = useInView({
    threshold: 0.4,
  });

  return (
    <>
    {section1View ? (
        <section className="work_f1" ref={section1Ref}></section>
      ) : (
        <section className="work_f1">

          
          
          <div className="work_f11">

          </div>
          <div className="work_f22">
            
          </div>
          <div className="wrapper">

          <div className="symbol-shadow">
                <div className="symbol"></div>
                <div className="container">
                  <h1><br></br>Welcome to Work Page!</h1>
              </div>
          </div>

              
              
          </div>
        </section>
        


      )}
      {section2View ? (
        <section className="work_first" ref={section2Ref}></section>
      ) : (
        <section className="work_first">
          
          
          <div className="wrapper">
              <div className="container">
                  <h1><br></br>PROJECT 2!</h1>
              </div>
              
          </div>
        </section>
      )}

      {section3View ? (
        <section className="work_project1" ref={section3Ref}></section>
      ) : (
        <section className="work_project1">
          <div className="wrapper">
              <div className="container">
                  <h1><br></br>PROJECT 3!</h1>
              </div>
              
          </div>
        </section>
        
      )}

      {section4View ? (
        <section className="work_project2" ref={section4Ref}></section>
      ) : (
        <section className="work_project2">
          <div className="wrapper">
              <div className="container">
                  <h1><br></br>PROJECT 4!</h1>
              </div>
              
          </div>
        </section>
      )}

      {section5View ? (
        <section className="work_project3" ref={section5Ref}></section>
      ) : (
        <section className="work_project3">
          <div className="wrapper">
              <div className="container">
                  <h1><br></br>PROJECT 5!</h1>
              </div>
              
          </div>
        </section>
      )}
    </>
  );
};

export default Workpage;
