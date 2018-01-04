import {
  FETCH_SCHEDULED_COURSES_REQUEST,
  FETCH_SCHEDULED_COURSES_SUCCESS,
  FETCH_SCHEDULED_COURSES_ERROR,
  SELECT_COURSE
} from "./actions";

import { FETCH_SINGLE_COURSE_SUCCESS } from './actions.js';

const initialState = {
  scheduledCourses: [],
  loading: false,
  error: null,
  selectedCourse: {}
};

export default function scheduledCourses(state = initialState, action) {
  if (action.type === FETCH_SCHEDULED_COURSES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_SCHEDULED_COURSES_SUCCESS) {
    return Object.assign({}, state, {
      scheduledCourses: action.scheduledCourses,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_SCHEDULED_COURSES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === SELECT_COURSE) {
    return Object.assign({}, state, {
      selectedCourse: action.course
    });
  } else if (action.type === FETCH_SINGLE_COURSE_SUCCESS) {
    console.log(action);  
    return Object.assign({}, state, {
        selectedCourse: action.singleCourse
      })
  }
  return state;
}


