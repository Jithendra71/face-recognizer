import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
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
      imageUrl:''
    }
  }

 

  onInputChange=(event)=>{
    console.log(event.target.value);
    this.setState({input:event.target.value})
  }

  onSubmit =()=>{
    console.log('Hi');
    this.setState({imageUrl:this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.imageUrl)
      .then(
        function(response){
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function(err){
          console.log(err)
        }
      )
  }

  render(){
    return (
      <div className="App">
        <Particles className='bg' params={particleParams}/>
        <Navigation />
        <Logo />
        <Rank/>
         <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition params={this.state.input}/>
      </div>
    );
  }
}

export default App;
