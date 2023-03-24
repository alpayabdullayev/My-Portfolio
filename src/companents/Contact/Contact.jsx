
import '../Contact/Contact.css'


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4e4tv2p', 'template_0tzmt9e', form.current, 'I4QzzLgIy6brxHtMz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <section  className="full-height px-lg-5">
    <div className="container">

        <div className="row justify-content-center text-center">
            <div className="col-lg-8 pb-4" data-aos="fade-up">
                <h6 className="text-brand">CONTACT</h6>
                <h1>Contact me? Let's talk
                </h1>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                <form action="" className="row g-lg-3 gy-3" ref={form} onSubmit={sendEmail}>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Enter your name" name='sexsin_adi' />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" placeholder="Enter your email"  name='sexsin_emaili'/>
                    </div>
                    <div className="form-group col-12">
                        <input type="text" className="form-control" placeholder="Enter subject"  name='sexsin_subjecti'/>
                    </div>
                    <div className="form-group col-12">
                        <textarea name="message" rows="4" className="form-control" placeholder="Enter your message" ></textarea>
                    </div>
                    <div className="form-group col-12 d-grid">
                        <button type="submit" className="btn btn-brand">Contact me</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
</section>
  )
}

export default Contact