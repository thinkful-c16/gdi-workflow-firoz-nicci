import React from "react";
import "./course-detail.css";
import Nav from "./nav";
import { connect } from "react-redux";
import { fetchScheduledCourses, selectCourse, editCourse } from "../actions";
//import Form from './form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import scheduledCourses from "../reducers";

export class CourseDetail extends React.Component {
  componentDidMount() {
    //use if condition if needed with redirect for people trying to access url directly
  }

  // clickEdit(course) {
  //   console.log(course);
  //   this.props.dispatch(editCourse(course));
  //   this.props.history.push("/course-edit");
  // }

  render() {
    console.log(this.props.course);
    const courseVal = this.props.course;
    return (
      <div>
        <Nav />
        <div className="course-detail">
          <form role="form">
            <h2>Course Detail</h2>
            <div>
              <label htmlFor="course-name">Course Name:</label>

              <input
                type="text"
                id="course-name"
                placeholder="Introduction to JS"
                size="35"
                defaultValue={courseVal.course.name}
              />
            </div>

            <div className="input-icon">
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                id="cost"
                defaultValue={courseVal.course.price}
              />
            </div>

            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date" />
            </div>

            <div className="teacher-name">
              <label>Teacher Name:</label>
              <select name="instructor">
                <option value="">
                  {courseVal.instructor.firstName}{" "}
                  {courseVal.instructor.lastName}
                </option>
                <option value="">Teacher2</option>
                <option value="">Teacher3</option>
              </select>

              {/* <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
                defaultValue={courseVal.instructor.firstName}
              /> */}
              {/* <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
                defaultValue={courseVal.instructor.lastName}
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
                defaultValue={courseVal.instructor.slackHandle}
              /> */}
            </div>

            <div>
              <label htmlFor="ta-name">TA Name:</label>
              <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
                defaultValue={courseVal.tas[0].firstName}
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
                defaultValue={courseVal.tas[0].lastName}
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
                defaultValue={courseVal.tas[0].slackHandle}
              />
            </div>

            <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
                defaultValue={courseVal.coordinator.firstName}
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
                defaultValue={courseVal.coordinator.lastName}
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
                defaultValue={courseVal.coordinator.slackHandle}
              />
            </div>

            <div>
              <label htmlFor="venue">Venue:</label>
              <input
                type="text"
                id="venue"
                size="35"
                defaultValue={courseVal.venue.company}
              />
            </div>

            <div>
              <label htmlFor="course-description">Description:</label>
              <textarea
                type="text"
                id="course-description"
                defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, orci sit amet ornare commodo, quam nulla facilisis nisi, ut egestas lectus arcu consequat elit.`}
              />
              <div className="addtl-dates-div">
                <label className="addtl-dates-label">
                  {/* Additonal Class Dates */}
                </label>
              </div>
            </div>

            <div className="course-detail-buttons">
              <button>Make Live on MeetUp</button>
              <Link to="/course-edit">
                <button className="align-button">Edit</button>
              </Link>
              <button className="align-button">Delete</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    course: state.selectedCourse
  };
};

export default connect(mapStateToProps)(CourseDetail);
