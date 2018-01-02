import React from "react";
import "./scheduled-courses.css";
import {connect} from 'react-redux';


export class ScheduledCourses extends React.Component {
  render() {
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
