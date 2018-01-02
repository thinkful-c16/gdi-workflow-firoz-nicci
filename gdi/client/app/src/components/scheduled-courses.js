import React from "react";
import "./scheduled-courses.css";
import {connect} from 'react-redux';
import { fetchScheduledCourses } from "../actions";


export class ScheduledCourses extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchScheduledCourses())
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="scheduled-courses">
          <h1>ScheduledCourses </h1>
          <ul>
            {this.props.scheduledCourses.map(function(course, index){
              return (
              <li key={index}>{course}</li>
                );
            })}
          </ul>
          <button className="new-course-button">Add New Course</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    scheduledCourses: state.scheduledCourses
  };
};

export default connect(mapStateToProps)(ScheduledCourses);
