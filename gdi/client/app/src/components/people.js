import React from "react";
import "./people.css";

export default function People() {
  return (
    <div>
      <div className="home-page">
        <div>
          <h1>People</h1>
        </div>

        <div className="search">
          <label className="home-labels">Search People</label>
          <input type="text" placeholder=" Peter Pickles" />

          <p>Person search results here</p>
        </div>

        <div className="people-buttons">
          <button className="edit-person">Edit Person</button>
          <button>Add New Person</button>
        </div>
      </div>
    </div>
  );
}
