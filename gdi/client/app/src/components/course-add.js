import React from "react";
import "./course-add.css";
import Nav from "./nav";
import Form from "./form";
import { Field, reduxForm } from "redux-form";
import { addNewCourse } from "../actions";

class CourseAdd extends React.Component {
  onSubmit = values => {
    // console.log(values);
    // console.log(values.dates.split(","));
    values.dates = values.dates.split(",");
    this.props.dispatch(addNewCourse(values));
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="course-add">
          <form
            role="form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {/* <fieldset className="course-inputs"> */}
            <h2>Schedule New Course</h2>
            <div>
              <label htmlFor="course-name">Course Name:</label>
              <Field
                component="select"
                type="text"
                name="course"
                id="course-name"
              >
                <option>Select One...</option>
                <option value="5a4d0096c1e8fa67e1151049">
                  Intro to JavaScript (JS)
                </option>
                <option value="5a4d015ec1e8fa67e115108b">
                  Intro to HTML/CSS
                </option>
                <option value="5a4d0139c1e8fa67e115107b">
                  Intro Salesforce App Dev
                </option>
                <option value="5a4d0151c1e8fa67e1151087">Intro SQL</option>
              </Field>
            </div>

            <div>
              <label htmlFor="coordinator-name">Coordinator Name:</label>
              <Field
                component="select"
                type="text"
                name="coordinator"
                id="coordinator-name"
              >
                <option>Select One...</option>
                <option value="5a4d0692c1e8fa67e115116c">Nicci</option>
                <option value="5a4d0692c1e8fa67e1151172">Marcy</option>
                <option value="5a4d0692c1e8fa67e1151174">Megan</option>
              </Field>
            </div>

            <div>
              <label htmlFor="instructor-name">Instructor Name:</label>
              <Field
                component="select"
                type="text"
                name="instructor"
                id="instructor-name"
              >
                <option>Select One...</option>
                <option value="5a4d0692c1e8fa67e115116e">Michelle</option>
                <option value="5a4d0692c1e8fa67e1151170">Angel</option>
                <option value="5a4d0692c1e8fa67e115117a">Solomon</option>
              </Field>
            </div>

            <div>
              <label htmlFor="tas-name">TA Name:</label>
              <Field component="select" type="text" name="tas" id="tas-name">
                <option>Select One...</option>
                <option value="5a4d0692c1e8fa67e1151176">Laura</option>
                <option value="5a4d0692c1e8fa67e1151178">Bernadette</option>
              </Field>
            </div>

            <div>
              <label htmlFor="venue-name">Venue Name:</label>
              <Field
                component="select"
                type="text"
                name="venue"
                id="venue-name"
              >
                <option>Select One...</option>
                <option value="5a4d0643c1e8fa67e1151156">Digital Crafts</option>
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
              <label htmlFor="dates">Course Dates:</label>
              <Field component="input" type="text" name="dates" id="dates" />
            </div>

            <div className="course-detail-buttons">
              <button>Make Live on MeetUp</button>
              <button className="submit-button">Submit</button>
            </div>

            {/* </fieldset> */}
          </form>
        </div>
      </div>
    );
  }
}

const courseAddForm = reduxForm({
  form: "course-add"
})(CourseAdd);

export default courseAddForm;
