import React from "react";
import "./scheduled-courses.css";

export default function ScheduledCourses() {
  return (
    <div>
      <div className="scheduled-courses">
        <h1>ScheduledCourses </h1>
        <ul>
          <li>Course1, date/time, MeetUp link</li>
          <li>Course2, date/time, MeetUp link</li>
          <li>Course3, date/time, MeetUp link</li>
          <li>Course4, date/time, MeetUp link</li>
        </ul>
        <button className="new-course-button">Add New Course</button>
      </div>
    </div>
  );
}
