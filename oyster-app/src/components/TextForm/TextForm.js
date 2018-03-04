import React, { Component } from "react";
import "./TextForm.css";
class TextForm extends Component {
 render () {
   return (
     <form className= "demoForm">

       <div className="form-group">
         <label className= "text-box" htmlFor="email">Name</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <br /><br />
       <div className="form-group">
         <label className= "text-box" htmlFor="email">Age</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <br /><br />
       <div className="form-group">
         <label className= "text-box" htmlFor="email">City, State</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <br /><br />
       <div className="form-group">
         <label className= "text-box" htmlFor="email">List a few of your interests:</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <br /><br />
       <div className="form-group">
         <label className= "text-box" htmlFor="email">Enter your email:</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <br /><br />
       <div className="form-group">
         <label className= "text-box" htmlFor="password">Enter a password:</label>
         <input type="password" className="form-control"
           name="password" />
       </div>

       <br /><br /><br />
       <button type="submit" className="btn btn-primary submit-btn">
          Find your pearl
       </button>
       <br /><br /><br />
     </form>
   )
 }
}
export default TextForm;
