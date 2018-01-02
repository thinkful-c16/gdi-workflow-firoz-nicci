import React from "react";
import "./people.css";

export default function People() {
  return (
    <div>
      <div className="people">
        <h1>People</h1>

        <button className="edit-person-button">Edit Person</button>
        <button className="new-person-button">Add New Person</button>
      </div>
    </div>
  );
}
