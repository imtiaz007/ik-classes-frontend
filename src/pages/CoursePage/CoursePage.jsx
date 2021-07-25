/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { allCoursesState } from '@src/state/stateAtoms.js';
import { useParams } from 'react-router-dom';
import querystring from 'query-string';
import { List as ListIcon } from '@icons';
import Lecture from './components/Lecture/Lecture';
import LectureList from './components/LectureList';

const CoursePage = (props) => {
  const { id } = useParams();
  const queryParams = querystring.parse(props.location.search);
  const lectureList = useRecoilValue(allCoursesState);
  const course = lectureList[id] || {};
  const { lectures = [] } = course;
  const selectedLecture =
    lectures.find(
      (lecture) => lecture.id === parseInt(queryParams.lectureId, 10)
    ) || lectures[0];
  const [lectureListHidden, setLectureListHidden] = React.useState(true);
  if (lectures.length === 0)
    return (
      <div className="h-screen">
        <p className="text-gray-400 text-xl font-semibold text-center mt-12">
          Lectures coming soon..
        </p>
      </div>
    );
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="w-full sm:w-1/5 sm:h-full">
        <button
          type="button"
          className="sm:hidden flex flex-row items-center text-blue-500 bg-gray-100 focus:none p-1 border border-gray-200 shadow-md rounded m-3 mb-0"
          onClick={() => setLectureListHidden(!lectureListHidden)}
        >
          <ListIcon />
          <p className="text-sm text-gray-500">Lectures</p>
        </button>
        <div
          className={`${lectureListHidden ? 'hidden' : ''} sm:block sm:h-full`}
        >
          <LectureList history={props.history} />
        </div>
      </div>
      <Lecture lecture={selectedLecture} history={props.history} />
    </div>
  );
};

export default CoursePage;
