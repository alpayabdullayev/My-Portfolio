import React from 'react'
import '../Work/Work.css'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import First from '../../ImgWork/First.png'
import Second from "../../ImgWork/Second.png"
import Third from '../../ImgWork/Third.png'
import SON from '../../ImgWork/SON.png'
import Porto from '../../ImgWork/Porto.png'
import Button2 from '../Button2/Button2'




const Work = () => {
  return (
    <section  className="full-height px-lg-5">
        <div className="container">

                <div className="row justify-content-center text-center">
                        <div className="col-lg-8 pb-4" data-aos="fade-up">
                            <h6 className="text-brand">Work</h6>
                            <h1>My Recent Projects</h1>
                        </div>
                </div>


                <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#e0f780"  , color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #e0f780' }}
    date="FIRST PROJECT"
   
  >
<div className='card-custom'>
        <div className='card-custom-image'>
            <img src={First} alt="" />
        </div>
    </div>
<Button2 ButtonunLinki='https://github.com/alpayabdullayev/portfoliooooo'  classAdi='btn  mt-2  rounded alink ' />
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work fw-bold"
    contentStyle={{ background: "#e0f780"  , color: '#fff',   }}
    contentArrowStyle={{ borderRight: '7px solid  #e0f780' }}
    date="GAME ZADZUD PROJECT"
   
  >
    <div className='card-custom'>
        <div className='card-custom-image'>
            <img src={Second} alt="" />
        </div>
    </div>
   <Button2 ButtonunLinki='https://github.com/alpayabdullayev/portfoliooooo'  classAdi='btn  mt-2  rounded alink ' />
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#e0f780"  , color:'#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #e0f780' }}
    date="PORTFOLIO JAVASCRIPT"
   
  >
     <div className='card-custom'>
        <div className='card-custom-image'>
            <img src={Porto} alt="" />
        </div>
    </div>
    <Button2 ButtonunLinki='https://github.com/alpayabdullayev/portfoliooooo'  classAdi='btn  mt-2  rounded alink ' />
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#e0f780"  , color:'#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #e0f780' }}
    date="FIRST REACT PORTFOLIO"
   
  >
     <div className='card-custom'>
        <div className='card-custom-image'>
            <img src={Third} alt="" />
        </div>
    </div>
    <Button2 ButtonunLinki='https://github.com/alpayabdullayev/portfoliooooo'  classAdi='btn  mt-2  rounded alink ' />
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#e0f780"  , color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #e0f780' }}
    date="FINAL REACT PORTFOIO" 
   
  >
    <div className='card-custom'>
        <div className='card-custom-image'>
            <img src={SON} alt="" />
        </div>
    </div>
   <Button2 ButtonunLinki='https://github.com/alpayabdullayev/portfoliooooo'  classAdi='btn  mt-2  rounded alink  ' />
  </VerticalTimelineElement>
  </VerticalTimeline>


   


        </div>
    </section>
  )
}

export default Work