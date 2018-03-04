import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Matches.css';

const Matches = (props) => {
  return (
    <div>
      <div class="eventMatch">
        <h1 class="title">GirlsLEAD Summit 2018 - Fri March 9 7:30AM</h1>

        <div class="matchCard">
          <a href=""><img class="matchImg" src={require('../../images/filler-person.png')} /></a>
          <h4>Name</h4>
          <h6>Age X, Washington DC</h6>
          <div class="matchIcons">
            <a href=""><img class="matchIcon" src={require('../../images/yes-green.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/no-red.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/message.png')} /></a>
          </div>
        </div>
        <div class="matchCard">
          <a href=""><img class="matchImg" src={require('../../images/filler-person.png')} /></a>
          <h4>Name</h4>
          <h6>Age X, Washington DC</h6>
          <div class="matchIcons">
            <a href=""><img class="matchIcon" src={require('../../images/yes-green.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/no-red.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/message.png')} /></a>
          </div>
        </div>
      </div>
      <div class="eventMatch">
        <h1 class="title">Eastern High School Tree Planting - Sat March 31 9:00AM</h1>

        <div class="matchCard">
          <a href=""><img class="matchImg" src={require('../../images/filler-person.png')} /></a>
          <h4>Name</h4>
          <h6>Age X, Washington DC</h6>
          <div class="matchIcons">
            <a href=""><img class="matchIcon" src={require('../../images/yes-green.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/no-red.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/message.png')} /></a>
          </div>
        </div>
        <div class="matchCard">
          <a href=""><img class="matchImg" src={require('../../images/filler-person.png')} /></a>
          <h4>Name</h4>
          <h6>Age X, Washington DC</h6>
          <div class="matchIcons">
            <a href=""><img class="matchIcon" src={require('../../images/yes-green.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/no-red.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/message.png')} /></a>
          </div>
        </div>
        <div class="matchCard">
          <a href=""><img class="matchImg" src={require('../../images/filler-person.png')} /></a>
          <h4>Name</h4>
          <h6>Age X, Washington DC</h6>
          <div class="matchIcons">
            <a href=""><img class="matchIcon" src={require('../../images/yes-green.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/no-red.png')} /></a>
            <a href=""><img class="matchIcon" src={require('../../images/message.png')} /></a>
          </div>
        </div>
      </div>
      <br></br><br></br>
    </div>
  )
}

export default Matches
