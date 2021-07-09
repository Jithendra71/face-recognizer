import React from "react";
import Tilt from 'react-tilt'
import  "./Logo.css";
import logo from './logo.png'

const Logo = () =>{
    return(
        <div className ="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner pa2"> <img style={{width:'80%',height:'80%', paddingTop:'13.5px'}} src={logo} alt = 'logo' /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;