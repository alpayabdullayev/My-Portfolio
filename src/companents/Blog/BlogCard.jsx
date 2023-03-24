import React from 'react'
import IMG1 from '../../img/blog-post-1.jpg'
import './Blog'
import '../Blog/Blog.css'

const BlogCard = () => {
  return (
    <>
    
    <div className="col-md-4" data-aos="fade-up">
                    <div className="card-custom rounded-4 bg-base shadow-effect">
                        <div className="card-custom-image rounded-4">
                            <img className="rounded-4" src={IMG1} alt="" />
                        </div>
                        <div className="card-custom-content p-4">
                            <p className="text-brand mb-2">20 Dec, 2022</p>
                            <h5 className="mb-4">Lorem ipsum dolor sit amet.</h5>
                            <a href="#" className="link-custom">Read More</a>
                        </div>
                    </div>
                </div>

               
    </>
  )
}

export default BlogCard