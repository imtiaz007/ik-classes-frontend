/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { Menu as MenuIcon } from '@icons';

const NavBar = (props) => {
  const { brand, primary, secondary } = props;
  const [navHidden, setNavHidden] = React.useState(true);

  return (
    <nav className="bg-gray-100 sticky w-full z-50 sm:w-screen">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* <!-- Branding --> */}
            {brand}
            <div className="hidden md:flex items-center space-x-1">
              {/* <!-- primary nav --> */}
              {primary}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {/* <!-- secondary nav --> */}
            {secondary}
          </div>

          {/* <!-- mobile button goes here --> */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              type="button"
              onClick={() => setNavHidden(!navHidden)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div className={`px-5 pb-3 ${navHidden ? 'hidden' : ''} md:hidden`}>
        {/* nav items */}
        {primary}
        {secondary}
      </div>
    </nav>
  );
};

export default NavBar;
