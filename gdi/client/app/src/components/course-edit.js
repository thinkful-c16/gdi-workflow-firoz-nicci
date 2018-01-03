import React from "react";
import "./course-edit.css";
import Nav from "./nav";
import Form from './form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CourseEdit extends React.Component {
  render(){
    return (
    <div>
      <Nav />
      <div className="course-edit">
        
          <form role="form">
            
              <h1>Course Edit</h1>
              <div>
                <label htmlFor="course-name">Course Name:</label>
                <input type="text" id="course-name" />
              </div>
              
              <div className="input-icon">
                <label htmlFor="cost">Cost:</label>
                <input type="number" id="cost" />
              </div>

              <div>
                <label htmlFor="start-date">Start Date:</label>
                <input type="date" id="start-date" />
              </div>

  
              <div className="teacher-name">
                <label>Teacher Name:</label>
                <input type="text" name="firstname"  className="first-name" placeholder="First"/>
                <input type="text" name="lasttname" className="last-name" placeholder="Last"/>
                <input type="text" name="slack" className="slack-name" placeholder="Slack Handle"/>
              </div>

              <div>
                <label htmlFor="ta-name">TA Name:</label>
                <input type="text" name="firstname"  className="first-name" placeholder="First"/>
                <input type="text" name="lasttname" className="last-name" placeholder="Last" />
                <input type="text" name="slack" className="slack-name" placeholder="Slack Handle"/>
              </div>

              <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <input type="text" name="firstname" className="first-name" placeholder="First" />
              <input type="text" name="lasttname" className="last-name" placeholder="Last" />
              <input type="text" name="slack" className="slack-name" placeholder="Slack Handle"/>
              </div>

              <div>
                <label htmlFor="venue">Venue:</label>
                <input type="text" id="venue" />
              </div>
              
              <div>
                <label htmlFor="course-description">Description:</label>
                <textarea type="text" id="course-description" />
                  <div className="addtl-dates-div">
                    <label className="addtl-dates-label">Additonal Class Dates</label>
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

