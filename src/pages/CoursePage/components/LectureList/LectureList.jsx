/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { OndemandVideo as VideoIcon, Subject as SubjectIcon } from '@icons';
import { allCoursesState } from '@src/state/stateAtoms';

import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

const LectureList = ({ history }) => {
  const courseData = useRecoilValue(allCoursesState);
  const { id } = useParams();
  const { name, lectures } = courseData[id];
  return (
    <div className="h-full flex-none overflow-y-auto bg-gray-100 px-5 border-r-1 border-gray-400 rounded-r-md">
      <p className="text-2xl mt-3 sm:mt-5 text-gray-700 font-semibold">
        {name}
      </p>
      <div className="flex flex-col space-y-2 mt-3">
        {lectures.map((lecture) => {
          return (
            <button
              type="button"
              key={lecture.id}
              onClick={() =>
                history.push({ search: `lectureId=${lecture.id}` })
              }
              className="flex space-x-3 items-center hover:bg-blue-200 active:bg-blue-200 px-3 py-1 rounded-md"
            >
              <i className="text-gray-500">
                {lecture.type === 'video' ? <VideoIcon /> : <SubjectIcon />}
              </i>
              <p className="text-gray-700">{lecture.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LectureList;
