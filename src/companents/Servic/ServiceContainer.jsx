import React from 'react'
import Service from './Service'

import serviceInfo from '../../Servicesinfo.json'

const ServiceContainer = () => {
  return (
    <div  className="full-height px-lg-5">
        <div className="container">


            <div className="row pb-4" data-aos="fade-up" >
                <div className="col-lg-8">
                    <h6 className="text-brand">SERVICES</h6>
                    <h1>Services That I Provide</h1>
                </div>
            </div>

            <div className="row gy-4">
              {
                serviceInfo.map(birMelumat =>(
 
                    <Service servisinbasligi={birMelumat.servisin_adi} servisinMetni={birMelumat.servisin_infosu} 
                    servisinImgsi={birMelumat.ImgUrl}
                    servisinlinki={birMelumat.servis_linki}/>
                ))
              }
                
            </div>

        </div>
      </div>
  )
}

export default ServiceContainer