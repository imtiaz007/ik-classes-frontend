import React from 'react';

const PricingCards = () => (
  <div className="flex flex-col sm:flex-row mx-7 sm:mx-32 h-screen">
    <div className="flex flex-col space-y-3 px-5 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-gray-200  h-60 rounded sm:w-1/3 my-7 sm:mx-5">
      <p className="text-blue-500 mx-auto text-2xl font-semibold">Basic</p>
      <p className="text-gray-500 font-medium">60 hours of Live Classes</p>
      <p className="text-gray-500 font-medium">
        20 hours of Pre-recorded Content
      </p>
      <p className="text-gray-500 font-medium">Weekends</p>
      <p className="text-gray-500 font-medium">
        Next batch begins on 3rd march
      </p>
    </div>
    <div className="flex flex-col space-y-3 px-5 py-5  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-gray-200  h-60 rounded sm:w-1/3 my-7 sm:mx-5">
      <p className="text-blue-500 mx-auto text-2xl font-semibold">
        Intermediate
      </p>
      <p className="text-gray-500 font-medium">30 hours of Live Classes</p>
      <p className="text-gray-500 font-medium">
        20 hours of Pre-recorded Content
      </p>
      <p className="text-gray-500 font-medium">Week days</p>
      <p className="text-gray-500 font-medium">
        Next batch begins on 3rd march
      </p>
    </div>
    <div className="flex flex-col space-y-3 px-5 py-5  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-gray-200  h-60 rounded sm:w-1/3 my-7 sm:mx-5">
      <p className="text-blue-500 mx-auto text-2xl font-semibold">Expert</p>
      <p className="text-gray-500 font-medium">30 hours of Live Classes</p>
      <p className="text-gray-500 font-medium">
        20 hours of Pre-recorded Content
      </p>
      <p className="text-gray-500 font-medium">Week days</p>
      <p className="text-gray-500 font-medium">
        Next batch begins on 3rd march
      </p>
    </div>
  </div>
);

export default PricingCards;
