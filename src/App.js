import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Ficha from "./components/ficha";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Ficha></Ficha>
          </Route>
          <Route path="/:roomId">
          </Route>
          <Route path="/ficha">
            <Ficha></Ficha>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
