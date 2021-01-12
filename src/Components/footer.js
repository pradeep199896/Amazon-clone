import React from "react";
import "./footer.css"

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <footer>
            <div className="footer1">
            <h3>Get To Know Us</h3>
            <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
            </ul>
            </div>
            <div className="footer1">
            <h3>Connect With Us</h3>
            <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            </ul>
            </div>
            <div className="footer1">
            <h3>Let Us Help You</h3>
            <ul>
            <li>Covid-19 and Amazon</li>
            <li>Your Account</li>
            <li>Return Center</li>
            <li>Help</li>
            </ul>
            </div>
            </footer>
            </div>
        )
    }
}
export default Footer