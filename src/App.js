import React from 'react';
import "./App.css";
import Pictures from './Picture';

const App = () => {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <img src="https://www.collegedisha.com/assets/images/college-dishalogo.svg" alt="img" />
        </div>
        <div className="center-header">
          <div>
            <p>Why College Disha</p>
          </div>
          <div>
            <p>Colleges By Stream</p>
          </div>
          <div>
            <p>Admission 2021</p>
          </div>
          <div>
            <p>Explore</p>
          </div>
          <div>
            <p>Plans</p>
          </div>
        </div>
        <div className="right-header">
          <div className="header-icon">
            <i class="fa fa-search"></i>
          </div>
          <div className="login">
            <div className="locker">
              <i class="fa fa-lock"></i>
            </div>
            <div>
              <p>Login /</p>
            </div>
            <div className="contact">

              <i class="fa fa-user"></i>
            </div>
            <div>
              <p>Register</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="section1-right">
          <div className="main-cont">
            <p>Find Top <span style={{color: "#213858"}}><b>Colleges, <br />Coaching, Courses..!</b></span></p>
          </div>
          <div className="search-bar">
            <div style={{ marginLeft: 15 }}>
              <p>Search Colleges, Courses, Coaching</p>
            </div>
            <div className="search">

              <i class="fa fa-search"></i>
            </div>
          </div>
        </div>
        <div className="section-left">
          <div className="image">
            <img alt="img" src="https://www.collegedisha.com/_next/image?url=%2Fassets%2Fimages%2FcounsellingCard.webp&w=384&q=75" />
          </div>
          <div className="second-text">
            <p>Go for the Counselling</p>
          </div>
          <div className="second-button">
            <button>Click Here</button>
          </div>

        </div>
      </div>
      <div className="section2">
        <div className="section2-content">
          <h1>Our Features</h1>
          <p>College Disha will guide you to evaluate your strengths and explore the best<br /> career options for a rewarding future.</p>
        </div>
        <div className="parent-card">
          {
            Pictures.map((val, ind) => {
              return (
                <div className="main-card" key={ind}>
                  <div className="image-card">
                    <img src={val.imgsrc} alt="img"/>
                  </div>
                  <div className="card-title">
                    <p>{val.title}</p>
                  </div>
                  <div className="card-content">
                    <p>{val.caption}</p>
                  </div>
                </div>
              )
            })
          }


        </div>
        <div className="section3">
          <div className="section3-title">Fill Your Details for Counselling</div>
          <div className="section3-parts">
            <div className="section3-left">
              <div>
                <img src="https://www.collegedisha.com/assets/images/for-student.webp" alt="img"/>
              </div>
              <div className="left2">
                <p>Fill up the form and our mentors will help you overcome career related problems with smart solutions.</p>
              </div>
              <div className="left3">
                <button>Contact Us</button>
              </div>
            </div>
            <div className="section3-right">
              <div className="section-right-title">
                <h2>Fill the Details Here</h2>
              </div>
              <div className="section-right-subcontent">
                <p>Student / Parent</p>
              </div>
              <div className="input">
                <input placeholder="Name" />
                <input placeholder="Phone Number" />
                <input placeholder="Email" />
                <input placeholder="Last Education" />
                <input placeholder="Current Location" />
                <input placeholder="Preferred Location" />
                <input placeholder="Guardian's Name" />
                <input placeholder="Gaurdian's Phone Number" />
              </div>
              <div className="submit-line">
              <div>
                <p>Are you a parent?Click Here</p>
              </div>
              <div>
                <button>Submit</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
