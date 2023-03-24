import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import{AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import{AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    
    <footer className="py-5 px-lg-5">
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-auto">
                        <p className="mb-0">Created  by <a href="https://www.instagram.com/alphay09/" className="fw-bold">ALPAY :)</a></p>
                    </div>
                    <div className="col-auto">
                        <div className="social-icons fs-3">
                           <a href="https://www.instagram.com/alphay09/"><AiOutlineInstagram /></a> 
                           <a href="https://github.com/alpayabdullayev"><AiFillGithub /></a>
                           <a href="https://www.linkedin.com/in/alpay-abdullayev-463a2323a/"><AiFillLinkedin /></a>
                           <a href="https://www.facebook.com/alpay.abdullayev.39"><AiFillFacebook /></a>
                           <a href="https://youtu.be/bPV5KKUryF0"><AiFillYoutube/></a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </>
  )
}

export default Footer