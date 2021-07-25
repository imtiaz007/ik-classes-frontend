/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { allCoursesState } from '../../state/stateAtoms';

import CourseCard from './components/CourseCard';

const AllCoursesPage = () => {
  const coursesById = useRecoilValue(allCoursesState);
  const courseData = Object.values(coursesById);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:space-x-7 w-full mb-20 px-10 pt-5 sm:mx-24">
      {courseData.map(({ id, name, desc, lectures }) => (
        <CourseCard
          key={id}
          id={id}
          courseName={name}
          desc={desc}
          lectureId={lectures[0] ? lectures[0].id : false}
        />
      ))}
    </div>
  );
};

export default AllCoursesPage;
