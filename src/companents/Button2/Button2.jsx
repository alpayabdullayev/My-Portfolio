import React from 'react'
import '../Button2/Button2.css'


const Button2 = ({butonunIcindekiYazi,classAdi,ButtonunLinki}) => {
  return (
   
    <button className={classAdi}>{butonunIcindekiYazi} <a href={ButtonunLinki}>Code</a> </button>
    
  )
}

export default Button2