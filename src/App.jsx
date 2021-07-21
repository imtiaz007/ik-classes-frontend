import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import LandingPage from './pages/landingPage';
import TopNavBar from './molecules/topNavBar';
import Footer from './pages/landingPage/components/Footer/Footer';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AllCoursesPage from './pages/AllCoursesPage/AllCoursesPage';
import CoursePage from './pages/CoursePage/CoursePage';
import SignInPage from './pages/SignInPage';
import EmailVerifiedPage from './pages/EmailVerifiedPage';

function App() {
  return (
    <Router>
      <TopNavBar />
      <ToastContainer />
      <div className="">
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/allcourses" component={AllCoursesPage} />
          <Route path="/course" component={CoursePage} />
          <Route path="/verified" component={EmailVerifiedPage} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
