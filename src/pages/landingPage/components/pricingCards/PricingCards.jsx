import React from 'react';

const PricingCards = () => (
  <div className="flex flex-col sm:flex-row mx-7 sm:mx-32">
    <div className="flex flex-col space-y-3 px-5 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-gray-200  h-full rounded sm:w-1/3 my-7 sm:mx-5">
      <p className="text-blue-500 mx-auto text-2xl font-semibold">Basic</p>
      <p className="text-gray-500 font-medium">Instructor-led training</p>
      <p className="text-gray-500 font-medium">
        Recorded videos with 6 months Validity
      </p>
      <p className="text-gray-500 font-medium">
        Dedicated community on Whatsapp
      </p>
      <p className="text-gray-500 font-medium">6,999 INR</p>
    </div>
    <div className="flex flex-col space-y-3 px-5 py-5  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-gray-200  h-full rounded sm:w-1/3 my-7 sm:mx-5">
      <p className="text-blue-500 mx-auto text-2xl font-semibold">Standard</p>
      <p className="text-gray-500 font-medium">Everything from Basic plan</p>
      <p className="text-gray-500 font-medium">
        1 TB of One Drive for 6 months
      </p>
      <p className="text-gray-500 font-medium">MS office apps</p>
      <p className="text-gray-500 font-medium">Custom IK classes Email</p>
      <p className="text-gray-500 font-medium">9,999 INR</p>
    </div>
    <div className="flex flex-col space-y-3 px-5 py-5  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-gray-200  h-full rounded sm:w-1/3 my-7 sm:mx-5">
      <p className="text-blue-500 mx-auto text-2xl font-semibold">Premium</p>
      <p className="text-gray-500 font-medium">
        Everything from Basic and Premium
      </p>
      <p className="text-gray-500 font-medium">
        Azure Pay-as-you-go Subscription for 3 months
      </p>
      <p className="text-gray-500 font-medium">
        3,000 INR worth Azure Credits per month
      </p>
      <p className="text-gray-500 font-medium">Hands on practice</p>
      <p className="text-gray-500 font-medium">13,999 INR</p>
    </div>
  </div>
);

export default PricingCards;
