import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./screens/categories";
import Freight from "./screens/freight";
import HouseHoldItems from "./screens/household-items";
import Moves from "./screens/moves";
import Vehicles from "./screens/vehicles";
import "./App.css";

function FreightRouter() {
  return (
    <Router>
      <Switch>
        <div>
          <Route path="/" component={Categories} exact />
          <Route path="/vehicles" component={Vehicles} exact />
          <Route path="/freight" component={Freight} exact />
          <Route path="/moves" component={Moves} exact />
          <Route path="/household-items" component={HouseHoldItems} exact />
        </div>
      </Switch>
    </Router>
  );
}

function App() {
  return <FreightRouter />;
}

export default App;
