import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Signin from './components/Signin/Signin';
import ImageLinkForm from './components/ImageLink/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai' 

const app = new Clarifai.App({
  apiKey:'0b4f8e0c5c094ba088b2ac6de40b8cc9'
})

const particleParams={
  particles:{
    number:{
      value:30,
      density:{
        enable:true,
        value_area:400
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'Signin'
    }
  }

  faceBox=(response)=>{
    const boxDimensions=response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('face');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: boxDimensions.left_col * width,
      topRow: boxDimensions.top_row * height,
      rightCol: width - (boxDimensions.right_col * width),
      bottomRow: height - (boxDimensions.bottom_row * height) 
    }
  }

  displayFaceBox=(box)=>{
    this.setState({box:box});
    console.log(box);
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }

  onSubmit =()=>{
    this.setState({imageUrl:this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.imageUrl)
      .then(response=>this.displayFaceBox(this.faceBox(response)))
      .catch(err => console.log(err));
      
  }

  onSignin =()=>{
    this.setState({route:'home'})
  }

  onSignout =()=>{
    this.setState({route:'Signin'})
  } 

  render(){
    return (
      <div className="App">
        <Particles className='bg' params={particleParams}/>
        <Navigation onSignout={this.onSignout}/>
        {this.state.route==='Signin'? 
        <Signin onSignin={this.onSignin}/>
        : <><Logo />
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition box={this.state.box } imageUrl={this.state.imageUrl}/></>}
      </div>
    );
  }
}

export default App;
