import React from "react";
import logoCCS from "./assets/images/CCS.png"; // Import image from src/assets/images
import logoLOA from "./assets/images/LOA.png"; // Import image from src/assets/images

function CV() {
  return (
    <div>
      <header className="bg-dark text-white text-center p-4">
        {/* Using imported images */}
        <img id="logo-left" src={logoCCS} alt="CCS Logo" />
        <img id="logo-right" src={logoLOA} alt="LOA Logo" />

        <h1>Albert De Vera</h1>
        <h5>BSIT-32A2</h5>
        <p>College | Academic Interests</p>
      </header>

      <section id="home" className="container py-5 text-center">
        <h2>Welcome to My CV!</h2>
        <p>
          I am a student interested in the BSIT course. Here, you will find
          information about my education, skills, and school activities.
        </p>
      </section>

      <section id="about" className="container py-5">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Education</h3>
            <ul>
              <li>Elementary - Bayanan Elementary School (Main)</li>
              <li>High School - Muntinlupa National High School (Main)</li>
              <li>
                Senior High School - Muntinlupa National Senior High School
                (Main)
              </li>
              <li>College - Current Grade</li>
              <li>Achievements: With Honor</li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h3>School Activities</h3>
            <ul>
              <li>Mobile Legends Champion</li>
              <li>Sabayang Pagbigkas Champion</li>
              <li>Hip-Hop Dance Champion</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-5 bg-light">
        <h2>Contact Me</h2>
        <form
          id="contact-form"
          action="submit_form.php"
          method="POST"
          onSubmit="return validateForm(event)"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <footer className="bg-dark text-white text-center p-4"></footer>
    </div>
  );
}

export default CV;
