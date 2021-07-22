import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MapView from "../map/MapView";
import Home from "../map/Home";

function MapPage() {
  return (
    <Router>
      <Switch>
        <Route path="/mapView">
          <div>
            <MapView />
          </div>
        </Route>
        <Route path="/map">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default MapPage;
