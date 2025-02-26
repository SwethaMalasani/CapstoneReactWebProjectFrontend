import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepagesscren">
      {/* HR Section */}
      <div className="hr-section">
        <h1>Welcome</h1>
        <h2>HR Management Solutions</h2>
        <p className="animated-text">Empowering leaders to drive business success through effective HR solutions.</p>

        <div className="hr-images">
          <img src="https://primepay.com/wp-content/uploads/Growing-Wheel-PP-10.25.24.gif" alt="HR Management" />
          <img src="https://cdnl.iconscout.com/lottie/premium/thumb/human-resources-department-animation-download-in-lottie-json-gif-static-svg-file-formats--candidate-pack-business-animations-9665233.gif" alt="Employee Engagement" />
          <img src="https://nextuae.com/wp-content/uploads/2023/12/HR-GIF.gif" alt="Team Collaboration" />
          <img src="https://media4.giphy.com/media/daUvAd1osc2QH7111b/giphy.gif" alt="Love HR" />
        </div>

        <p>
          Access payroll & benefits info, request time off, enroll in benefits, edit personal data, track team workflow, 
          complete expense requests, celebrate work anniversaries.
        </p>

        <div className="hr-images">
          <img src="https://www.hrcloud.com/hubfs/blog-post%20%231%28%20workmates%20campaign%29.gif" alt="Team" />
          <img src="https://media2.giphy.com/media/IhWIPeLT9UtAG1Uf4U/200w.gif" alt="Collaboration" />
          <img src="https://media1.giphy.com/media/3o84Ue0j5fFc8FRSIo/200w.gif" alt="Employee Appreciation" />
          <img src="https://media2.giphy.com/media/zLkaYkhl4WTF4cbErF/200w.gif" alt="Work from Home" />
        </div>

        <p>
          Recruitment, training, employee relations, performance management, benefits, onboarding, and company policies.
        </p>
      </div>
    </div>
  );
}

export default HomePage;