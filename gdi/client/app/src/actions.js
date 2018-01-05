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
export const FETCH_SINGLE_COURSE_SUCCESS =
  "FETCH_SINGLE_COURSE_SUCCESS";
export const fetchSingleCourseSuccess = singleCourse => {
  //console.log(singleCourse);
  return {
    type: FETCH_SINGLE_COURSE_SUCCESS,
    singleCourse
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
      console.log(courses);
      dispatch(fetchScheduledCoursesSuccess(courses));
    })
    .catch(error => {
      dispatch(
        fetchScheduledCoursesError(error, `Sorry, there was a problem.`)
      );
    });
};

export const addNewCourse = values => dispatch => {
  console.log(values);
  //dispatch(addNewCourseRequest());
  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });

  fetch("http://localhost:8080/api/scheduledCourses", {
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
  console.log(values);

  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });

  fetch("http://localhost:8080/api/scheduledCourses/:id", {
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

export const fetchSingleCourse = (id) => dispatch => {
  //dispatch(fetchSingleCourseRequest());
  fetch(`http://localhost:8080/api/scheduledCourses/${id}`)
    .then(res => {
      if (!res.ok) {
        return console.error(`There was a problem!`);
      }
      return res.json();
    })
    .then(singleCourse => {
      //console.log(singleCourse);
      dispatch(fetchSingleCourseSuccess(singleCourse));
    })
    .catch(error => {
      dispatch(
        console.log(error)
        //fetchSingleCourseError(error, `Sorry, there was a problem.`)
      );
    });
};

export const meetupApiProxy = (text) => dispatch => {
  console.log(text);
  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });

  fetch('http://localhost:8080/api/meetup',{
    method: "post",
    body: JSON.stringify(text),
    headers: myHeaders
  })
  .then(res => {
    if(!res.ok) {
      return console.error(`These was an issue with the API call.`);
    }
    return 
  })
  .then(apiRes => {
    console.log(apiRes);
  })
  .catch(error => {
    console.log(error);
  })
}

// =====  PEOPLE =====

// =====  VENUES =====
