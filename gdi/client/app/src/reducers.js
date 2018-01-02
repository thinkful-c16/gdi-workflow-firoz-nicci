import {
  FETCH_SCHEDULED_COURSES_REQUEST,
  FETCH_SCHEDULED_COURSES_SUCCESS,
  FETCH_SCHEDULED_COURSES_ERROR
} from "./actions";

const initialState = {
  scheduledCourses: ["Course1", "Course2", "Course3", "Course4"],
  loading: false,
  error: null
}

export default function scheduledCourses(state=initialState, action) {
  return state;
}