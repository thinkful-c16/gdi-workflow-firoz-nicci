import { createStore, applyMiddleware } from "redux";
//import thunk from 'redux-thunk';
import {connect} from 'react-redux';
import scheduledCourses from './reducers';

export default createStore (scheduledCourses);
