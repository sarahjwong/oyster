import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Profile.css';


const Profile = (props) => {
  return (
    <div>
      <div className="header">
        <a href=""><img id="settings" src={require('../../images/settings.png')}></img></a>
      </div>
      <div>
        <img id="tom" src={require('../../images/tom.jpg')}></img>
        <h2 id="name">Tom Holland</h2>
        <h4 id="age">Age 21, Washington DC</h4>
      </div>

      <div className="questions">
        <div className="question">
          <p className="questiontext">If you could be any superhero, who would you be?</p>
          <p className="answertext">I would be Spiderman. He is young, brave, and overall a cool and relatable guy. In fact, I think we have a lot in common...</p>
        </div>
        <div className="question">
          <p className="questiontext">Cats or dogs?</p>
          <p className="answertext">Dogs all the way, of course - my dog Tessa is my best friend! Sorry cat lovers... ;)</p>
        </div>
        <div className="question">
          <p className="questiontext">Describe yourself in three words.</p>
          <p className="answertext">Goofy, secretive, and altruistic.</p>
        </div>
      </div>
      <br></br><br></br>
    </div>
  )
}

export default Profile
