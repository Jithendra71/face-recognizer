import {Component} from 'react';

class Signin extends Component{
  constructor(props){
    super(props)
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }
  
  

   onEmailCahange =(event)=>{
    this.setState({signInEmail:event.target.value})
  }

   onPasswordCahange =(event)=>{
    this.setState({signInPassword:event.target.value})
  }

   onSubmitSignIn = ()=>{
    fetch("http://localhost:3000/signin",{
      method:'Post',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
      .then(response=>response.json())
      .then(user=>{
        if (user === 'Wrong credentials'){
          alert('wrong credentials')
        }
        else if (user.id){
          this.props.loadUser(user)
          this.props.onSignin('home')
        }

      })
  }

  render(){
    const {onSignin} =this.props
    return (
      <article className="mw5 center mw6  br3 mv4 w-25 w-50-m w-25-1 ba shadow-5">
          <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0" >Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange ={this.onEmailCahange}
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
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onSubmitSignIn} type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" onClick={()=>onSignin('Register')} className="f6 link dim black db">Register</a>
            </div>
          </div
          >
        </main>
      </article>
    );
  }
  
}



export default Signin;