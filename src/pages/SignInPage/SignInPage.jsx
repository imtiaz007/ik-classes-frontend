/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const SignInPage = () => (
  <div className="flex flex-col pt-24 items-center px-10 mx-auto w-full sm:w-1/3 h-screen">
    <div className="space-y-7">
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
        placeholder="Email"
        className="border-gray-300 rounded-lg shadow-md w-full"
      />
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="password"
        required
        placeholder="Password"
        className="border-gray-300 rounded-lg shadow-md w-full"
      />
    </div>
    <div className="my-7 space-y-1 w-full">
      <div className="w-full">
        <input
          type="checkbox"
          name="logged-in-permission"
          id="logged-in-permission"
          className="rounded-sm"
        />
        <label
          htmlFor="logged-in-permission"
          className="ml-2 text-gray-400 align-middle"
        >
          Remember me
        </label>
      </div>
    </div>
    <button
      type="submit"
      className="w-full p-3 rounded-lg capitalize bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 transition duration-400 focus:outline-none"
    >
      Sign In
    </button>
  </div>
);

export default SignInPage;
