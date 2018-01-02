//import React, { ScheduledCourses, People, Venues } from 'react';

import React from "react";
import ScheduledCourses from "./scheduled-courses";
import People from "./people";
import Venues from "./venues";

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <ScheduledCourses />
        <People />
        <Venues />
      </div>
    );
  }
}
