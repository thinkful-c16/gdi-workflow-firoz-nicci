import React from "react";
import "./course-detail.css";
import Nav from "./nav";
import Input from './input';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CourseDetail extends React.Component {
  render(){
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
                placeholder="Introduction to JavaScript"
                value={'Intro to JavaScript'}
                
                />
              </div>
              
              <div className="input-icon">
                <label htmlFor="cost">Cost:</label>
                <input type="number" id="cost" 
                value={150}/>
              </div>

              <div>
                <label htmlFor="start-date">Start Date:</label>
                <input type="date" id="start-date"
                 />
              </div>

  
              <div className="teacher-name">
                <label>Teacher Name:</label>
                <input type="text" name="firstname"  className="first-name" placeholder="First"
                 value={`Jane`}
                  />
                <input type="text" name="lasttname" className="last-name" placeholder="Last"
                value={`Teacher`}/>
                <input type="text" name="slack" className="slack-name" placeholder="Slack Handle"
                value={`jayeteach`}/>
              </div>

              <div>
                <label htmlFor="ta-name">TA Name:</label>
                <input type="text" name="firstname"  className="first-name" placeholder="First"
                value={`Johnny`}/>
                <input type="text" name="lasttname" className="last-name" placeholder="Last" 
                value={`Walker`}/>
                <input type="text" name="slack" className="slack-name" placeholder="Slack Handle"
                value={`jwalker`}/>
              </div>

              <div>
              <label htmlFor="class-coord">Class Coord.:</label>
              <input type="text" name="firstname" className="first-name" placeholder="First" 
              value={`Nicci`}/>
              <input type="text" name="lasttname" className="last-name" placeholder="Last" 
              value={`Williams`}/>
              <input type="text" name="slack" className="slack-name" placeholder="Slack Handle"
              value={`nicciwill`}/>
              </div>

              <div>
                <label htmlFor="venue">Venue:</label>
                <input type="text" id="venue" 
                value={`City College`}/>
              </div>
              
              <div>
                <label htmlFor="course-description">Description:</label>
                <textarea type="text" id="course-description" 
                value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, orci sit amet ornare commodo, quam nulla facilisis nisi, ut egestas lectus arcu consequat elit.`}/>
                  <div className="addtl-dates-div">
                    <label className="addtl-dates-label">Additonal Class Dates</label>
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

