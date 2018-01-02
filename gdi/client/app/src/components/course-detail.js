import React from "react";
import "./course-detail.css";

export default function CourseDetail() {
  return (
    <div>
      <div className="course-detail">
        <h1>Course Detail</h1>
        <div className="course-inputs">
          <form role="form">
            <fieldset className="course-inputs">
              <div>
                <label htmlFor="course-name">Course Name:</label>
                <input type="text" id="course-name" />
              </div>
              
              <div className="teacher-name">
              
              <label>Teacher Name:</label>
              
              <input type="text" name="firstname"  className="first-name" placeholder="First"/>
              <input type="text" name="lasttname" className="last-name" placeholder="Last"/>
              </div>

              <div>
                <label htmlFor="ta-name">TA Name:</label>
                <input type="text" name="firstname"  className="first-name" placeholder="First"/>
                <input type="text" name="lasttname" className="last-name" placeholder="Last" />
              </div>

              <label htmlFor="class-coord">Class Coord.:</label>
              <input type="text" id="class-coord" />
              <div>
                <label htmlFor="venue">Venue:</label>
                <input type="text" id="venue" />
              </div>
              <div>
                <label htmlFor="course-description">Description:</label>
                <input type="text" id="course-description" />
              </div>
            </fieldset>
          </form>
          <div className="course-detail-buttons" />
        </div>
      </div>
    </div>
  );
}

//slack handle