/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { route, leftIcon, rightIcon, name, type } = props;
  let btnStyles = '';
  //   type could be branding, primary, secondary
  if (type === 'brand') {
    btnStyles = 'flex items-center py-5 px-2 text-blue-500 hover:text-blue-900';
  } else if (type === 'primary') {
    btnStyles = 'flex items-center py-5 px-2 text-gray-700 hover:text-gray-900';
  } else if (type === 'cta') {
    btnStyles =
      'flex items-center py-2 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-400';
  } else {
    btnStyles = 'flex items-center py-5 px-2 text-gray-700 hover:text-gray-900';
  }
  return (
    <>
      <Link to={route}>
        <button type="button" className={btnStyles}>
          {leftIcon}
          <span className="font-bold">{name}</span>
          {rightIcon}
        </button>
      </Link>
    </>
  );
};

export default NavItem;
