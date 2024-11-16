import React from 'react'
import './app.css'

function App()
{
  return (<>
    <div className="container">
      <img src="images/lady.jpg" className="image"/>
      <div className="bottom">
          <div className="details">
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <small>laurasmith.website</small>
          </div>
          <div className="socials">
            <button className='email'><img src="images/email.jpg"/><p>Email</p></button>
            <button className='linkedin'><img src="images/linkedin.png"/><p>LinkedIn</p></button>
          </div>
          <div className="ai">
            <div className="about">
              <h3>About</h3>
              <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
            </div>
            <div className="interests">
              <h3>Interests</h3>
              <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
          </div>
          <div className="footer">
            <img src='images/twitter.png'/>
            <img src='images/instagram.png'/>
            <img src='images/facebook.png'/>
            <img src='images/github.png'/>
          </div>
       </div>
    </div>
    </>
  )
}
export default App;
