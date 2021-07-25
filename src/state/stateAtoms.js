/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

const allCoursesState = atom({
  key: '_ALL_COURSES_STATE',
  default: {},
});

export { allCoursesState };
