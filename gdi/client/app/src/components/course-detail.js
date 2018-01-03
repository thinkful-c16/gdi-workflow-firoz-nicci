import React from "react";
import "./course-detail.css";
import Nav from "./nav";

export default class CourseDetail extends React.Component {
  render(){
  return (
    <div>
      <Nav />
      <div className="course-detail">
        
          <form role="form">
            <fieldset className="course-inputs">
              <h1>Course Detail</h1>
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
                <input type="text" id="course-description" />
                  <div className="dates-div">
                    <label className="dates-label">Additonal Class Dates</label>
                  </div>
              </div>


            <div className="course-detail-buttons">
              <button>Make Live on MeetUp</button>
              <button className="align-button">Edit</button>
              <button className="align-button">Delete</button>
            </div>    

            </fieldset>
          </form>
          
        
      </div>
    </div>
  );
}
}

