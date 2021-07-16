/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@icons';

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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
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
            Ashraful Islam
          </p>
        </div>
        <p className="text-sm sm:text-xl p-3 text-gray-400 text-semibold">
          One of the first courses I did online was your ASP .NET MVC 5 course
          and I was surprised when a few months later I started working in a
          software factory and everything I had learned in the course was used
          in real world applications
        </p>
      </div>
    </div>
    {/* <button type="button" className="hidden sm:inline-block">
      <ChevronRightIcon fontSize="large" />
    </button> */}
  </div>
);

export default ReviewCard;
