import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ConnectEvent1 from '../../components/ConnectEvent/ConnectEvent1';
import ConnectEvent2 from '../../components/ConnectEvent/ConnectEvent2';
import './Connect.css';


const Connect = (props) => {
  return (
    <div>
      <div class="eventCarousel">
        <h1 class="title">GirlsLEAD Summit 2018 - Fri March 9 7:30AM</h1>
        <ConnectEvent1 />
      </div>
      <div class="eventCarousel">
        <h1 class="title">Eastern High School Tree Planting - Sat March 31 9:00AM</h1>
        <ConnectEvent2 />
      </div>
      <br></br><br></br>
    </div>
  )
}

export default Connect
