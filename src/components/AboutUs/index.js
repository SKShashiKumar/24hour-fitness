import React from 'react'
import AboutCard from './AboutCard'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className="AboutUs">
        <div className="container-fluid">
            <div className="row justify-content-center align-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ContentCol">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 Title">
                                <p>ABOUT US</p>
                            </div>
                            <div className="col-12 MainHeading">
                                <h1>Fitness Center Information</h1>
                            </div>
                            <div className="col-12 SubHeading">
                                <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                            </div>
                            <div className="col-12 LearnMore">
                                <button className='rounded-pill'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ImageCol text-center">
                    <div className="container-fluid">
                        <div className="row g-5">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <AboutCard ImgName="Athletics"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <AboutCard ImgName="Pilates"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <AboutCard ImgName="Fitness"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <AboutCard ImgName="Jump ropes"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs