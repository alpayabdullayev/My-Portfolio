import React from "react";
import {RiStarSFill} from 'react-icons/ri'
import '../ReviewsPages/ReviewsContainers'

const Reviewss = ({Reviewsbasligii,ReviewsMetnii,Reviewslinkii}) => {
  return (
    <div className="" data-aos="fade-up" data-aos-delay="600">
      <div className="review shadow-effect bg-base p-4 rounded-4 ">
        <div className="text-brand h5">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
        </div>
        <p className="my-3">
            {Reviewsbasligii}
        </p>
        <div className="person w-100">
          <h5 className="mb-0">{ReviewsMetnii}</h5>
          <p className="mb-0">{Reviewslinkii}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviewss;