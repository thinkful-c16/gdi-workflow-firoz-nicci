import React from 'react';
import './course-detail.css';
import Nav from './nav';
import { connect } from 'react-redux';
import {
  fetchScheduledCourses,
  selectCourse,
  fetchScheduledCourse,
} from '../actions';
//import Form from './form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import scheduledCourses from '../reducers';

export class CourseDetail extends React.Component {
  componentDidMount() {
    if (!this.props.course) {
      this._getCourse();
    }
  }

  _getCourse = () => {
    this.props.dispatch(fetchScheduledCourse(this.props.match.params.id));
  };

  render() {
    if (!this.props.course) {
      return <h1>loading....</h1>;
    }
    return (
      <div>
        <Nav />
        <div className="course-detail">
          <form role="form">
            <h1>Course Detail</h1>
            <div>
              <label htmlFor="course-name">Course Name:</label>

              <input
                type="text"
                id="course-name"
                placeholder="Introduction to "
                defaultValue={this.props.course.name}
              />
            </div>

            <div className="input-icon">
              <label htmlFor="cost">Cost:</label>
              <input type="number" id="cost" defaultValue={150} />
            </div>

            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date" />
            </div>

            <div className="teacher-name">
              <label>Teacher Name:</label>
              <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
                defaultValue={`Jane`}
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
                defaultValue={`Teacher`}
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
                defaultValue={`jayeteach`}
              />
            </div>

            <div>
              <label htmlFor="ta-name">TA Name:</label>
              <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
                defaultValue={`Johnny`}
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
                defaultValue={`Walker`}
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
                defaultValue={`jwalker`}
              />
            </div>

            <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <input
                type="text"
                name="firstname"
                className="first-name"
                placeholder="First"
                defaultValue={`Nicci`}
              />
              <input
                type="text"
                name="lasttname"
                className="last-name"
                placeholder="Last"
                defaultValue={`Williams`}
              />
              <input
                type="text"
                name="slack"
                className="slack-name"
                placeholder="Slack Handle"
                defaultValue={`nicciwill`}
              />
            </div>

            <div>
              <label htmlFor="venue">Venue:</label>
              <input type="text" id="venue" defaultValue={`City College`} />
            </div>

            <div>
              <label htmlFor="course-description">Description:</label>
              <textarea
                type="text"
                id="course-description"
                defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, orci sit amet ornare commodo, quam nulla facilisis nisi, ut egestas lectus arcu consequat elit.`}
              />
              <div className="addtl-dates-div">
                <label className="addtl-dates-label">
                  Additonal Class Dates
                </label>
              </div>
            </div>

            <div className="course-detail-buttons">
              <button>Make Live on MeetUp</button>
              <Link to="/courseEdit">
                <button className="align-button">Edit</button>
              </Link>
              <button className="align-button">Delete</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const selectCourseFromState = (id, courses) => {
  if (courses[id] === undefined) {
    return null;
  }
  return courses[id];
};

const mapStateToProps = (state, props) => {
  return {
    course: selectCourseFromState(
      props.match.params.id,
      state.scheduledCoursesMentor,
    ),
  };
};

export default connect(mapStateToProps)(CourseDetail);
