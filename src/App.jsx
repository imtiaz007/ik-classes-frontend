import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import TopNavBar from './molecules/topNavBar';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route to="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
