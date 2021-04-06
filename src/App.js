import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AdminSection from './Components/AdminSection/AdminSection';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import LogIn from './Components/LogIn/LogIn';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route path="/admin">
          <AdminSection></AdminSection>
        </Route>
        <Route path="/logIn">
          <LogIn></LogIn>
        </Route>
        <Route path="/">
         <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
