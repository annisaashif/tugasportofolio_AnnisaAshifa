import '../styles/Navbar.css';
import myImage from '../assets/annisa.jpg';
import myImage1 from '../assets/html.jpg';
import myImage2 from '../assets/css.png';
import myImage3 from '../assets/js.jpg';
import myImage4 from '../assets/git.png';

function Navbar() {
  return (
    <nav>
      <div className="container-index">
        <div className="header">
          <div className="nav">
            <a href="about-section">About</a>
            <a href="#">Skill</a>
            <a href="#">Experience</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
          </div>
         
        </div>

        <div className="profile">
          <img alt="Profile Picture" height="200" src={myImage} width="200" />
          <h1>Annisa Ashifa</h1>
          <p>Frontend Developer</p>
        </div>

        <div className="about">
          <h2 className="section-title" id="about-section">About</h2>
          <p>
            Saya baru memulai perjalanan sebagai Frontend Developer. Dengan dasar yang kuat dalam HTML, CSS, dan JavaScript, saya terus belajar dan berkembang untuk menciptakan desain web yang menarik dan fungsional.
          </p>
        </div>

        <div className="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <img alt="HTML Logo" height="50" src={myImage1} width="50" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img alt="CSS Logo" height="50" src={myImage2} width="50" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img alt="JavaScript Logo" height="50" src={myImage3} width="50" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img alt="Git Source Control Logo" height="50" src={myImage4} width="50" />
              <p>Git Source Control</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
