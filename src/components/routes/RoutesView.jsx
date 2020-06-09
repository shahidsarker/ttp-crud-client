import React from "react";
import { Switch, Route } from "react-router-dom";
import { AllCampusesContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllCampusesContainer} />
    </Switch>
  );
};

export default RoutesView;
