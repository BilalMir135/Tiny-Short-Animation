import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route to='/' exact component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
