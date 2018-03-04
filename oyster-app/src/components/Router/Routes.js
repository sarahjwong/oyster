import React from 'react'
import {  Route, Link } from "react-router-dom";
import Explore from "../../pages/Explore/Explore";
import Matches from "../../pages/Matches/Matches";
import Profile from "../../pages/Profile/Profile";
import Connect from "../../pages/Connect/Connect";
import Home from "../../pages/Home/Home";



const Routes = () => (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/connect" component={Connect} />
      <Route path="/matches" component={Matches} />
      <Route path="/profile" component={Profile} />
    </div>
);


export default Routes;
