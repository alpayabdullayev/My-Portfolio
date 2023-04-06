import React from 'react'
import '../About/About.css'
import Fullimg from '../../img/full.jpg'
import Typed from 'react-typed';

const About = () => {
  return (
    
    <>


    
    
    <section  className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">ABOUT</h6>
              <h1>My Education</h1>
            </div>
          </div>

            <div className="row gy-4 mt-5 about-bot rounded-4  shadow-effect bg-base" data-aos="fade-right" >
              <div className="col-12 col-md-4" ><h1 className="mt-5 text-brand"><Typed classNameName='typing-text text-color'
                strings={[
                    'console.log("Hi! Im Alpay")']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed></h1></div>
              <div className="col-12 col-md-4"><p className="mt-5">I am a student of Azerbaijan Technical University. I am learning web development. I have the knowledge and skills to create responsive and functional websites.</p></div>
                <div className="card-custom rounded-4 bg-base shadow-effect col-12 col-md-4 mb-5">
                    <div className="card-custom-image rounded-4">
                        <img className="rounded-4" src={Fullimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default About