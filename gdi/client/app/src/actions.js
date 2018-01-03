import scheduledCourses from "./components/scheduled-courses";

//const API_BASE_URL = "http://localhost:8080/api";

// =====  SCHEDULED COURSES ====

export const FETCH_SCHEDULED_COURSES_REQUEST =
  "FETCH_SCHEDULED_COURSES_REQUEST";
export const fetchScheduledCoursesRequest = () => {
  return {
    type: FETCH_SCHEDULED_COURSES_REQUEST
  };
};

export const FETCH_SCHEDULED_COURSES_SUCCESS =
  "FETCH_SCHEDULED_COURSES_SUCCESS";
export const fetchScheduledCoursesSuccess = () => {
  return {
    type: FETCH_SCHEDULED_COURSES_SUCCESS,
    scheduledCourses
  };
};

export const FETCH_SCHEDULED_COURSES_ERROR = "FETCH_SCHEDULED_COURSES_ERROR";
export const fetchScheduledCoursesError = (error, message) => {
  return {
    type: FETCH_SCHEDULED_COURSES_ERROR,
    error,
    message
  };
};

// ===== ASYNC FETCH =====
export const fetchScheduledCourses = () => dispatch => {
  dispatch(fetchScheduledCoursesRequest());
  fetch("http://localhost:8080/api/scheduledCourses")
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(courses => {
      dispatch(fetchScheduledCoursesSuccess(courses));
    })
    .catch(error => {
      dispatch(
        fetchScheduledCoursesError(error, `Sorry, there was a problem.`)
      );
    });
};

// =====  PEOPLE =====

// =====  VENUES =====
