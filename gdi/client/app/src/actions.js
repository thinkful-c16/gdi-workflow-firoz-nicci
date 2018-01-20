import scheduledCourses from "./components/scheduled-courses";
import { API_BASE_URL } from "./config";

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
export const fetchScheduledCoursesSuccess = scheduledCourses => {
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

export const SELECT_COURSE = "SELECT_COURSE";
export const selectCourse = course => {
  return {
    type: SELECT_COURSE,
    course
  };
};

// ===== SingleCourse Action =====
export const FETCH_SINGLE_COURSE_SUCCESS = "FETCH_SINGLE_COURSE_SUCCESS";
export const fetchSingleCourseSuccess = singleCourse => {
  // console.log(singleCourse);
  return {
    type: FETCH_SINGLE_COURSE_SUCCESS,
    singleCourse
  };
};

// ===== People Fetch Action =====
export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const fetchPeopleSuccess = people => {
  //console.log(people);
  return {
    type: FETCH_PEOPLE,
    people
  };
};

// ===== ASYNC FETCH =====
export const fetchScheduledCourses = () => dispatch => {
  dispatch(fetchScheduledCoursesRequest());
  fetch(`${API_BASE_URL}/scheduledCourses`)
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(courses => {
      //console.log(courses);
      dispatch(fetchScheduledCoursesSuccess(courses));
    })
    .catch(error => {
      dispatch(
        fetchScheduledCoursesError(error, `Sorry, there was a problem.`)
      );
    });
};

export const addNewCourse = values => dispatch => {
  //console.log(values);
  //dispatch(addNewCourseRequest());
  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });

  fetch(`${API_BASE_URL}/scheduledCourses`, {
    method: "post",
    body: JSON.stringify(values),
    headers: myHeaders
  })
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(newCourse => {
      console.log(newCourse);
    })
    .catch(err => {
      console.log(err);
    });
};

// === edit course ===
export const editCourse = values => dispatch => {
  //console.log(values);

  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });

  fetch(`${API_BASE_URL}/scheduledCourses/:id`, {
    method: "put",
    body: JSON.stringify(values),
    headers: myHeaders
  })
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(updatedCourse => {
      console.log(updatedCourse);
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchSingleCourse = id => dispatch => {
  //dispatch(fetchSingleCourseRequest());
  fetch(`${API_BASE_URL}/scheduledCourses/${id}`)
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(singleCourse => {
      // console.log(singleCourse);
      dispatch(fetchSingleCourseSuccess(singleCourse));
    })
    .catch(error => {
      dispatch(
        console.log(error)
        //fetchSingleCourseError(error, `Sorry, there was a problem.`)
      );
    });
};

export const fetchPeople = () => dispatch => {
  fetch(`${API_BASE_URL}/people/`)
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(people => {
      //  console.log(people);
      dispatch(fetchPeopleSuccess(people));
    })
    .catch(error => {
      dispatch(console.log(error));
    });
};

export const meetupApiProxy = text => dispatch => {
  //console.log(text);
  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });

  fetch(`${API_BASE_URL}/meetup`, {
    method: "post",
    body: JSON.stringify(text),
    headers: myHeaders
  })
    .then(res => {
      if (!res.ok) {
        return console.error("These was an issue with the API call.");
      }
      return;
    })
    .then(apiRes => {
      console.log(apiRes);
    })
    .catch(error => {
      console.log(error);
    });
};

// =====  PEOPLE =====

// =====  VENUES =====
