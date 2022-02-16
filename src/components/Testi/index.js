import React, { useRef, useState } from "react";
import './Testi.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation,Pagination } from "swiper";


const Testi = () => {

    
  return (
    <div className="Testi">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 Heading">
                    <h1>Our Clients Say</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <Swiper navigation={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                            }} 
                        modules={[Navigation,Pagination]}
                        className="mySwiper"
                >
                    <SwiperSlide>
                       <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 Test1">
                                    <img src="images/Test1.PNG" alt="Test1" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h4>Marry Larson</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 Test1">
                                    <img src="images/Test1.PNG" alt="Test1" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h4>Samuel Schick</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Testi