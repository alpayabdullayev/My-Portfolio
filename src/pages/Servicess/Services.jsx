import React from 'react'
import '../Servicess/Services.css'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const Services = ({MySkilsbasligi, MySkilsMetni,MySkilslinki,MySkilsImgsi } ) => {
    // gsap.registerPlugin(ScrollTrigger)

    // useEffect(()=>{

        
    //     const section_2 = document.getElementById("horizontal");
    //     let box_items = gsap.utils.toArray(".horizontal__item");
        

    //     gsap.to(box_items, {
    //         xPercent: -100 * (box_items.length - 1),
    //         ease: "sine.out",
    //         scrollTrigger: {
    //           trigger: section_2,
    //           pin: true,
    //           scrub: 3,
    //           snap: 1 / (box_items.length - 1),
    //         //   end: "+=" + section_2.offsetWidth
    //         }
    // })
    // },[])

    // esasss
  return (
    // <><section id="horizontal" className="scrollSec">
    //     <div className="container">
    //         <div className="horizontal__content">
    //             <div className="horizontal__item">
    //                 <div className="horizontal__num fs-6">HTML & CSS</div>
    //             </div>
    //             <div className="horizontal__item">
    //                 <div className="horizontal__num fs-6">JAVASCRIPT</div>
    //             </div>
    //             <div className="horizontal__item">
    //                 <div className="horizontal__num fs-6">BOOTSTRAP</div>
    //             </div>
    //             <div className="horizontal__item">
    //                 <div className="horizontal__num fs-6">ReactJS</div>
    //             </div>
    //             <div className="horizontal__item">
    //                 <div className="horizontal__num fs-6">Tailwind</div>
    //             </div>
    //         </div>
    //     </div>
    // </section> </>
    <div className="" data-aos="fade-up" data-aos-delay="600">
    <div className="card-custom rounded-4 bg-base shadow-effect">
    <div className=" card-custom-image mt-5  rounded-4 cardolcu">
                        <img
                         className="rounded-4"
                         src={MySkilsImgsi}
                          alt=""
                        />
                </div>
      <div className="card-custom-content p-4">
        <h5 className="mb-4 text-brand">{MySkilsMetni}</h5>
        <p className=" mb-3">{MySkilsbasligi}</p>
        
        {/* <a  href="#" className="link-custom">{MySkilslinki}</a> */}
      </div>
    </div>
  </div>

     


  )
}

export default Services;