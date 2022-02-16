import React from 'react'
import './GrowWithUs.scss'

const GrowWithUs = () => {
  return (
    <div className="GrowWithUs">
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-12">
                    <h1>Grow with Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src="images/Grow with Us.jpg" alt="Grow with Us" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>Innovative work. A unique, diverse workplace environment. Unrivaled industry 
                    and functional expertise. Continuous learning and development opportunities.  
                    Competitive employee benefits. Core values drive everything we do. Curabitur  
                    id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus 
                     sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor 
                     commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 LearnMore ">
                    <button className='rounded-pill'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GrowWithUs