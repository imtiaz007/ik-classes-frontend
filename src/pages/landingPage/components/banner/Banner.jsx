/* eslint-disable import/no-unresolved */
import React from 'react';
import { ReactComponent as TeachingSvg } from '@src/assets/teaching.svg';
import NavItem from '../../../../molecules/topNavBar/navItem/NavItem';

function Banner() {
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div className="flex flex-col px-10 space-y-7 sm:space-y-5 justify-start sm:justify-center items-start w-full sm:w-1/2">
        <p className="text-gray-700 text-5xl sm:text-6xl">
          <span className="text-blue-400">Azure</span> your success in the cloud
        </p>
        <p className="text-gray-400 text-semibold">
          Boost your Azure experience points with our broad, constantly-updated
          library of Azure training and courses.
        </p>
        <div className="sm:py-5">
          <NavItem name="Schedule a Free Demo" type="cta" route="/signup" />
        </div>
      </div>
      <TeachingSvg className="w-full h-full p-10 sm:w-1/2 sm:h-1/2 sm:p-24 " />
    </div>
  );
}

export default Banner;
