//import React, { ScheduledCourses, People, Venues } from 'react';

import React from "react";
import ScheduledCourses from "./scheduled-courses";
import People from "./people";
import Venues from "./venues";
import CourseEdit from "./course-edit";
import CourseDetail from "./course-detail";
import CourseAdd from "./course-add";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={ScheduledCourses} />
          <Route exact path="/" component={People} />
          <Route exact path="/" component={Venues} />
          <Route exact path="/course-detail/:id" component={CourseDetail} />
          <Route exact path="/courseEdit" component={CourseEdit} />
          <Route exact path="/courseAdd" component={CourseAdd} />
        </div>
      </Router>
    );
  }
}
