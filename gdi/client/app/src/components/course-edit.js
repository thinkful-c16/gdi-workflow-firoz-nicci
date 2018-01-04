import React from "react";
import "./course-edit.css";
import Nav from "./nav";
import Form from "./form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CourseEdit extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="course-edit">
          <form role="form">
            <h1>Course Edit</h1>
            <div>
              <label htmlFor="course-name">Course Name:</label>
              <input type="text" id="course-name" name="course"
              size="31" />
            </div>

            <div className="input-icon">
              <label htmlFor="cost">Cost:</label>
              <input type="text" id="cost"
              style={{width: 255}}  />
            </div>

            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date"
              style={{width: 255}}/>
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
                name="instructor"
                className="first-name"
                placeholder="First"
              />
              <input
                type="text"
                name="instructor"
                className="last-name"
                placeholder="Last"
              />
              <input
                type="text"
                name="instructor"
                className="slack-name"
                placeholder="Slack Handle"
              /> */}
            </div>

            <div>
              <label htmlFor="ta-name">TA Name:</label>
              <select name="instructor">
                <option value="">TA1</option>
                <option value="">TA2</option>
                <option value="">TA3</option>
              </select>
              {/* <input
                type="text"
                name="tas"
                className="first-name"
                placeholder="First"
              />
              <input
                type="text"
                name="tas"
                className="last-name"
                placeholder="Last"
              />
              <input
                type="text"
                name="tas"
                className="slack-name"
                placeholder="Slack Handle"
              /> */}
            </div>

            <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <select name="instructor">
                <option value="">Coordinator1</option>
                <option value="">Coordinator2</option>
                <option value="">Coordinator3</option>
              </select>
              {/* <input
                type="text"
                name="coordinator"
                className="first-name"
                placeholder="First"
              />
              <input
                type="text"
                name="coordinator"
                className="last-name"
                placeholder="Last"
              />
              <input
                type="text"
                name="coordinator"
                className="slack-name"
                placeholder="Slack Handle"
              /> */}
            </div>

            <div>
              <label htmlFor="venue">Venue:</label>
              <select name="instructor">
                <option value="">Venue1</option>
                <option value="">Venue2</option>
                <option value="">Venue3</option>
              </select>
              
              {/* <input type="text" id="venue" name="venue" /> */}
            </div>

            <div>
              <label htmlFor="course-description">Description:</label>
              <textarea type="text" id="course-description" />
              <div className="addtl-dates-div">
                <label className="addtl-dates-label">
                  Additonal Class Dates
                </label>
              </div>
            </div>

            <div className="course-detail-buttons">
              {/* <button>Make Live on MeetUp</button> */}
              <button className="edit-submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
