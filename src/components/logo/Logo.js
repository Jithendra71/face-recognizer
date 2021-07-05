import React from "react";
import Tilt from 'react-tilt'
import  "./Logo.css";
import logo from './logo.png'

const Logo = () =>{
    return(
        <div className ="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{width:'75%',height:'75%', paddingTop:'13.5px'}} src={logo} alt = 'logo' /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;