import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import HomeandLiving from "../pages/HomeandLiving";
import Offer from "../pages/Offer";

const WebPanels = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/men" component={Men} />
      <Route exact path="/women" component={Women} />
      <Route exact path="/kids" component={Kids} />
      <Route exact path="/homeandLiving" component={HomeandLiving} />
      <Route exact path="/offer" component={Offer} />
      <Redirect to="/" />
    </Switch>
  );
};

export default WebPanels;
