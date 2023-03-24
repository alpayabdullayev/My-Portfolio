import React from 'react'
import '../About/About.css'
import Fullimg from '../../img/full.jpg'
import Typed from 'react-typed';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import MyCV from '../../img/MyCV.png'




function About  ()  {
const timeLine = gsap.timeline({
    repeat: false,
    defaults: {duration:1, ease: "easeInOut"},
    repeat: 2
})



const e1ref = useRef()
const e2ref = useRef()
const e3ref = useRef()
const Lineref = useRef()

const DATA = [
    {   id: 1,
        year: 2020,
        name: "Universitete qebul",
        ref: e1ref
    },
    {
        id: 2,
        year: 2021,
        name: "Sabaha qebul",
        ref: e2ref
    },
    {
        id: 3,
        year: 2022,
        name: "IT Brains kurs",
        ref: e3ref
    }
]

useEffect(()=>{
    timeLine
    .from(e1ref.current, {autoAlpha: 0, x: -100, duration:.5})
    .from(e2ref.current, {autoAlpha: 0, x: -100, duration:.5})
    .from(e3ref.current, {autoAlpha: 0, x: -100, duration:.5})
    .to(e1ref.current, {autoAlpha: 0, x: -100, duration:.5, delay:1})
    .to(e2ref.current, {autoAlpha: 0, x: -100, duration:.5, })
    .to(e3ref.current, {autoAlpha: 0, x: -100, duration:.5, })
    .to(Lineref.current, {opacity:0 , duration:1, })

}, [])
  return (
    <>
    
    <section  className="full-height px-lg-5">
        <div className="container content-wrapper">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">ABOUT</h6>
              <h1>My Education</h1>
            </div>
          </div>

            <div className="row gy-4 mt-5 about-bot rounded-4  shadow-effect bg-base" data-aos="fade-right" >
              <div className="col-12 col-md-4" ><h1 className="mt-5 text-brand"><Typed className='typing-text text-color'
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

    <section id="about" className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-right">
            <div className="col-lg-8">
              <h6 className="text-brand">ABOUT</h6>
              <h1>TimeLine</h1>
            </div>
          </div>


            <div className='mainBox'>
                <div className='wrapper'>       
                    {DATA.map(el=>{           
                        return(     
                            <div key={el.id} ref={el.ref} >
                                <h1>{el.year}</h1>
                                <p>{el.name}</p>
                            </div>
                    )})}
                </div>
                <div className='line' ref={Lineref}></div>
            </div>

        </div>
    </section>




    </>
    
    
    
  )
}

export default About