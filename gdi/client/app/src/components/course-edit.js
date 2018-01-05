import React from "react";
import "./course-edit.css";
import Nav from "./nav";
import { connect } from "react-redux";
import { Field, reduxForm, arrayPush, arrayMove } from "redux-form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  editCourse,
  selectCourse,
  fetchSingleCourse,
  fetchPeople
} from "../actions";

export class CourseEdit extends React.Component {
  onEditSubmit = values => {
    // values.dates = values.dates.split(",");
    this.props.dispatch(editCourse(values));
  };

  componentDidMount() {
    const courseId = this.props.match.params.id;
    this.props.dispatch(fetchSingleCourse(courseId));
    this.props.dispatch(fetchPeople());
  }

  onSelect(e) {
    console.log("value here", e.target.value);
  }

  render() {
    //console.log(this.props.singleCourse);
    
    //dynamic course coordinator option
    const courseCoordinator = this.props.people
      .filter(person => person.role.indexOf("Course Coordinator") > -1)
      .map(person => (
        <option key={person.id}>
          {person.firstName} {person.lastName}
        </option>
      ));

    //dynamic course teacher option
    const courseInstructor = this.props.people
      .filter(person => person.role.indexOf("Instructor") > -1)
      .map(person => (
        <option key={person.id}>
          {person.firstName} {person.lastName}
        </option>
      ));

    //dynamic course TA option
    const courseTA = this.props.people
      .filter(person => person.role.indexOf("Teaching Assistant") > -1)
      .map(person => (
        <option key={person.id}>
          {person.firstName} {person.lastName}
        </option>
      ));

    return (
      <div>
        <Nav />
        <div className="course-edit">
          <form
            role="form"
            onSubmit={this.props.handleSubmit(values =>
              this.onEditSubmit(values)
            )}
          >
            <h2>Course Edit</h2>
            <div>
              <label className="label" htmlFor="course-name">
                Course Name:
              </label>

              <Field
                component="select"
                type="text"
                name="course"
                id="course-name"
                onChange={this.onSelect}
              >
                {/* <option>Select one...</option> */}
                <option>{this.props.singleCourse.course.name}</option>
              </Field>
            </div>

            {/* <div className="input-icon">
              <label htmlFor="cost">Cost:</label>
            </div> */}

            <div>
              <label className="label" htmlFor="class-coord">
                Coordinator Name:
              </label>
              <Field
                component="select"
                type="text"
                name="coordinator"
                id="coordinator-name"
              >
                {/* <option>Select One...</option> */}
                <option>
                  {this.props.singleCourse.coordinator.firstName}{" "}
                  {this.props.singleCourse.coordinator.lastName}
                </option>
                {courseCoordinator}
              </Field>
            </div>

            <div className="teacher-name">
              <label className="label">Instructor Name:</label>
              <Field
                component="select"
                type="text"
                name="instructor"
                id="instructor-name"
              >
                <option>
                  {this.props.singleCourse.instructor.firstName}{" "}
                  {this.props.singleCourse.instructor.lastName}
                </option>
                {courseInstructor}
              </Field>
            </div>

            <div>
              <label className="label" htmlFor="ta-name">
                TA Name:
              </label>
              <Field component="select" type="text" name="tas" id="tas-name">
                {/* <option>Select One...</option> */}

                <option>
                  {this.props.singleCourse.tas[0].firstName}{" "}
                  {this.props.singleCourse.tas[0].lastName}
                </option>
                {courseTA}
              </Field>
            </div>

            <div>
              <label className="label" htmlFor="venue-name">
                Venue Name:
              </label>
              <Field
                component="select"
                type="text"
                name="venue"
                id="venue-name"
              >
                {/* <option>Select One...</option> */}
                <option>{this.props.singleCourse.venue.company}</option>
                <option value="5a4d0643c1e8fa67e1151158">
                  CareerBuilder-Norcross Office
                </option>
                <option value="5a4d0643c1e8fa67e115115a">
                  CareerBuilder-Atlanta Office
                </option>
                <option value="5a4d0643c1e8fa67e115115c">eHire</option>
              </Field>
            </div>
            <div>
              <label className="label" htmlFor="start-date">
                Course Dates:
              </label>
              <input type="text" id="start-date" />
            </div>

            <div className="course-detail-buttons">
              <button className="edit-submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CourseEdit.defaultProps = {
  singleCourse: {
    course: { name: "" },
    instructor: {
      firstName: "",
      lastName: ""
    },
    coordinator: {
      firstName: "",
      lastName: ""
    },
    venue: { company: "" },
    tas: [
      {
        firstName: "",
        lastName: ""
      }
    ],
    dates: []
  }
};

const courseEdit = reduxForm({
  form: "courseEdit"
})(CourseEdit);

const mapStateToProps = (state, props) => {
  // console.log(state);
  return {
    singleCourse: state.scheduledCourses.selectedCourse,
    people: state.scheduledCourses.people
  };
};

export default connect(mapStateToProps)(courseEdit);
