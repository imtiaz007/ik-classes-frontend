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
          Imran Khetani is a Microsoft Certified Trainer with an experience of
          over 5 years. He started out with IT companies and then decided to
          help others using his interpersonal skills and started training and
          teaching about Microsoft products like windows server 2012, 2016,
          2019, AZ-900, AZ-104 etc. Imran’s students speak highly of him and his
          recommendations soeak for themselves! With his help, you can be a pro
          at migrating your applications to cloud.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
