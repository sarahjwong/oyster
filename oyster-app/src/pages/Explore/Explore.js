import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import EventButton from '../../components/EventButton/EventButton'


const Explore = (props) => {
  return (
    <div>
      <div className="location">
        <h1>Location: Washington, DC</h1>
      </div>
      <div className="event">
        <div className="event-details">
          <h5>Sat, Mar 17 9:00AM</h5>
          <h4>Tree Planting Near Snowden Park</h4>
          <h5>Snowden Park</h5>
          <EventButton />
          <a href="https://www.eventbrite.com/e/tree-planting-near-snowden-park-tickets-42434396422">&nbsp;More Info</a>
        </div>
        <img className="event-image" src={require('../../images/snowden.png')}></img>
      </div>

      <div className="event">
        <div className="event-details">
          <h5>Sun, April 15 11:00AM</h5>
          <h4>All-UC Spring Philanthropy - DC Walk for Wishes</h4>
          <h5>National Mall</h5>
          <EventButton />
          <a href="https://www.eventbrite.com/e/all-uc-spring-philanthropy-dc-walk-for-wishes-registration-41146533389">&nbsp;More Info</a>
        </div>
        <img className="event-image" src={require('../../images/makeawish.png')}></img>
      </div>

      <div className="event">
        <div className="event-details">
          <h5>Sat, April 21 9:00AM</h5>
          <h4>Earth Day Volunteer Event at Kenilworth Aquatic Gardens</h4>
          <h5>Kenilworth Aquatic Gardens</h5>
          <EventButton />
          <a href="https://www.eventbrite.com/e/april-21-earth-day-volunteer-event-at-kenilworth-aquatic-gardens-registration-42912496432">&nbsp;More Info</a>
        </div>
        <img className="event-image" src={require('../../images/kenilworth.jpg')}></img>
      </div>

      <div className="event">
        <div className="event-details">
          <h5>Sat, April 21 9:00AM</h5>
          <h4>Earth Day Volunteer Event at Kenilworth Aquatic Gardens</h4>
          <h5>Kenilworth Aquatic Gardens</h5>
          <EventButton />
        </div>
        <img className="event-image" src={require('../../images/kenilworth.jpg')}></img>
      </div>
      <br></br>
    </div>
  )
}

export default Explore
