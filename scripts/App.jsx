import React from 'react'; 
import {GoogleLoginButton} from './GoogleButton.jsx'



const h1={
    
    textAlign: 'center',
    padding: 50,
    margin: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 5,
    background: 'linear-gradient(darkviolet,darkblue)',
    borderRadius:10,
};
const image_style={
    float:'center',
    padding:5,
    margin:5,
    width:1485,
    height:300,
};

const h3={
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'italic',
    background: 'linear-gradient(darkviolet,darkblue)',
    padding: 5,
    margin: 5,
    borderRadius:10,
    
};



 



export function App(){
    return(
        <div>
            <h1 style={h1}>Welcome to Text RPG</h1>
            <img  style={image_style} src='/static/Fog.gif' alt="image"/>
            <hr></hr>
            <GoogleLoginButton /> 
            <hr></hr>
        </div>
        
        
    );
}