import React from 'react';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      name:''
    }
  }
  
  onNameCahange =(event)=>{
    this.setState({name:event.target.value})
  }

   onEmailCahange =(event)=>{
    this.setState({email:event.target.value})
  }

   onPasswordCahange =(event)=>{
    this.setState({password:event.target.value})
  }

  onSubmitRegister = ()=>{
    fetch("http://localhost:3000/register",{
      method:'Post',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password,
        name:this.state.name
      })
    })
      .then(response=>response.json())
      .then(user=>{
        if (user){
          this.props.loadUser(user)
          this.props.onRegister('home')
        }
      })
  }

  render(){
    return (
      <article className="mw5 center mw6  br3 mv4 w-25 w-50-m w-25-1 ba shadow-5">
          <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0" >Register Form</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="name"
                  onChange = {this.onNameCahange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={this.onEmailCahange}
                 />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPasswordCahange}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                onClick={this.onSubmitRegister} 
                type="submit" 
                value="Register"
              />
            </div>
            
          </div>
        </main>
      </article>
    );
    }
}



export default Register;