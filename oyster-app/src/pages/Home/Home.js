import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import EventButton from '../../components/EventButton/EventButton';
import TextForm from '../../components/TextForm/TextForm'
import './Home.css';

const Home = (props) => {
  return (
    <div>
      <br /><br />
      <h3 className="slogan"> Good deeds, great dates. </h3>
      <p className="tagline">oyster is the innovative new dating app that encourages contributing to social good with the motivation of making new romantic connections. Find your pearl - sign up today.</p>
      <h1 className="titleHeader"> Sign Up </h1>

      <br /><br />
      <TextForm />
      <br /><br /><br /><br /><br />
      </div>
  )
}

export default Home;
