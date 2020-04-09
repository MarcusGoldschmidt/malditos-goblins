import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Ficha from "./components/ficha";
import Lobby from './views/lobby';
import Room from './views/room';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Lobby></Lobby>
          </Route>
          <Route path="/ficha">
            <Ficha></Ficha>
          </Route>
          <Route path="/room/:roomId">
            <Room></Room>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
