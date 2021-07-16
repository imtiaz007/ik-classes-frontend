/* eslint-disable import/no-unresolved */
import React from 'react';
import { ReactComponent as MaleAvatar } from '@src/assets/male_avatar.svg';

const AboutMe = () => (
  <div className="flex justify-center">
    <div className="flex flex-col sm:flex-row p-5 w-full">
      <MaleAvatar className="w-52 h-52 p-3 mx-auto sm:w-1/2 sm:h-full sm:p-32 sm:pt-0" />
      <div className="sm:w-1/2">
        <p className="text-6xl mx-auto sm:text-8xl font-extrabold text-gray-400 ">
          About me
        </p>
        <p className="text-sm sm:text-3xl sm:pr-10 text-gray-400 text-semibold">
          Hi! I am Mosh Hamedani! I am a passionate and pragmatic software
          engineer with 20 years of professional experience and I have taught
          over 10 million people how to code or how to become professional
          software engineers through my YouTube channel and online courses.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
