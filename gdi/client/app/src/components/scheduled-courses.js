import React from "react";
import "./scheduled-courses.css";
import { connect } from "react-redux";
import { fetchScheduledCourses, selectCourse } from "../actions";
import scheduledCourses from "../reducers";
import Spinner from "react-spinkit";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class ScheduledCourses extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchScheduledCourses());
  }

  clickCourse(course) {
    console.log(course);
    this.props.dispatch(selectCourse(course));
    this.props.history.push(`/course-detail/${course._id}`)
  }

  render() {
    // if (this.props.loading) {
    //   return <Spinner name="line-scale-pulse-out-rapid" noFadeIn/>;
    // }
    if (!this.props.courses) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        <div className="home-page">
          <h1>Scheduled Courses</h1>
          <ul>
            {this.props.courses.map((course, index) => {
              console.log(this.props);
              return (
                <li key={index}>
                  <a href="#" onClick={() => this.clickCourse(course)}>{course.course.name}</a>
                  {/* {course.dates[0][0]} */}
                </li>
              );
            })}
          </ul>
          <Link to="/courseAdd">
            <button type="submit" className="new-course-button">
              Schedule Course
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    courses: state.scheduledCourses,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(ScheduledCourses);
