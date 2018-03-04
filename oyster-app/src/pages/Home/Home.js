import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import EventButton from '../../components/EventButton/EventButton';
import TextForm from '../../components/TextForm/TextForm'
import './Home.css';

const Home = (props) => {
  return (
    <div>

      <h1 className="titleHeader"> Sign Up </h1>
      <br>
      <TextForm />

      </div>
  )
}

export default Home;
