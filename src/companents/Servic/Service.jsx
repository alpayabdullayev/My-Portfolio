import React from 'react'

const Service = ({servisinbasligi,servisinMetni,servisinlinki,servisinImgsi}) => {
  return (
    
        <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="service p-4 bg-base rounded-4 shadow-effect">
                      <div className="card-custom-image rounded-4">
                        <img
                         className="rounded-4"
                         src={servisinImgsi}
                          alt=""
                        />
                </div>
                        <h4 className="mt-4 mb-2">{servisinbasligi}</h4>
                        <p>{servisinMetni}</p>
                        <a href="">{servisinlinki}</a>

                    </div>
      
    </div>
  )
}

export default Service