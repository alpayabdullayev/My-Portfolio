import React from 'react'
import '../AboutSkils/Aboutskils.css'
import '../AboutSkils/AboutSkils.js'
import gsap from "gsap";

const AboutSkills = () => {
    
  return (
    <section id="horizontal" class="scrollSec">
    <div class="container">
        <div class="horizontal__content">
            <div class="horizontal__item">
                <div class="horizontal__num">html</div>
            </div>
            <div class="horizontal__item">
                <div class="horizontal__num">CSS</div>
            </div>
            <div class="horizontal__item">
                <div class="horizontal__num">JS</div>
            </div>
            <div class="horizontal__item">
                <div class="horizontal__num">React</div>
            </div>
            <div class="horizontal__item">
                <div class="horizontal__num">5</div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutSkills