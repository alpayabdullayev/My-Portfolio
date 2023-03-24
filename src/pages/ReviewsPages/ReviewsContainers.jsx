import React from "react";
import Reviewss from "../ReviewsPages/Reviewss";
import '../ReviewsPages/Reviews.css'

import ReviewsInfo from "../../ReviewsInfo.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import{SiVerizon} from 'react-icons/si'

const ReviewsContainerss = () => {
  return (
    <>
      <section  className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">REVIEWS</h6>
              <h1>What our subscribers say <SiVerizon /> </h1>
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
              {ReviewsInfo.map((birMelumat) => (
                 <SwiperSlide><Reviewss
                  Reviewsbasligii={birMelumat.Reviewsin_adi}
                  ReviewsMetnii={birMelumat.Reviewsin_infosu}
                  Reviewslinkii={birMelumat.Reviews_linki}
                /></SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ReviewsContainerss;
