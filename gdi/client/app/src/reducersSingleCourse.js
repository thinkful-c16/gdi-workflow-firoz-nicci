import { FETCH_SINGLE_COURSE_SUCCESS } from './actions.js';

export default function getSingleCourse(state, action){
    if (action.type === FETCH_SINGLE_COURSE_SUCCESS ) {
        return Object.assign({}, state, {
          selectedCourse: action.selectedCourse  
        });
    }
    console.log(state);
    return state;
}