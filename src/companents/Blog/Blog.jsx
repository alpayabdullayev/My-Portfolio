import React from 'react'
import '../Blog/Blog.css'
import '../Blog/BlogCard'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import BlogCard from '../Blog/BlogCard';



const Blog = () => {
  return (
    <>
   

<section  className="full-height px-lg-5">
        <div className="container">

            <div className="row pb-4" data-aos="fade-up">
                <div className="col-lg-8">
                    <h6 className="text-brand">BLOG</h6>
                    <h1>My BLog Posts</h1>
                </div>
            </div>

            <div className="row gy-4">

            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
        


                
                
               
        </Swiper>
            <div className='row'></div>
                <SwiperSlide><BlogCard /></SwiperSlide>


            </div>

        </div>
    </section>
    </>
    
  )
}

export default Blog