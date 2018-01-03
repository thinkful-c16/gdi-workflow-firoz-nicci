import {
  FETCH_SCHEDULED_COURSES_REQUEST,
  FETCH_SCHEDULED_COURSES_SUCCESS,
  FETCH_SCHEDULED_COURSES_ERROR
} from "./actions";

const initialState = {
  scheduledCourses: [],
  loading: false,
  error: null
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
  }
  return state;
}
