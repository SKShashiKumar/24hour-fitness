import React from 'react'
import './FitnessImages.scss'

const FitnessImages = () => {

    const GymImages = ['gym1', 'gym2' , 'gym3', 'gym4', 'gym5', 'gym6']

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
                            {GymImages.map((ImagName,i) => (
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gym1" key={i+1}>
                                    <img src={`images/${ImagName}.jpg`} alt={ImagName}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FitnessImages