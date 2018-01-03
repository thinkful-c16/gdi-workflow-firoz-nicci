import React from "react";
import "./venues.css";

export default function Venues() {
  return (
    <div>
      <div className="home-page">
        <div>
          <h1>Venues</h1>
        </div>

        <div className="search">
          <label>Search Venues</label>
          <input type="text" placeholder=" Georgia Aquarium" />

          <p>Venue search results here</p>
        </div>

        <div className="venue-buttons">
          <button className="edit-venue">Edit Venue</button>
          <button>Add New Venue</button>
        </div>
      </div>
    </div>
  );
}
