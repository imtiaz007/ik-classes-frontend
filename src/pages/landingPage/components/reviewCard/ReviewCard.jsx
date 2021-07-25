/* eslint-disable import/no-unresolved */
import React from 'react';
// import {
//   ChevronRight as ChevronRightIcon,
//   ChevronLeft as ChevronLeftIcon,
// } from '@icons';

const ReviewCard = () => (
  <div className="flex justify-center">
    {/* <button type="button" className="hidden sm:inline-block ">
      <ChevronLeftIcon fontSize="large" />
    </button> */}
    <div className="flex max-w-full sm:w-2/4 overflow-x-auto space-x-5 flex-row p-10">
      <div className="flex flex-col shadow-lg p-5 rounded-xl min-w-full sm:w-1/3">
        <div className="flex">
          <img
            src="https://placeimg.com/640/480/any"
            alt=""
            className="w-16 h-16 rounded-full mr-3"
          />
          <p className="text-2xl place-self-center text-gray-600 font-semibold">
            Sharad
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          The training was great and very fulfilling. The timing is suitable for
          all the session, I attended during office hours. I joined the session
          and enjoyed a lot. His way of teaching is simple yet resourceful. Wish
          you all the very best. I highly recommend learning from IK Classes.
        </p>
      </div>
      <div className="flex flex-col shadow-lg p-5 rounded-xl min-w-full sm:w-1/3">
        <div className="flex">
          <img
            src="https://placeimg.com/640/480/any"
            alt=""
            className="w-16 h-16 rounded-full mr-3"
          />
          <p className="text-2xl place-self-center text-gray-600 font-semibold">
            Maharajan
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          It is very useful to learn the all the new things for next level. And
          given the expertise Imran has, it’s very easy to understand the
          concepts.
        </p>
      </div>
    </div>
    {/* <button type="button" className="hidden sm:inline-block">
      <ChevronRightIcon fontSize="large" />
    </button> */}
  </div>
);

export default ReviewCard;
