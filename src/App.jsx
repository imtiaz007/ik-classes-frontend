import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import TopNavBar from './molecules/topNavBar';
import Footer from './pages/landingPage/components/Footer/Footer';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route to="/" component={LandingPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
