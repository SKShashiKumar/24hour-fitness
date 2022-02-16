import React from 'react'
import './FitnessCenter.scss'

const FitnessCenter = () => {
  return (
    <div className="FitnessCenter">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="row ImageRow">
                        <div className="col-12 FItnessCenter1">
                            <img src="images/FItnessCenter1.PNG" alt="FItnessCenter1" />
                        </div>
                        <div className="col-12 FItnessCenter2">
                            <img src="images/FItnessCenter2.PNG" alt="FItnessCenter2" />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div className="container-fluid contentRow">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <h1 className='MainHeading'>Fitness Center Features</h1>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <p className='SubHeading'>Our center features a wide variety of cardiovascular and resistance equipment, including:</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <ul>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                    <li>Treadmills</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <h4 className='OurTraining'>Our training accessories include:</h4>
                                <ul>
                                    <li>Physio balls</li>
                                    <li>Physio balls</li>
                                    <li>Physio balls</li>
                                    <li>Physio balls</li>
                                    <li>Physio balls</li>
                                    <li>Physio balls</li>
                                    <li>Physio balls</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FitnessCenter