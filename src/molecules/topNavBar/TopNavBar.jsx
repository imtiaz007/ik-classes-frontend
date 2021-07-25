/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import React from 'react';
import NavBar from './navBar/NavBar';
import NavItem from './navItem/NavItem';
import { Class as ClassIcon } from '@icons';

function TopNavBar() {
  const brand = (
    <NavItem
      route="/home"
      name="IK Classes"
      type="brand"
      leftIcon={<ClassIcon />}
    />
  );
  const primary = (
    <>
      {/* <NavItem route="/feature" name="Features" type="primary" /> */}
      <NavItem route="/course" name="Courses" type="primary" />
    </>
  );

  const secondary = (
    <>
      <NavItem route="/signin" name="Sign in" type="secondary" />
      <NavItem route="/signup" name="Sign up" type="cta" />
    </>
  );
  return <NavBar brand={brand} primary={primary} secondary={secondary} />;
}

export default TopNavBar;
