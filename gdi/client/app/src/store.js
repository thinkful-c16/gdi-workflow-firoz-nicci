import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { connect } from "react-redux";
import scheduledCourses from "./reducers";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  scheduledCourses
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
