import React from "react";
import "./course-detail.css";
import Nav from "./nav";
import { connect } from "react-redux";
import { fetchScheduledCourses, selectCourse, fetchSingleCourse, meetupApiProxy } from "../actions";
//import Form from './form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import scheduledCourses from "../reducers";

export class CourseDetail extends React.Component {
  componentDidMount() {
    //use if condition if needed with redirect for people trying to access url directly
    //console.log('mounted');
    const courseId = this.props.match.params.id;
    this.props.dispatch(fetchSingleCourse(courseId));
  }

    writeDesc() {
    let text = `<p>This ${this.props.course.course.days}-day ${this.props.course.course.name} course will meet on ${this.props.course.dates[0]} from 9am-4pm. The $${this.props.course.course.price} payment covers the 6 hour class.</p>`

    if(this.props.course.course.name === 'Intro to User Experience (UX)'){
        text += `<p>About the class:</p><p>At its core, User Experience (UX) is defined as how someone feels about using a product, system, or service. Regardless of what we’re designing--a website, an Android app, or a toaster--we all strive to make our designs useful, easy to use, and enjoyable to use. But how exactly do we make something useful, easy to use, and enjoyable? How do we know if the target audience is having a good or bad experience? This class will arm you with the essential tips to find those answers.</p><p>This class is for anyone who makes (or wants to learn how to make) websites, mobile apps, or other software. If you’re a developer, a designer, a project manager, a content creator, or something else, you can integrate UX research and design into your practice.</p><p>By the end of this class, you’ll also learn tips and techniques to address the following:</p><ul><li>Fundamental concepts of user experience design</li><li>How to find out who your users are</li><li>Creating user personas</li><li>Identifying usability problems and prioritizing solutions</li><li>How to design and run usability tests</li><li>Getting useful feedback from your users</li><li>Information Architecture and interaction design</li><li>Where UX fits with project management methodologies</li><li>And more!</li></ul><p>This is a hands on course which will give you actionable tools to get started with user experience in your work day!</p>`;
    } else if (this.props.course.course.name === 'Intro to App Building with Salesforce'){
      text += `<p>Interested in an in-demand career with salaries up to six-figures? The job market for Salesforce professionals is growing, with over 100,000 job openings for Salesforce skills created last year*. In this class, you'll get a crash course in building simple employee-facing business apps that run on both a web browser and a mobile device - without writing any code!</p>

      <p>This is not a sales pitch. We're Salesforce professionals, and we're passionate about bringing diversity to the tech sector and helping women learn about powerful career options.</p>
      
      <p>Whether you’re familiar with Salesforce from your work experience or are just looking for a career in a hot field, join us to learn about app-building on Salesforce.</p>
      
      <p>What this class will cover:</p>
      <ul>
      <li>What is Salesforce and what are the career opportunities for Salesforce Admins and Developers?</li>
      
      <li>App-building concepts including data modeling, user interfaces, business logic, reports, dashboards, and mobile.</li>
      
      <li>Hands-on and guided project building to build a sample app in one day.</li>
      
      <li>Introduction to Trailhead (https://trailhead.salesforce.com/), a fun online learning platform for Salesforce.</li>
      
      <li>Resources for connecting with the Salesforce community (https://success.salesforce.com/).</li>
      </ul>
      
      <p>The tools for learning to develop with Salesforce are free:</p>
      <ul>
      <li>Trailhead (https://developer.salesforce.com/trailhead/), the fun free way to learn Salesforce</li>
      
      <li>Salesforce1 Mobile App (AppStore and Google Play)
      https://www.youtube.com/watch?v=LIefFBi-lHw</li>`;
    } else {
      text+= ``
    }

    text += `<p>Tech Requirements</p><p>Your laptop. Note: A netbook or tablet is NOT a substitute. If you do not have access to a laptop computer, please email atlanta@girldevelopit.com. GDI Atlanta has loaner laptops for those who do not have access to one.</p><p>If you have any questions prior to registering, please contact us at atlanta@girldevelopit.com</p><p>Financial Need:</p><p>A limited number of scholarships are available for those with a financial hardship. To apply, click here (https://docs.google.com/forms/d/1tQeFIvqNbBOtOt2mRJSVQDqOUbz7PFeMJDzq_mKTkT8/viewform?usp=send_form). Scholarship applicants will be notified shortly after the deadline. Class capacity does not impact scholarship students. Check out this info sheet (https://drive.google.com/a/girldevelopit.com/file/d/0B344HUnWO0EhOFI4SmpWVjE2Yms) about getting course fees covered by your employer.</p><p>Refund Policy:<p><p>Your payment of $65 guarantees your seat in the entire course. Please note that we cannot issue refunds, since there's an overhead to issuing refunds via Meetup.com and we already offer the workshops at such a low cost. We put proceeds into the chapter fund, which we use as our scholarship fund.</p><p>Other Disclaimers:</p><p>Our program and curriculum are geared toward adults over the age of 18; at this time we do not accept minors as students in our courses and workshops.</p><p>About the Teacher:</p>${this.props.course.instructor.bio}<p>Teacher Assistants:</p><p>Along with the teacher, the class has Teacher Assistants (TAs). TAs are available during class to help troubleshoot any questions and help with exercises. If you are interested in volunteering as a TA for this class, please email atlanta@girldevelopit.com.</p><p>Thank you to our host of space, ${this.props.course.venue.company} coding bootcamp at Atlanta Tech Village!</p><p>All attendees are expected to abide by the Girl Develop It Code of Conduct (https://www.girldevelopit.com/code-of-conduct)</p>`;

    return text;
    
  }
  

  render(){
    //console.log(this.props.course)

    if(this.props.course._id) {

      return (
        <div>
            <Nav />
          <div className="course-detail">
    
              <h2>{console.log(this.props.course)} {this.props.course.course.name}</h2>
              <h3>{this.props.course.dates[0]}</h3>

              <div>
                <Link to={`/courseEdit/${this.props.course._id}`}>
                  Edit
                </Link>
              </div>


              <div>
                <h3>General Info</h3>
                <p>Fee: {this.props.course.course.price}</p>
                <p>Duration: {this.props.course.course.days} day(s)</p>
              </div>

              <div>
                <h3>Volunteers</h3>
                <p>GDI Coordinator: {this.props.course.coordinator.firstName} {this.props.course.coordinator.lastName} (Slack: @{this.props.course.coordinator.slackHandle})</p>
                <p>Instructor: {this.props.course.instructor.firstName} {this.props.course.instructor.lastName} (Slack: @{this.props.course.instructor.slackHandle})</p>
                <p>Teaching Assistants: {this.props.course.tas[0].firstName} {this.props.course.tas[0].lastName} (Slack: @{this.props.course.tas[0].slackHandle})</p>
              </div>
    
              <div>
                <h3>Location</h3>
                <p>{this.props.course.venue.company}</p>
                <p>{this.props.course.venue.address}</p>
                <p>{this.props.course.venue.address2}</p>
                <a href={`https://www.google.com/maps/dir//${this.props.course.venue.address}`} target="_blank">Map to location</a>
              </div>

              <div>
                <h3>MeetUp Description</h3>

                {/* const finalDesc = {this.writeDesc()}; */}

                <div id="meetup">{this.writeDesc()}</div>

                <p>
                  <a href="" onClick={this.props.dispatch(meetupApiProxy(
                    {
                      text: "<p>This is the desc text</p>"
                    }
                    ))}>Make live on Meetup.com</a>
                </p>

              </div>
          </div>
        </div>
      );

    } else {
      
      return null;

    }


    
}
}

const mapStateToProps = (state, props) => {
  //console.log(state);
  return {
    course: state.scheduledCourses.selectedCourse
  };
};

export default connect(mapStateToProps)(CourseDetail);