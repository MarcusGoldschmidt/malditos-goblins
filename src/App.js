import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Lobby from './views/lobby';
import Room from './views/room';
import Fichas from './views/fichas';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Lobby></Lobby>
          </Route>
          <Route exact path="/ficha">
            <Fichas></Fichas>
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
