import React, { Component } from "react";
import "./TextForm.css";
class TextForm extends Component {
 render () {
   return (
     <form className= "demoForm">

       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control"
           name="password" />
       </div>
       <button type="submit" className="btn btn-primary submit-btn">
          Sign up
       </button>
     </form>
   )
 }
}
export default TextForm;
