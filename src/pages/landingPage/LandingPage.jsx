import React from 'react';
// eslint-disable-next-line import/no-unresolved
import AppBar from '@src/atoms/AppBar';

const LandingPage = () => (
  <div>
    <AppBar position="fixed" color="primary">
      <div className="flex items-center p-3">
        <header>IK Classes</header>
      </div>
    </AppBar>
  </div>
);

export default LandingPage;
