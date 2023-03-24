import React from 'react'
import Services from './Services';
import '../Servicess/Services.css'

import MySkilsInfo from '../../MySkilsInfo.json'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import MySkilsBack from "../../MySkillsBack.json"


const ServicesContainer = () => {
  return (
    <>
    
    <section  className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">Services</h6>
              <h1>My skils Front-End</h1>
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}

            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },

              500: {
                width: 500,
                slidesPerView: 2,
              },
            }}
   
          >
            {" "}
            <div className="row gy-4">
            {MySkilsInfo.map((birMelumat) => (
                 <SwiperSlide><Services
                  MySkilsbasligi={birMelumat.My_skillsin_adi}
                  MySkilsMetni={birMelumat.My_skillsin_infosu}
                  MySkilsImgsi={birMelumat.ImgUrl}
                  MySkilslinki={birMelumat.My_skills_linki}

                /></SwiperSlide>
              ))}
            </div>
            </Swiper>
              
        </div>
      </section>

      <section  className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">Services</h6>
              <h1>My skils Back-End</h1>
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}

            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },

              500: {
                width: 500,
                slidesPerView: 2,
              },
            }}
   
          >
            {" "}
            <div className="row gy-4">
            {MySkilsBack.map((birMelumat) => (
                 <SwiperSlide><Services
                  MySkilsbasligi={birMelumat.My_skillsin_adi}
                  MySkilsMetni={birMelumat.My_skillsin_infosu}
                  MySkilsImgsi={birMelumat.ImgUrl}
                  MySkilslinki={birMelumat.My_skills_linki}

                /></SwiperSlide>
              ))}
            </div>
            </Swiper>
              
        </div>
      </section>
    
    </>
  )
}

export default ServicesContainer