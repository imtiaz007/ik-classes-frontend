/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import axios from '@src/helpers/axios';
import { allCoursesState } from '@src/state/stateAtoms';
import { useRecoilState } from 'recoil';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AllCoursesPage from '../AllCoursesPage';
import CoursePage from '../CoursePage';

const CourseContainer = (props) => {
  const [lectureList, setLectureList] = useRecoilState(allCoursesState);
  const parseData = (data) => {
    const coursesById = data.reduce(
      (allCoursesById, course) => ({
        ...allCoursesById,
        [course.id]: course,
      }),
      {}
    );
    setLectureList(coursesById);
  };

  useEffect(() => {
    axios
      .get('/courses')
      .then((response) => {
        parseData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // const errMessage = `${error.response.data.message[0].messages[0].message}`;
      });
  }, []);
  if (Object.keys(lectureList).length <= 0)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={5000} // 3 secs
        />
      </div>
    );
  return (
    <div>
      <Switch>
        <Route
          path={`${props.match.url}/allcourses`}
          component={AllCoursesPage}
        />
        <Route path={`${props.match.url}/:id`} component={CoursePage} />
        <Redirect
          from={`${props.match.url}`}
          to={`${props.match.url}/allcourses`}
        />
      </Switch>
    </div>
  );
};

export default CourseContainer;
