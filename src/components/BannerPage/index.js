import React from 'react'
import './BannerPage.scss'

const BannerPage = () => {
  return (
    <div className="BannerPage">
        <div className="container-fluid">
            <div className="row justify-content-center align-center">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ImageCol text-center">
                    <img src="images/Banner1.jpg" alt="Banner1" className='Banner1'/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ContentCol">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 Title">
                                <p>PERSONAL TRAINING</p>
                            </div>
                            <div className="col-12 MainHeading">
                                <h1>New Level</h1>
                            </div>
                            <div className="col-12 SubHeading">
                                <p>Do you need help hitting your fitness goals? <br/> Click through to see why a personal trainer <br/> might be the answer, with pricing <br/> information, benefits and More.</p>
                            </div>
                            <div className="col-12 LearnMore">
                                <button className='rounded-pill'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerPage