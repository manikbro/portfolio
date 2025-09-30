
import React from "react";
import './Nav.css';


function NAV(){
  return(
    <ul style={{display:'flex', marginLeft:'150px', gap:'100px',marginTop:'30px', fontSize:'25px', listStyle:'none', color:' #DFF6FF'}}>
        <logo style={{marginRight:'1000px', fontSize:'30px'}}><a href="https://www.google.com" style={{ textDecoration:'none',color:' #fdcfff'}} >Profile-Site.</a></logo>
        <li><a href="https://www.google.com/?zx=1759170058163&no_sw_cr=1" style={{ textDecoration:'none',color:' #47B5FF'}} >Google</a></li>
        <li><a href="https://www.google.com/?zx=1759170058163&no_sw_cr=1" style={{ textDecoration:'none',color:' #DFF6FF'}} >Home</a></li>
        <li><a href="https://www.google.com/?zx=1759170058163&no_sw_cr=1" style={{ textDecoration:'none',color:' #DFF6FF'}} >Contct</a></li>
    </ul>
  )
}
export default NAV