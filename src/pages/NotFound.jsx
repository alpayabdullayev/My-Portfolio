import React from 'react'
import '../pages/NotFound.css'
import Typed from 'react-typed';

const NotFound = () => {
  return (
    <section id="about" className="full-height px-lg-5">
        <div className="container">
           <div id='content-wrapper'>
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h1 className="text-brand text-sizes "><Typed className='typing-text text-color'
                strings={[
                    'OOPS! PAGE NOT FOUND']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed></h1>
                        <h1 className='fw-bold  not404 '>404</h1>
                        <h6>WE ARE SORRY,BUT THE PAGE YOU REQUESTED WAS NOT FOUND!</h6>
                    </div>
                </div>
           </div>
        </div>
    </section>
  )
}

export default NotFound