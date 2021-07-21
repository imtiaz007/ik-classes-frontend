/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { OndemandVideo as VideoIcon, Subject as SubjectIcon } from '@icons';

const CoursePage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 flex-none overflow-y-auto hidden sm:block bg-gray-100 px-5 border-r-1 border-gray-400 rounded-r-md shadow-lg">
        <p className="text-2xl mt-5 text-gray-700 font-semibold">Azure 101</p>
        <div className="flex flex-col space-y-2 mt-3">
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">Introduction</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">Prerequisites</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">How to Take this Course</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <SubjectIcon />
            </i>
            <p className="text-gray-700">Set up Guide</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <SubjectIcon />
            </i>
            <p className="text-gray-700">Getting Help</p>
          </div>
        </div>
        <p className="text-2xl mt-5 text-gray-700 font-semibold">Azure 101</p>
        <div className="flex flex-col space-y-2 mt-5">
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">Introduction</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">Prerequisites</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">How to Take this Course</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <SubjectIcon />
            </i>
            <p className="text-gray-700">Set up Guide</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <SubjectIcon />
            </i>
            <p className="text-gray-700">Getting Help</p>
          </div>
        </div>
        <p className="text-2xl mt-5 text-gray-700 font-semibold">Azure 101</p>
        <div className="flex flex-col space-y-2 mt-5">
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">Introduction</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">Prerequisites</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <VideoIcon />
            </i>
            <p className="text-gray-700">How to Take this Course</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <SubjectIcon />
            </i>
            <p className="text-gray-700">Set up Guide</p>
          </div>
          <div className="flex space-x-3 items-center hover:bg-blue-200 px-3 py-1 rounded-md">
            <i className="text-gray-500">
              <SubjectIcon />
            </i>
            <p className="text-gray-700">Getting Help</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-3/4 p-5 overflow-y-auto">
        <div className="flex items-center space-x-3">
          <i className="text-gray-700">
            <VideoIcon fontSize="large" />
          </i>
          <p className="text-2xl font-bold text-gray-700">Introduction</p>
        </div>
        <iframe
          // width="1296"
          height="480"
          className="w-full pt-5 flex-none"
          src="https://www.youtube.com/embed/tS87Gx7t_9s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* <article className="prose lg:prose-xl">
         
        </article> */}
      </div>
    </div>
  );
};

export default CoursePage;
