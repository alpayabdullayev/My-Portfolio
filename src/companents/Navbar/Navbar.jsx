import React ,{useRef} from 'react'
import '../Navbar/Navbar.css'
import ME from '../../img/MEE4.jpg'
import Tilt from 'react-parallax-tilt'

import {Link} from 'react-router-dom'
import Logo from '../../img/Logo.png'
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedPistols} from 'react-icons/gi'


const Navbar = () => {


const qaraDivUnvaniRef = useRef()
const qaraMenyunuAc = (e) => {
  const kliklenenElement = e.target


  if(kliklenenElement.classList.contains('bars-icon')){
    qaraDivUnvaniRef.current.classList.add('aktiv')
  }
}

const qaraMenyunuBagla = (e) => {
  const kliklenenElement = e.target


  if(kliklenenElement.classList.contains('cross-icon')){
    qaraDivUnvaniRef.current.classList.remove('aktiv')
  }
}


  return (

    <>
    <div className='overlay ' ref={qaraDivUnvaniRef } onClick={qaraMenyunuBagla}>
      <GiCrossedPistols className='cross-icon' onClick={qaraMenyunuBagla} />

      <div className='nav-links nav-link fw-bold text-white '>
        <ul className='text-lg-center text-center'>
          <li  className="nav-item position-relative underline-hover" >
            <Link className="nav-link fw-bold text-white " to="/">Home</Link>
          </li>
          <li className="nav-item position-relative underline-hover">
            <Link className="nav-link fw-bold text-white "  to="/xitmetlerimiz">Services</Link>
          </li>
          <li className="nav-item position-relative underline-hover">
            <Link className="nav-link fw-bold text-white " to="/about">About</Link>
          </li>
          <li className="nav-item position-relative underline-hover">
            <Link className="nav-link fw-bold text-white " to="/reviews">Reviews</Link>
          </li>
          <li className="nav-item position-relative underline-hover">
            <Link className="nav-link fw-bold text-white " to="/work">Work</Link>
          </li>
          <li className="nav-item position-relative underline-hover">
            <Link className="nav-link fw-bold text-white " to="/contact">Contact</Link>
          </li>
        </ul>

        
        
        
        
      </div>


    </div>

    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container flex-lg-column">
    <a className="navbar-brand fw-bold text-white mx-lg-auto   mb-lg-4" >
        <span className="h3 fw-bold d-block d-lg-none logo">
          <img src={Logo} alt="" />
        </span>
        <Tilt><img className='d-none d-lg-block rounded-circle' src={ME} /></Tilt>
        
        
    </a>
    
    <button onClick={qaraMenyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <AiOutlineBars className='bars-icon'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto flex-lg-column text-lg-center text-center">

        <li className="nav-item position-relative underline-hover">
          <Link className="nav-link fw-bold text-white " to="/">Home</Link>
        </li>
        <li className="nav-item position-relative underline-hover">
          <Link className="nav-link fw-bold text-white " to="/xitmetlerimiz">SERVICES</Link>
        </li>
        <li className="nav-item position-relative underline-hover">
          <Link className="nav-link fw-bold text-white " to="/about">About</Link>
        </li>
        <li className="nav-item position-relative underline-hover">
          <Link className="nav-link fw-bold text-white " to="/reviews">Reviews</Link>
        </li>
        <li className="nav-item position-relative underline-hover">
          <Link className="nav-link fw-bold text-white " to="/work">Work</Link>
        </li>

        <li className="nav-item position-relative underline-hover">
          <Link className="nav-link fw-bold text-white " to="/contact">Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar