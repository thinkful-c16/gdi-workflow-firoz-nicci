import React from "react";
import "./nav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/venues">Venues</Link>
        </li>
      </ul>
    </div>
  );
}
