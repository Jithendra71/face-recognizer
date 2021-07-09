import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ box, imageUrl }) =>{

    return <div className='center ma'>
    <div className='mt2 absolute' >
    <img id='face' width='500px'height='auto' alt ='' src={imageUrl}/>
    <div className='face-border' style={{top:box.topRow, bottom:box.bottomRow, right:box.rightCol, left:box.leftCol }}></div>
    </div>
    </div>
}



export default FaceRecognition;