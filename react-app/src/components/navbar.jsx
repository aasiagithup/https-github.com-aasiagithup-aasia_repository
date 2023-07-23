import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
const navbar =()=>{
  return(
<div className ="navbar">
  <div className="togglebutton">
 </div>
 <div className ="link">
   <Link to="/">home</Link>
   <Link to="/">contact</Link>
   <Link to="/">projects</Link>
 </div>
</div>
  )
}
export default navbar;