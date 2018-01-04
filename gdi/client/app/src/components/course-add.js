import React from "react";
import "./course-add.css";
import Nav from "./nav";
import Form from './form';
import { Field, reduxForm } from 'redux-form';
import { addNewCourse } from '../actions';

class CourseAdd extends React.Component {

  onSubmit = values => {
    console.log(values);
    this.props.dispatch(addNewCourse());
  }

  render(){
    
  return (
    <div>
      <Nav />
      <div className="course-add">
        
          <form role="form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )}>
            {/* <fieldset className="course-inputs"> */}
              <h1>Schedule New Course</h1>
              <div>
                <label htmlFor="course-name">Course Name:</label>
                <Field component="select" type="text" name="course" id="course-name" >
                  <option>Select One...</option>
                  <option value="5a4d0096c1e8fa67e1151049">Intro to JavaScript (JS)</option>
                  <option value="5a4d015ec1e8fa67e115108b">Intro to HTML/CSS</option>
                  <option value="5a4d0139c1e8fa67e115107b">Intro Salesforce App Dev</option>
                  <option value="5a4d0151c1e8fa67e1151087">Intro SQL</option>
                </Field>
              </div>
              
              {/* <div className="input-icon">
                <label htmlFor="cost">Cost:</label>
                <Field component="input" type="number" id="cost" />
              </div>

              <div>
                <label htmlFor="start-date">Start Date:</label>
                <Field component="input" type="date" id="start-date" />
              </div>

  
              <div className="teacher-name">
                <label>Teacher Name:</label>
                <Field component="input" type="text" name="firstName"  className="first-name" placeholder="First"/>
                <Field component="input" type="text" name="lastName" className="last-name" placeholder="Last"/>
                <Field component="input" type="text" name="slack" className="slack-name" placeholder="Slack Handle"/>
              </div>

              <div>
                <label htmlFor="ta-name">TA Name:</label>
                <Field component="input" type="text" name="firstName"  className="first-name" placeholder="First"/>
                <Field component="input" type="text" name="lastName" className="last-name" placeholder="Last" />
                <Field component="input" type="text" name="slack" className="slack-name" placeholder="Slack Handle"/>
              </div>

              <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <Field component="input" type="text" name="firstName" className="first-name" placeholder="First" />
              <Field component="input" type="text" name="lastName" className="last-name" placeholder="Last" />
              <Field component="input" type="text" name="slack" className="slack-name" placeholder="Slack Handle"/>
              </div>

              <div>
                <label htmlFor="venue">Venue:</label>
                <Field component="input" type="text" id="venue" />
              </div>
              
              <div>
                <label htmlFor="course-description">Description:</label>
                <textarea type="text" id="course-description" />
                  <div className="addtl-dates-div">
                    <label className="addtl-dates-label">Additonal Class Dates</label>
                  </div>
              </div> */}


            <div className="course-detail-buttons">
              <button>Make Live on MeetUp</button>
              <button className="edit-submit-button">Submit</button>
              
            </div>    

            {/* </fieldset> */}
          </form>
          
        
      </div>
    </div>
  );
}
}

const courseAddForm = reduxForm({
  form: 'courseAdd'
})(CourseAdd);

export default courseAddForm;

