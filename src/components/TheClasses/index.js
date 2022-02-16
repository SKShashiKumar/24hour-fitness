import React from 'react'
import './TheClasses.scss'

const TheClasses = () => {
  return (
    <div className="TheClasses">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 FirstCol">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 quotes">
                                <img src="images/quotes.PNG" alt="quotes" />
                            </div>
                            <div className="col-12">
                                <p>
                                Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 SecondCol">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-12 MainHeading">
                                <h1>The Classes</h1>
                            </div>
                            <div className="col-12 SubHeading">
                                <p>
                                    We offer many weekly exercise classes including Aqua Fitness, Body Sculpting, Boot Camps, Pilates, Group Cycle, Tai Chi, Yoga, and Zumba.
                                </p>
                            </div>
                            <div className="col-12 LongWaves">
                                <img src="images/LongWaves.png" alt="LongWaves" />
                            </div>
                            <div className="col-12 TheClassesImg">
                                <img src="images/TheClasses.jpg" alt="The Classes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TheClasses