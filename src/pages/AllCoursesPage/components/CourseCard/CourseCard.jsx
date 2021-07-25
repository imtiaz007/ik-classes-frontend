/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CourseBanner } from '@src/assets/temp_course_img.svg';

const CourseCard = ({ id, courseName, desc }) => {
  const route = `/course/${id}`;
  return (
    <div className="flex flex-col w-full sm:w-1/4 sm:ml-7 mb-5 rounded-md shadow-xl bg-gray-100 pt-10">
      <Link to={route}>
        {/* <img
          src="https://picsum.photos/400/200"
          alt=""
          className="rounded-t-xl w-full"
        /> */}
        <CourseBanner className="w-full h-48" />
        <div className="p-5 space-y-3">
          <p className="text-2xl font-medium text-gray-600">{courseName}</p>
          <p className="text-gray-500">{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
