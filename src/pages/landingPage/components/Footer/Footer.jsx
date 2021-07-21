/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Facebook as FacebookIcon,
  YouTube as YoutubeIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@icons';

const Footer = () => (
  <div className="flex flex-col items-center  p-5 w-screen bg-gray-200 h-24">
    <div className="flex space-x-3">
      <a
        href="https://www.facebook.com/ikclasses"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <FacebookIcon fontSize="large" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCXLebRyRj-HKL8r5-nUaOVQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <YoutubeIcon fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/imran-khetani-34026323/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://www.instagram.com/ikclasses/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <InstagramIcon fontSize="large" />
      </a>
    </div>
    <p className="text-gray-400 mt-2">© IK Classes 2021</p>
  </div>
);

export default Footer;
