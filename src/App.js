import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from "./components/layout/Sidebar"
import Dashboard from "./components/dashboard/Dashboard"
import './App.css';


function App() {
  return (

    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
