import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./carousel.css"
class Slideshow  extends React.Component {
    render(){
          
          const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
          }
    return (
      <Slide className="slide" {...properties}>
        <div>
          <a href="https://www.primevideo.com/detail/amzn1.dv.gti.eab9f6f3-29da-6529-a314-9a6c4e1224e9/ref_"><img src='images/background.jpg' alt="pic here" height="380px" width="1537px" ></img></a>
        </div>
        <div className="each-slide">
        <img src='images/background1.jpg' alt="pic here" height="380px" width="1537px" ></img>
        </div>
        <div className="each-slide">
        <img src='images/background2.jpg' alt="pic here" height="380px" width="1537px" ></img>
        </div>
        <div className="each-slide">
        <img src='images/background3.jpg' alt="pic here" height="380px" width="1537px" ></img>
        </div>
        <div className="each-slide">
        <img src='images/background4.jpg' alt="pic here" height="380px" width="1537px" ></img>
        </div>
        <div className="each-slide">
        <img src='images/background5.jpg' alt="pic here" height="380px" width="1537px" ></img>
        </div>
        <div className="each-slide">
        <img src='images/background6.jpg' alt="pic here" height="380px" width="1537px" ></img>
        </div>
      </Slide>
    )
}
}
export default Slideshow