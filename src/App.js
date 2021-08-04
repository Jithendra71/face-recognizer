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
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey:'0b4f8e0c5c094ba088b2ac6de40b8cc9'
})

const particleParams={
  particles:{
    number:{
      value:30,
      density:{
        enable:true,
        value_area:300
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
      route:'signin',
      isSignedin: false,
      user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined: ''
      }
    }
  }

  loadUser=(newUser)=>{
    this.setState({user:{
      id:newUser.id,
      name:newUser.name,
      email:newUser.email,
      entries:newUser.entries,
      joined: ''
    }})
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
        this.state.input)
      .then(response=>{
        if(response){
          fetch('http://localhost:3000/image',{
            method:'put',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({id:this.state.user.id})
          })
          .then(response=>response.json())
          .then(count=> this.setState(Object.assign(this.state.user,{entries:count})))
        }
        this.displayFaceBox(this.faceBox(response))
      })
      .catch(err => console.log(err));
      
  }

  routeChange =(route)=>{
    if (route==='signin' || route==='Register'){
      this.setState({isSignedin:false})
    }
    else{
      this.setState({isSignedin:true})
    }
    this.setState({route:route})
  }

  render(){
    return (
      <div className="App">
        <Particles className='bg' params={particleParams}/>
        <Navigation isSignedin={this.state.isSignedin} onSignout={this.routeChange}/>
        {this.state.route==='home'? 
        <><Logo />
        <Rank
          name={this.state.user.name}
          entries={this.state.user.entries}
        />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition box={this.state.box } imageUrl={this.state.imageUrl}/></>
        :(
          this.state.route==='signin'?
          <Signin loadUser={this.loadUser} onSignin={this.routeChange}/>
          :<Register loadUser={this.loadUser} onRegister={this.routeChange}/>
        ) }
      </div>
    );
  }
}

export default App;
