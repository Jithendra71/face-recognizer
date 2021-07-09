import React  from "react";
import './imageLink.css'

const ImageLinkForm = ({ onInputChange,onSubmit }) =>{
    return(
        <div>
            <p className='f3'>{'Try this man! This is awesome!!'}</p>
            <div className='center '>
                <div className='center form pa4 br3 shadow-5 '>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button className='f4 w-30 grow link dib white bg-light-purple' onClick={onSubmit}>Detect!</button></div>
            </div>
        </div>
    )
}

export default ImageLinkForm