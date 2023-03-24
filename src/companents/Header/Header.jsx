import React from 'react'
import Typed from 'react-typed';
import Button from '../Button/Button'
import '../Header/Header.css'
import CV from '../../assets/Download CV.pdf'


const Header = () => {
  return (
    <>
    <div id="content-wrapper">

      <section  className="full-height px-lg-5 parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-10" >
              <h1 className="display-4 fw-bold" data-aos="fade-up">
                I'M  <span className="text-brand" > <Typed className='typing-text text-color'
                strings={[
                    'Fullstack Developer',
                    'Front-end Developer',
                    'Back-end Developer',
                    'Web Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed></span> <br /> FROM BAKU,
                AZERBAIJAN
              </h1>
              <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300"  >
              I am Alpay , And I coding high-performing 
              </p>
              <div className='Header__bottom' data-aos="fade-up" data-aos-delay="600" >
                  <Button butonunIcindekiYazi=''  classAdi='btn btn-brand '/>
                <a href="#" className="link-custom">Call: (+994) 50 742 1937</a>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Header