import React from "react";
import "./course-detail.css";
import Nav from "./nav";
import { connect } from "react-redux";
import {
  fetchScheduledCourses,
  selectCourse,
  fetchSingleCourse,
  editCourse
} from "../actions";
//import Form from './form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import scheduledCourses from "../reducers";

export class CourseDetail extends React.Component {
  componentDidMount() {
    //use if condition if needed with redirect for people trying to access url directly
    //console.log('mounted');
    const courseId = this.props.match.params.id;
    this.props.dispatch(fetchSingleCourse(courseId));
  }

  clickEdit(course) {
    this.props.dispatch(editCourse(course));
  }

  render() {
    if (this.props.course._id) {
      return (
        <div>
          <Nav />
          <div className="course-detail">
            <h2>
              {console.log(this.props.course)} {this.props.course.course.name}
            </h2>
            <h3>{this.props.course.dates[0]}</h3>

            <div>
              <h3>General Info</h3>
              <p>Fee: {this.props.course.course.price}</p>
              <p>Duration: {this.props.course.course.days} day(s)</p>
            </div>

            <div>
              <h3>Volunteers</h3>
              <p>
                GDI Coordinator: {this.props.course.coordinator.firstName}{" "}
                {this.props.course.coordinator.lastName}
              </p>
              <p>
                Instructor: {this.props.course.instructor.firstName}{" "}
                {this.props.course.instructor.lastName}
              </p>
              <p>
                Teaching Assistants: {this.props.course.tas[0].firstName}{" "}
                {this.props.course.tas[0].lastName}
              </p>
            </div>

            <div>
              <h3>Location</h3>
              <p>{this.props.course.venue.company}</p>
              <p>{this.props.course.venue.address}</p>
              <p>{this.props.course.venue.address2}</p>
              <a
                href={`https://www.google.com/maps/dir//${
                  this.props.course.venue.address
                }`}
                target="_blank"
              >
                Map to location
              </a>
            </div>
          </div>

          <div className="course-detail-buttons">

            <Link to={`/course-edit/${this.props.course._id}`}>
              <button className="edit-submit-button">Edit</button>
            </Link>
            
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, props) => {
  //console.log(state);
  return {
    course: state.scheduledCourses.selectedCourse
  };
};

export default connect(mapStateToProps)(CourseDetail);
