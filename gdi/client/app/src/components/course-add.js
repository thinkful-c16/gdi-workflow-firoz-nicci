import React from "react";
import "./course-add.css";
import Nav from "./nav";
import Form from "./form";

export default class CourseAdd extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="course-add">
          <form role="form">
            {/* <fieldset className="course-inputs"> */}
            <h2>Schedule New Course</h2>
            <div>
              <label htmlFor="course-name">Course Name:</label>
              <select name="course">
                <option value="">Course1</option>
                <option value="">Course1</option>
                <option value="">Course1</option>
              </select>
              {/* <input type="text" id="course-name" /> */}
            </div>

            <div className="input-icon">
              <label htmlFor="cost">Cost:</label>
              <input type="number" id="cost" style={{ width: 255 }} />
            </div>

            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date" style={{ width: 255 }} />
            </div>

            <div className="teacher-name">
              <label>Teacher Name:</label>
              <select name="instructor">
                <option value="">Teacher1</option>
                <option value="">Teacher2</option>
                <option value="">Teacher3</option>
              </select>
              {/* <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
              /> */}
            </div>

            <div>
              <label htmlFor="ta-name">TA Name:</label>
              <select name="tas">
                <option value="">TA1</option>
                <option value="">TA2</option>
                <option value="">TA3</option>
              </select>
              {/* <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
              /> */}
            </div>

            <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <select name="Coordinator">
                <option value="">Coordinator1</option>
                <option value="">Coordinator2</option>
                <option value="">Coordinator3</option>
              </select>
              {/* <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
              /> */}
            </div>

            <div>
              <label htmlFor="venue">Venue:</label>
              <select name="venue">
              <option value="">Venue1</option>
                <option value="">Venue2</option>
                <option value="">Venue3</option>
              </select>
              {/* <input type="text" id="venue" /> */}
            </div>

            <div>
              <label htmlFor="course-description">Description:</label>
              <textarea type="text" id="course-description" />
              <div className="addtl-dates-div">
                <label className="addtl-dates-label">
                  {/* Additonal Class Dates */}
                </label>
              </div>
            </div>

            <div className="course-detail-buttons">
              <button>Make Live on MeetUp</button>
              <button className="edit-submit-button">Submit</button>
            </div>

            {/* </fieldset> */}
          </form>
        </div>
      </div>
    );
  }
}
