import React from "react";
import './App.css'
import NAV from "./Nav";
import logo2 from "./image/D5.GIF"


function App(){
  return(
    <>
    <NAV/>
    <div className="contain">
    <div className="box">
  
    <h1 >Manik Boro</h1>
    <h2>Softwear Developer</h2>
    <p>I’m a software engineer who enjoys building useful and user-friendly applications. I like solving problems with simple, clean code and learning new technologies along the way.</p>
    </div>
    <div className="Btn">
    <button>Contact</button>
    <button style={{backgroundColor:"transparent",}} onClick={()=>alert('HELLO')} >Chat</button>
    </div>
    <img src={logo2} style={{position:'absolute',left:'550px', top:'-200px', width:'500px'}} ></img>
    <img src={logo2} style={{position:'absolute',left:'1200px', top:'-200px', width:'400px', rotate:'260deg'}} ></img>
    </div>
    <footer>
      foot
    </footer>
    </>
  )
}

export default App