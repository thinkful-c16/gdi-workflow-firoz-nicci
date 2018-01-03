import React from "react";
import "./scheduled-courses.css";
import { connect } from "react-redux";
import { fetchScheduledCourses } from "../actions";
import scheduledCourses from "../reducers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class ScheduledCourses extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchScheduledCourses());
  }

  render() {
    return (
      <div>
        <div className="home-page">
          <h1>Scheduled Courses</h1>
          <ul>
            {this.props.courses.map((course, index) => {
              return (
                <li key={index}>
                  <Link to="/courseDetail/:courseId">
                    {course.title}</Link> {course.dates}
                  
                </li>
              );
            })}
          </ul>
          <button className="new-course-button">Schedule Course</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    courses: state.scheduledCourses
  };
};

export default connect(mapStateToProps)(ScheduledCourses);
