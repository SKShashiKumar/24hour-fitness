import React from 'react'
import './WelcomePage.scss'

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
        <img src="images/orange.jpg" alt="orange" className='image1'/>
        <img src="images/Welcome.jpg" alt="Welcome" className="image2"/>
        <div className="image3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 Heading">
                        <h1>Welcome to Fitness Center</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 Description">
                        <p cla>Fitness center, indoor swimming pool, kiddy pool, 
                            jacuzzi, steam room, sauna, shock showers, snow fountain, Turkish bath, massage rooms, and four male-female coiffeurs at our facility.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 LearnMore">
                            <button className='rounded-pill'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage