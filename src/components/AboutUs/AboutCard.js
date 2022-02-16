import React from 'react'

const AboutCard = ({ImgName}) => {
  return (
    <div className="container-fluid AboutCard">
        <div className="row">
            <div className="col-6">
                <img src={`images/${ImgName}.png`} alt={ImgName} className={ImgName}/>
            </div>
            <div className="col-12">
                <h2>{ImgName}</h2>
            </div>
            <div className="col-12">
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCard