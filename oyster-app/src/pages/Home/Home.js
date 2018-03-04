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
      <h1 className="titleHeader"> Sign Up </h1>

      <br /><br /><br /><br />
      <TextForm />
      <br /><br /><br /><br /><br />
      </div>
  )
}

export default Home;
