import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="container-fluid">
          <div className="row HeadingMain">
            <h1>Have something to say?</h1>
          </div>
          <div className="row FooterForm">
            <div className="container-fluid MainBox">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <p>Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
                  <div className="container-fluid ">
                    <div className="row">
                      <div className="col-2">
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                      <div className="col-2">
                        <i className="fa-brands fa-google-plus-g"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <form>
                    <div className="mb-3">
                      <label for="name" className="form-label">Name </label>
                      <input type="text" className="form-control" id="name"/>
                    </div>

                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Contact Us</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer