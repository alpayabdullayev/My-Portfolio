import React from 'react'
import '../Button/Button.css'
import CV from '../../assets/Download CV.pdf'

const Button = ({butonunIcindekiYazi,classAdi,ButtonunLinki}) => {
  return (
   
    <button className={classAdi}>{butonunIcindekiYazi}<a href={CV}>Download CV</a>  </button>
    
  )
}

export default Button