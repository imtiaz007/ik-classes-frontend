import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
