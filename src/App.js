import React from 'react';
import Growth from './Components/Growth/Growth.js'
import Care from './Components/Care/Care.js'
import Wishes from './Components/Wishes/Wishes.js'
import Navigate from './Components/Home/Navigate.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
   return (

  <Router>
          <Switch>
            <Route path="/growth">
              <Growth />
            </Route>
            <Route path="/care">
              <Care />
            </Route>
            <Route path="/wishes">
              <Wishes />
            </Route>
            <Route path="/">
              <Navigate />
            </Route>
          </Switch>
      </Router>
    );
  }


export default App;
