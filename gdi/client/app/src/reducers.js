import {
  FETCH_SCHEDULED_COURSES_REQUEST,
  FETCH_SCHEDULED_COURSES_SUCCESS,
  FETCH_SCHEDULED_COURSES_ERROR,
  SELECT_COURSE
} from "./actions";

const initialState = {
  scheduledCourses: [],
  scheduledCoursesMentor: {},
  loading: false,
  error: null,
  selectedCourse: null
};

const normalizeCourses = (courses) => {
  return courses.reduce((prev, current) => {
    prev[current._id] = {
      ...current
    }

    return prev
  }, {})
}

export default function scheduledCourses(state = initialState, action) {
  if (action.type === FETCH_SCHEDULED_COURSES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_SCHEDULED_COURSES_SUCCESS) {
    return Object.assign({}, state, {
      scheduledCourses: action.scheduledCourses,
      loading: false,
      error: null,
      scheduledCoursesMentor: normalizeCourses(action.scheduledCourses)
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
  } else if (action.type === 'FETCH_SCHEDULED_COURSE_SUCCESS') {
    return {
      ...state,
      scheduledCoursesMentor: {
        ...state.scheduledCoursesMentor,
        [action.course._id]: {
          ...action.course
        }
      }
    }
  } else if (action.type === 'UPDATE_SCHEDULED_COURSE') {
    // ARRAY WAY
    // return {
    //   ...state,
    //   scheduledCourses: state.map(c =>
    //     c._id === action._id ? {
    //       ...c,
    //       ...action.payload
    //     } : c
    //   )
    // }
    return {
      ...state,
      scheduledCoursesMentor: {
        ...state.scheduledCoursesMentor,
        [action._id]: {
          ...state.scheduledCoursesMentor[action._id],
          ...action.payload
        }
      }
    }
  } else if (action.type === 'DELETE_SCHEDULED_COURSE') {
    // Array way
    // return {
    //   ...state,
    //   scheduledCourses: state.scheduledCourses.filter(c => c._id !== action._id)
    // }

    const newScheduledCoursesMentor = { ...state.scheduledCoursesMentor }

    delete newScheduledCoursesMentor[action._id]

    return {
      ...state,
      scheduledCoursesMentor: newScheduledCoursesMentor
    }
  }

  return state;
}
