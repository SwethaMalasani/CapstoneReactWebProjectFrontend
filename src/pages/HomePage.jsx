import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepagesscren">
      <div className="venus">
    <div className="home">
  {/* Left side: Main Image */}
 {/* <div classname="imagesonportal"> */}
  {/* <img className="hrmainimage"  */}
    {/* src="https://media0.giphy.com/media/xTiTnpVDp86JbFCdzi/source.gif"  */}
    {/* alt="homeimages" */}
  
  {/* <img src="https://media.licdn.com/dms/image/v2/C4D12AQH3moW8i3ewrw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1628589993746?e=2147483647&v=beta&t=2YRgQC3LhPMjKfbEkR4DnmOmvb6h6atmVxpvzzzIe_g" alt="dasboardimage" /> */}
  {/* </div> */}
  {/* Right side: Welcome Text */}
  <div className="homeimage">
    <h1>Welcome to the Employee Management System</h1>
    <p>Your go-to system for managing employees!</p>
  </div>
  
  <div className="nav-links">
      <Link to="/login" className="btn">Login</Link>
      <Link to="/contact-us" className="btn">Contact Us</Link>
      <Link to="/employees" className="btn">Employees</Link>
    </div>
    </div>
</div>
    <div className="hr-section">
        <h2>HR Management Solutions</h2>
        <p>Empowering leaders to drive business success through effective HR solutions.</p>
        <div className="hr-images">
          <img src="https://primepay.com/wp-content/uploads/Growing-Wheel-PP-10.25.24.gif" alt="HR Management" />
          <img src="https://cdnl.iconscout.com/lottie/premium/thumb/human-resources-department-animation-download-in-lottie-json-gif-static-svg-file-formats--candidate-pack-business-animations-9665233.gif" alt="Employee Engagement" />
          <img src="https://nextuae.com/wp-content/uploads/2023/12/HR-GIF.gif" alt="Team Collaboration" />
          <img src="https://media4.giphy.com/media/daUvAd1osc2QH7111b/giphy.gif?cid=6c09b9529iv0pfui2jln4jpqs09e5cg5qwn5asgqd9w59pxq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt ="love hr"/>
          <p>
          Access their payroll and benefits information<br/>
          Request time off<br/>
          Enroll in benefits<br/>
          Edit their personal data<br/>
          Track team workflow and shifts<br/>
          Complete expense requests<br/>
          Celebrate work anniversaries<br/>
          </p>
          <img src="https://www.hrcloud.com/hubfs/blog-post%20%231%28%20workmates%20campaign%29.gif" alt="team"/>
          <img src="https://media2.giphy.com/media/IhWIPeLT9UtAG1Uf4U/200w.gif" alt ="collaboration"/>
          <img src="https://media1.giphy.com/media/3o84Ue0j5fFc8FRSIo/200w.gif?cid=6c09b952njltypclf47w7l1jf0dz5gi2s5k5tl7t7hp3gesc&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="employee appreciation"/>
          <img src="https://media2.giphy.com/media/zLkaYkhl4WTF4cbErF/200w.gif?cid=6c09b952kqk2k9i3fp2cfh5cl75ijy5yb2w0hohc1o8kmdf3&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="work from home"/>
          <p>
          Recruitment: Finding, screening, and interviewing job applicants<br/>
          Training and development: Helping employees improve their skills and knowledge<br/>
          Employee relations: Building positive relationships with employees<br/>
          Performance management: Setting expectations, evaluating performance, and providing feedback<br/>
          Benefits: Managing health plans, retirement, disability, and other benefits<br/>
          Onboarding: Welcoming new hires and helping them get settled<br/>
          Policies: Creating and educating employees on company policies and procedures<br/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
