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
<<<<<<< HEAD
          <Route exact path="/course-detail/:id" component={CourseDetail} />
          <Route exact path="/course-edit/:id" component={CourseEdit} />
          <Route exact path="/course-add" component={CourseAdd} />
=======
          <Route exact path="/courseDetail/:id" component={CourseDetail} />
          <Route exact path="/courseEdit/:id" component={CourseEdit} />
          <Route exact path="/courseAdd" component={CourseAdd} />
>>>>>>> 0b07c36395eb1a994f913bf36b6b10cc160a6a21
        </div>
      </Router>
    );
  }
}
