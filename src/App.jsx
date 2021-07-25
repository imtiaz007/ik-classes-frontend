import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { RecoilRoot } from 'recoil';
import LandingPage from './pages/landingPage';
import TopNavBar from './molecules/topNavBar';
import Footer from './pages/landingPage/components/Footer/Footer';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import SignInPage from './pages/SignInPage';
import EmailVerifiedPage from './pages/EmailVerifiedPage';
import CourseContainer from './pages/CourseContainer';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <TopNavBar />
        <ToastContainer />
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/course" component={CourseContainer} />
          <Route path="/verified" component={EmailVerifiedPage} />
          <Redirect from="*" to="/home" />
        </Switch>
        <Footer />
      </Router>
    </RecoilRoot>
  );
}

export default App;
