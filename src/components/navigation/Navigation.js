import React from 'react';

const Navigation= ({ onSignout }) =>{
    return <h1 onClick={onSignout} className = 'tr f3 link dim black underline pa3 pointer'>Sign Out</h1>
}



export default Navigation;