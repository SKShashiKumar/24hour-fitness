import React from 'react'
import './FitnessImages.scss'

const FitnessImages = () => {
  return (
    <div className="FitnessImages">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Health &amp; Fitness</h1>
                </div>
                <div className="col-12 LongWaves">
                    <img src="images/LongWaves.png" alt="LongWaves" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="container-fluid ImagesTiles">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1">
                                <img src="images/gym1.jpg" alt="gym1" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1">
                                <img src="images/gym2.jpg" alt="gym1" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1">
                                <img src="images/gym3.jpg" alt="gym1" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1">
                                <img src="images/gym4.jpg" alt="gym1" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1">
                                <img src="images/gym5.jpg" alt="gym1" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1">
                                <img src="images/gym6.jpg" alt="gym1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FitnessImages