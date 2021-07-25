/* eslint-disable import/no-unresolved */
import React from 'react';
import { ReactComponent as LearningImg } from '@src/assets/learning.svg';
import NavItem from '../../molecules/topNavBar/navItem';

const EmailVerifiedPage = () => (
  <div className="h-screen w-full flex flex-col items-center">
    <p className="text-3xl sm:text-4xl text-gray-600 mt-10 text-center px-5 w-full sm:w-2/3">
      Thank you! Your email has been verified, our team will reach out to you
      shortly to schedule a demo.
    </p>
    <div className="flex items-center justify-center mt-5 space-x-3">
      <p className="text-xl sm:text-2xl text-gray-600">
        Meanwhile, enjoy our free
      </p>
      <NavItem route="/allcourses" name="Courses" type="cta" />{' '}
    </div>
    <LearningImg className="mt-5 mb-10 w-full px-5" />
  </div>
);

export default EmailVerifiedPage;
