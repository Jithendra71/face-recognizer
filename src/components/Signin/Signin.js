import React from 'react';

const Signin = ({onSignin}) =>{

    return (
      <article className="mw5 center mw6  br3 mv4 w-25 w-50-m w-25-1 ba shadow-5">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0" >Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={()=>onSignin('home')} type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <a href="#0" onClick={()=>onSignin('Register')} className="f6 link dim black db">Register</a>
          </div>
        </div>
      </main>
    </article>
  );
}



export default Signin;