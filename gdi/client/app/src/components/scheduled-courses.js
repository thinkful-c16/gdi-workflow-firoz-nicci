import React from "react";
import "./scheduled-courses.css";
import { connect } from "react-redux";
import { fetchScheduledCourses } from "../actions";
import scheduledCourses from "../reducers";

export class ScheduledCourses extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchScheduledCourses());
  }

  render() {
    // const courses = this.props.courses.map((course, index) => {
    //   return <li key={index}>{courses}</li>

    // })

    console.log(this.props);
    return (
      <div>
        <div className="scheduled-courses">
          <h1>ScheduledCourses </h1>
          <ul>
            {this.props.scheduledCourses.map((course, index) => {
              return (<div></div>);
            })}
          </ul>
          <button className="new-course-button">Add New Course</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    scheduledCourses: state.scheduledCourses
  };
};

export default connect(mapStateToProps)(ScheduledCourses);
