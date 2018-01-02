import React from "react";
import "./nav.css";
export default function Nav() {
  return (
    <div>
      <ul className="nav">
        <li>
          <a href="default.asp">Courses</a>
        </li>
        <li>
          <a href="news.asp">People</a>
        </li>
        <li>
          <a href="contact.asp">Venues</a>
        </li>
      </ul>
    </div>
  );
}
