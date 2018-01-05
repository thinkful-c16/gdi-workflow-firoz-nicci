import React from "react";
import "./course-detail.css";
import Nav from "./nav";
import { connect } from "react-redux";
// import {
//   fetchScheduledCourses,
//   selectCourse,
//   fetchSingleCourse,
//   editCourse
// } from "../actions";
import { fetchScheduledCourses, selectCourse, fetchSingleCourse, meetupApiProxy } from "../actions";
//import Form from './form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import scheduledCourses from "../reducers";
import moment from 'moment';

export class CourseDetail extends React.Component {
  componentDidMount() {
    //use if condition if needed with redirect for people trying to access url directly
    //console.log('mounted');
    const courseId = this.props.match.params.id;
    this.props.dispatch(fetchSingleCourse(courseId));
  }

  // clickEdit(course) {
  //   this.props.dispatch(editCourse(course));
  // }
  writeDesc() {
    if(this.props.course.course.name === 'Intro to User Experience (UX)'){
				let text = (
					<div>
						<p>This {this.props.course.course.days}-day {this.props.course.course.name} course will meet on {moment(this.props.course.dates[0]).format('dddd, MMMM Do YYYY')} from 9am-4pm. The $ {this.props.course.course.price} payment covers the 6 hour class.</p>
						
						<p className="title">About the class:</p><p>At its core, User Experience (UX) is defined as how someone feels about using a product, system, or service. Regardless of what we’re designing--a website, an Android app, or a toaster--we all strive to make our designs useful, easy to use, and enjoyable to use. But how exactly do we make something useful, easy to use, and enjoyable? How do we know if the target audience is having a good or bad experience? This class will arm you with the essential tips to find those answers.</p><p>This class is for anyone who makes (or wants to learn how to make) websites, mobile apps, or other software. If you’re a developer, a designer, a project manager, a content creator, or something else, you can integrate UX research and design into your practice.</p><p>By the end of this class, you’ll also learn tips and techniques to address the following:</p><ul><li>Fundamental concepts of user experience design</li><li>How to find out who your users are</li><li>Creating user personas</li><li>Identifying usability problems and prioritizing solutions</li><li>How to design and run usability tests</li><li>Getting useful feedback from your users</li><li>Information Architecture and interaction design</li><li>Where UX fits with project management methodologies</li><li>And more!</li></ul><p>This is a hands on course which will give you actionable tools to get started with user experience in your work day!</p>

						<p className="title">Tech Requirements</p><p>Your laptop. Note: A netbook or tablet is NOT a substitute. If you do not have access to a laptop computer, please email atlanta@girldevelopit.com. GDI Atlanta has loaner laptops for those who do not have access to one.</p><p>If you have any questions prior to registering, please contact us at atlanta@girldevelopit.com</p><p className="title">Financial Need:</p><p>A limited number of scholarships are available for those with a financial hardship. To apply, <a href="https://docs.google.com/forms/d/1tQeFIvqNbBOtOt2mRJSVQDqOUbz7PFeMJDzq_mKTkT8/viewform?usp=send_form" target="_blank">click here</a>. Scholarship applicants will be notified shortly after the deadline. Class capacity does not impact scholarship students. Check out <a href="https://drive.google.com/a/girldevelopit.com/file/d/0B344HUnWO0EhOFI4SmpWVjE2Yms" target="_blank">this info sheet</a> about getting course fees covered by your employer.</p><p className="title">Refund Policy:</p><p>Your payment of $65 guarantees your seat in the entire course. Please note that we cannot issue refunds, since there's an overhead to issuing refunds via Meetup.com and we already offer the workshops at such a low cost. We put proceeds into the chapter fund, which we use as our scholarship fund.</p><p>Other Disclaimers:</p><p>Our program and curriculum are geared toward adults over the age of 18; at this time we do not accept minors as students in our courses and workshops.</p><p className="title">About the Teacher:</p>{this.props.course.instructor.bio}<p className="title">Teacher Assistants:</p><p>Along with the teacher, the class has Teacher Assistants (TAs). TAs are available during class to help troubleshoot any questions and help with exercises. If you are interested in volunteering as a TA for this class, please email atlanta@girldevelopit.com.</p><p>Thank you to our host of space, {this.props.course.venue.company} coding bootcamp at Atlanta Tech Village!</p><p>All attendees are expected to abide by the <a href="https://www.girldevelopit.com/code-of-conduct" target="_blank">Girl Develop It Code of Conduct</a></p>
					</div>
        )
      
      return text;
    } 
    else if (this.props.course.course.name === 'Intro to App Building with Salesforce') {
      let text = (
			  <div>
						<p>This {this.props.course.course.days}-day {this.props.course.course.name} course will meet on {moment(this.props.course.dates[0]).format('dddd, MMMM Do YYYY')} from 9am-4pm. The $ {this.props.course.course.price} payment covers the 6 hour class.</p>
						
						<p className="title">About the class:</p><p>Interested in an in-demand career with salaries up to six-figures? The job market for Salesforce professionals is growing, with over 100,000 job openings for Salesforce skills created last year*. In this class, you'll get a crash course in building simple employee-facing business apps that run on both a web browser and a mobile device - without writing any code!</p><p>This is not a sales pitch. We're Salesforce professionals, and we're passionate about bringing diversity to the tech sector and helping women learn about powerful career options.</p><p>Whether you’re familiar with Salesforce from your work experience or are just looking for a career in a hot field, join us to learn about app-building on Salesforce.</p><p className="title">What this class will cover:</p><ul><li>What is Salesforce and what are the career opportunities for Salesforce Admins and Developers?</li><li>App-building concepts including data modeling, user interfaces, business logic, reports, dashboards, and mobile.</li><li>Hands-on and guided project building to build a sample app in one day.</li><li><a href="https://trailhead.salesforce.com/" target="_blank">Introduction to Trailhead</a>, a fun online learning platform for Salesforce.</li><li>Resources for connecting with the <a href="https://success.salesforce.com/" target="_blank">Salesforce community</a>.</li></ul><p>The tools for learning to develop with Salesforce are free:</p><ul><li><a href="https://developer.salesforce.com/trailhead/" target="_blank">Trailhead</a>, the fun free way to learn Salesforce</li><li><a href="https://www.youtube.com/watch?v=LIefFBi-lHw" target="_blank">Salesforce1 Mobile App (AppStore and Google Play)</a></li></ul><p className="title">Prerequisites:</p><p>Students should be fairly familiar with using web and mobile applications and Googling for answers to all of life’s questions. You do not need any prior Salesforce experience.</p>

						<p className="title">Tech Requirements</p><p>Your laptop. Note: A netbook or tablet is NOT a substitute. If you do not have access to a laptop computer, please email atlanta@girldevelopit.com. GDI Atlanta has loaner laptops for those who do not have access to one.</p><p>If you have any questions prior to registering, please contact us at atlanta@girldevelopit.com</p><p className="title">Financial Need:</p><p>A limited number of scholarships are available for those with a financial hardship. To apply, <a href="https://docs.google.com/forms/d/1tQeFIvqNbBOtOt2mRJSVQDqOUbz7PFeMJDzq_mKTkT8/viewform?usp=send_form" target="_blank">click here</a>. Scholarship applicants will be notified shortly after the deadline. Class capacity does not impact scholarship students. Check out this <a href="https://drive.google.com/a/girldevelopit.com/file/d/0B344HUnWO0EhOFI4SmpWVjE2Yms) about getting course fees covered by your employer.</p><p>Refund Policy:</p><p>Your payment of $65 gua" target="_blank">info sheet</a> (rantees your seat in the entire course. Please note that we cannot issue refunds, since there's an overhead to issuing refunds via Meetup.com and we already offer the workshops at such a low cost. We put proceeds into the chapter fund, which we use as our scholarship fund.</p><p className="title">Other Disclaimers:</p><p>Our program and curriculum are geared toward adults over the age of 18; at this time we do not accept minors as students in our courses and workshops.</p><p className="title">About the Teacher:</p>{this.props.course.instructor.bio}<p className="title">Teacher Assistants:</p><p>Along with the teacher, the class has Teacher Assistants (TAs). TAs are available during class to help troubleshoot any questions and help with exercises. If you are interested in volunteering as a TA for this class, please email atlanta@girldevelopit.com.</p><p>Thank you to our host of space, {this.props.course.venue.company} coding bootcamp at Atlanta Tech Village!</p><p>All attendees are expected to abide by the <a href="https://www.girldevelopit.com/code-of-conduct" target="_blank">Girl Develop It Code of Conduct</a></p>
          </div>
        )
        return text;
    }
  }

  writeMeetupDesc() {
    return `<p>This ${this.props.course.course.days}-day ${this.props.course.course.name} course will meet on ${moment(this.props.course.dates[0]).format('dddd, MMMM Do YYYY')} from 9am-4pm. The $${this.props.course.course.price} payment covers the 6 hour class.</p>
    <p className="title">About the class:</p><p>Interested in an in-demand career with salaries up to six-figures? The job market for Salesforce professionals is growing, with over 100,000 job openings for Salesforce skills created last year*. In this class, you'll get a crash course in building simple employee-facing business apps that run on both a web browser and a mobile device - without writing any code!</p><p>This is not a sales pitch. We're Salesforce professionals, and we're passionate about bringing diversity to the tech sector and helping women learn about powerful career options.</p><p>Whether you’re familiar with Salesforce from your work experience or are just looking for a career in a hot field, join us to learn about app-building on Salesforce.</p><p className="title">What this class will cover:</p><ul><li>What is Salesforce and what are the career opportunities for Salesforce Admins and Developers?</li><li>App-building concepts including data modeling, user interfaces, business logic, reports, dashboards, and mobile.</li><li>Hands-on and guided project building to build a sample app in one day.</li><li><a href="https://trailhead.salesforce.com/" target="_blank">Introduction to Trailhead</a>, a fun online learning platform for Salesforce.</li><li>Resources for connecting with the <a href="https://success.salesforce.com/" target="_blank">Salesforce community</a>.</li></ul><p>The tools for learning to develop with Salesforce are free:</p><ul><li><a href="https://developer.salesforce.com/trailhead/" target="_blank">Trailhead</a>, the fun free way to learn Salesforce</li><li><a href="https://www.youtube.com/watch?v=LIefFBi-lHw" target="_blank">Salesforce1 Mobile App (AppStore and Google Play)</a></li></ul><p className="title">Prerequisites:</p><p>Students should be fairly familiar with using web and mobile applications and Googling for answers to all of life’s questions. You do not need any prior Salesforce experience.</p><p className="title">Tech Requirements</p><p>Your laptop. Note: A netbook or tablet is NOT a substitute. If you do not have access to a laptop computer, please email atlanta@girldevelopit.com. GDI Atlanta has loaner laptops for those who do not have access to one.</p><p>If you have any questions prior to registering, please contact us at atlanta@girldevelopit.com</p><p className="title">Financial Need:</p><p>A limited number of scholarships are available for those with a financial hardship. To apply, <a href="https://docs.google.com/forms/d/1tQeFIvqNbBOtOt2mRJSVQDqOUbz7PFeMJDzq_mKTkT8/viewform?usp=send_form" target="_blank">click here</a>. Scholarship applicants will be notified shortly after the deadline. Class capacity does not impact scholarship students. Check out this <a href="https://drive.google.com/a/girldevelopit.com/file/d/0B344HUnWO0EhOFI4SmpWVjE2Yms) about getting course fees covered by your employer.</p><p>Refund Policy:</p><p>Your payment of $65 gua" target="_blank">info sheet</a> (rantees your seat in the entire course. Please note that we cannot issue refunds, since there's an overhead to issuing refunds via Meetup.com and we already offer the workshops at such a low cost. We put proceeds into the chapter fund, which we use as our scholarship fund.</p><p className="title">Other Disclaimers:</p><p>Our program and curriculum are geared toward adults over the age of 18; at this time we do not accept minors as students in our courses and workshops.</p><p className="title">About the Teacher:</p>${this.props.course.instructor.bio}<p className="title">Teacher Assistants:</p><p>Along with the teacher, the class has Teacher Assistants (TAs). TAs are available during class to help troubleshoot any questions and help with exercises. If you are interested in volunteering as a TA for this class, please email atlanta@girldevelopit.com.</p><p>Thank you to our host of space, ${this.props.course.venue.company} coding bootcamp at Atlanta Tech Village!</p><p>All attendees are expected to abide by the <a href="https://www.girldevelopit.com/code-of-conduct" target="_blank">Girl Develop It Code of Conduct</a></p>
    `;
  }
  
  sendProxy(){
    const finalDesc = this.writeMeetupDesc();
    console.log(finalDesc);
    const hours = 4;
    const milli = (hours * 3600000);
    this.props.dispatch(meetupApiProxy(
      {
        description: finalDesc,
        duration: milli,
        name: this.props.course.course.name
      }
      ))
  }

  render() {
    if (this.props.course._id) {

      return (
        <div>
          <Nav />
          <div className="wrapper">
            <div className="course-detail">
              <h2>
                {console.log(this.props.course.dates)} {this.props.course.course.name}
              </h2>
              <h4>{moment(this.props.course.dates[0]).format('dddd, MMMM Do YYYY')}</h4>

              <div>
                <Link to={`/courseEdit/${this.props.course._id}`}>
                  Edit This Course
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
                <a
                  href={`https://www.google.com/maps/dir//${
                    this.props.course.venue.address
                  }`}
                  target="_blank">Map to location</a>
              </div>
              
            </div>

              <div className="course-detail">
                <h3>Meetup Description</h3>

                <div id="meetup">
                  {this.writeDesc()}
                </div>

                {/* {document.getElementById("meetup").innerHTML = this.writeDesc()} */}

                <div>
                  <a href="" onClick={this.sendProxy()}>Make live on Meetup.com</a>
                </div>

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
