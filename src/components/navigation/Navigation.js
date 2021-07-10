import React from 'react';

const Navigation= ({ isSignedin, onSignout }) =>{
    if(isSignedin){
    return (
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={()=>onSignout('signin')} className = 'tr f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )}
    else {
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={()=>onSignout('signin')} className = 'tr f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={()=>onSignout('Register')} className = 'tr f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        )
    }
}



export default Navigation;