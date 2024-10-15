import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCDIDropdown, setShowCDIDropdown] = useState(false);
  const [showAdmissionDropdown, setShowAdmissionDropdown] = useState(false);
  const [showCommitteesDropdown, setShowCommitteesDropdown] = useState(false);
  const [showContactUsPage, setShowContactUsPage] = useState(false);
  const [showCareerPage, setShowCareerPage] = useState(false);
  const [hover, setHover] = useState(false); 
  const [showAcademicsPage, setShowAcademicsPage] = useState(false); 

  const handleBackClick = () => {
    setShowAcademicsPage(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src="logo.png" alt="Code Graphi Logo" />
        </div>

        {/* Navigation */ }
        <nav className="navbar">
          <div 
            className="about-us"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            
          >
            <a href="#">About Us</a>
            {showDropdown && (
              <div className="dropdown">
                <a href="#">About CGI</a>
                <a href="#">About Noida</a>
                <a href="#">Registrar Message</a>
                <a href="#">Recognition/ Approvals</a>
              </div>
            )}
          </div>  

          {/* Courses Section */}
          <div
            className="courses-tab"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Courses
            {hover && (
              <div className="courses-dropdown">
                <table className="courses-table">
                  <thead>
                    <tr >
                      <th>S.No</th>
                      <th>Skill Sector</th>
                      <th>Programme</th>
                      <th>Specialization</th>
                      <th>Eligibility</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="r-1">
                      <td>1</td>
                      <td>Management & Commerce</td>
                      <td>MBA</td>
                      <td>Marketing, HR, IT, Finance, International Business</td>
                      <td>Graduate with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>MBA</td>
                      <td>Digital Marketing</td>
                      <td>Graduate with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Retail, Logistics, Sales & Marketing, Banking & Finance, Project & Office Management</td>
                      <td>12TH with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Retail Management</td>
                      <td>12TH with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Logistic Operations</td>
                      <td>12TH with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Business Process Management</td>
                      <td>12TH with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr className="r-2">
                      <td>2</td>
                      <td>Information & Technology</td>
                      <td>BCA</td>
                      <td>Computer</td>
                      <td>12TH with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>B.Sc</td>
                      <td>IT, CS, Data Analytics, Cyber Security, Cloud Computing, Gaming</td>
                      <td>12TH with MATHEMATICS WITH 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr className="r-3">
                      <td>3</td>
                      <td>School of Humanities & Applied Arts</td>
                      <td>B.A</td>
                      <td>English , Spanish, Digital Media & Design, Aesthetics & Beauty Therapy</td>
                      <td>12TH with 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr className="r-4">
                      <td>4</td>
                      <td>Science</td>
                      <td>B.Sc</td>
                      <td>Biotechnology / Chemistry (Pharmaceutical)</td>
                      <td>12TH with BIOLOGY WITH 45% or 40% (GEN AND OBC 45%, ST/SC 40%)</td>
                      <td>3 Year</td>
                    </tr>
                    <tr className="r-5">
                      <td>5</td>
                      <td>Education</td>
                      <td>B.Ed</td>
                      <td>Education</td>
                      <td>AS PER NCTE REGULATION</td>
                      <td>2 Year</td>
                    </tr>
                    <tr className="r-6">
                      <td>6</td>
                      <td>Healthcare</td>
                      <td>Diploma</td>
                      <td>Medical Lab Technology</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Hospital Administration</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Healthcare Management</td>
                      <td>12th</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Diploma</td>
                      <td>Emergency Medical Technology</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Diploma</td>
                      <td>Radiology & Medical Imaging Technology</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>B.Sc</td>
                      <td>Medical Lab Technology</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>B.Sc</td>
                      <td>Radiology & Medical Imaging Technology</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>2 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>B.Sc</td>
                      <td>Optometry</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>4 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Diploma</td>
                      <td>Pharmacy</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>2 Year</td>
                    </tr>
                    <tr className="r-1">
                      <td>7</td>
                      <td>Hospitality & Culinary Arts</td>
                      <td>Diploma</td>
                      <td>Culinary Arts</td>
                      <td>12th</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Bachelors</td>
                      <td>Hospitality and Tourism Management</td>
                      <td>12TH WITH BIOLOGY</td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Bachelors</td>
                      <td>Hotel Management & Culinary Arts</td>
                      <td>12TH </td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Bachelors</td>
                      <td>Catering Technology & Culinary Arts</td>
                      <td>12TH </td>
                      <td>3 Year</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BBA</td>
                      <td>Hospitality Management (Restaurant Operations / Facility Management)</td>
                      <td>12TH </td>
                      <td>3 Year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
                

          <div
            className="cdi-skill"
            onMouseEnter={() => setShowCDIDropdown(true)}
            onMouseLeave={() => setShowCDIDropdown(false)}
          >
            <a href="#">CDI Skill</a>
            {showCDIDropdown && (
              <div className="dropdown">
                <a href="#">Mass Communication & Journalism</a>
                <a href="#">Tourism & Hotel Management</a>
                <a href="#">Paramedical</a>
                <a href="#">Fashion & Interior designing</a>
                <a href="#">Media & Film Making</a>
              </div>
            )}
          </div>

          <div
            className="admission"
            onMouseEnter={() => setShowAdmissionDropdown(true)}
            onMouseLeave={() => setShowAdmissionDropdown(false)}
          >
            <a href="#">Admission</a>
            {showAdmissionDropdown && (
              <div className="dropdown">
                <a href="#">Mass Communication & Journalism</a>
                <a href="#">Tourism & Hotel Management</a>
                <a href="#">Paramedical</a>
                <a href="#">Fashion & Interior designing</a>
                <a href="#">Media & Film Making</a>
              </div>
            )}
          </div>

          {/* Academics Section */}
          <div
            className="academics"
            onMouseEnter={() => setShowAcademicsPage(true)}
            onMouseLeave={() => setShowAcademicsPage(false)} // Optional if you want auto-hide
          >
            <a href="#">Academics</a>
          </div>



          <a href="#">Pre University</a>
          <a href="#">Research</a>
          <a href="#">Faculty</a>


          <div
            className="career"
            onMouseEnter={() => setShowCareerPage(true)}
            onMouseLeave={() => setShowCareerPage(false)}
          >
            <a href="#">Career</a>
          </div>

          

          <div
            className="committees"
            onMouseEnter={() => setShowCommitteesDropdown(true)}
            onMouseLeave={() => setShowCommitteesDropdown(false)}
          >
            <a href="#">Committees</a>
            {showCommitteesDropdown && (
              <div className="dropdown">
                <a href="#">Anti Ragging Committee</a>
                <a href="#">Gender Sensitization Committee</a>
                <a href="#">Placement & Career Guidance Committee</a>
                <a href="#">Finance Committee</a>
                <a href="#">Examination Committee</a>
                <a href="#">Internal Complaints Committee</a>
                <a href="#">Library Committee</a>
                <a href="#">Proctorial Committee</a>
                <a href="#">Student Grievance Redressal Committee</a>
              </div>
            )}
          </div>
 
          <div
            className="contact-us"
            onMouseEnter={() => setShowContactUsPage(true)}
            onMouseLeave={() => setShowContactUsPage(false)}
          >
            <a href="#">Contact Us</a>
          </div>
          </nav>
      </header>

      {/* Academics Page */}
      {showAcademicsPage && (
        <section className="academics-page">
          <h1>Academics</h1>
          <hr />
          <h2>Welcome to Our Academic Programs</h2>
          <p >
          Welcome to CodeGraphi Institute, a reliable educational centre for collaboration with 
          researchers and PhD students. CodeGraphi Institute offers world-class postgraduate and 
          postgraduate programmes in all major disciplines. Be part of an educated world; 
          CodeGraphi Institute seeks to explore unique and dynamic ways of delivering higher
          education to meet the urgent demands of today's professionalism. As the world moves 
          towards glamorous clothing; CodeGraphi Institute also pursues a modern approach to 
          providing education in all relevant fields of study, from medicine to business, art 
          to media, architecture to film and more.
          <p> All of these different academic aspects will 
          help our students choose the one that best matches their interests and past academic achievements.
          CodeGraphi Institute brings its students together with world-class experienced teachers from 
          branded companies and educational centres who are well versed in advanced corporate behaviour 
          and highly qualified and qualified professionals who know how to best solve their students' 
          problems. Here we are made up of a team of independent teachers from all professions including 
          Skills, Vocational, Media, Hospitality, Engineering, Retail, Medical, Nursing, IT,  Architecture 
          and many more, where students can improve their in-house skills and education level while enriching 
          themselves they can prepare according to the rules of the corporate world.</p>
           A high level of education, a wide range of degree programmes, complete support during PhD and MTech, 
          dedicated faculty, up-to-date courses, detailed study materials and regular update notifications are
          some of the characteristics of CodeGraphi Institute Scholars. CGI is equipped with a variety of modern 
          educational facilities at the international level. Students of all disciplines from around the world 
          can take a step toward CodeGraphi Institute, where they can expect more career aspirations and study 
          needs. PhD and MTech students are accompanied by accomplished and experienced mentors who can assist 
          their students in providing the best thesis guidance and assisting them in their relevant research projects.
          <p>In addition to courses and degree programs; CGI also stands for world-class training and internship 
          programs, and CodeGraphi Institute has established a variety of valuable connections. Students completing 
          higher education at CodeGraphi Institute can look forward to world-class training and internship programmes. 
          So advance your studies and brighten your career with CodeGraphi Institute - a way to advance your education.</p>
          </p>
          <button onClick={handleBackClick}>Back</button>
        </section>
      )}

      {/* Career Section Content */}
      {showCareerPage && (
        <section className="career-page">
          <h1>Career At CGI</h1><hr/>
          <p>
            <strong>Build your career with CodeGraphi Institute</strong><br />
            Do you have the zeal to work in one of the leading universities in North East India?<br/>
             SSU is scouting for talented professionals to join our mission of excellence.
          </p>
          <p>If you think you can add value to our organization, don't shy away from sending us your profile at <a href="mailto:hr@codegraphi.ac.in ">hr@codegraphi.ac.in </a>.</p>
          <div className="job-opening">
            <h2>Vice-Chancellor Position</h2>
            <p>Applications are invited for the post of Vice-Chancellor. Interested individuals may submit<br/> 
            a detailed resume in the format available on the CGI website along with a two-page justification <br/>
            for their candidacy and a two-page vision statement for the university. Submit by email before<br/> 
            22/11/2024 to <a href="mailto:info@codegraphi.ac.in ">info@codegraphi.ac.in </a>.</p>
            <p>For more information, contact:</p>
            <p>Phone: +91 0000000000, +91 0000000000</p>
            <p>Email: <a href="mailto:info@codegraphi.ac.in ">info@codegraphi.ac.in </a></p>
          </div>
        </section>
      )}

         
          {showContactUsPage && (
            <section className="contact-us-page">
              <h1>Contact Us</h1>
              <hr />
              <p>Question? Call us at +91 0000000000 (Mon to Sat: 9 AM to 9 PM IST)</p>
              <h4>CodeGraphi Institute</h4>
              <p>Noida, Bhutani Tower-B</p>
              <p>T: +91 0000000000</p>
              <p>T: +91 0000000000</p>
              <p>E: info@codegraphi.ac.in</p>
              <hr />
              <h4>Write to us</h4>
              <p>
                For general inquiries or feedback, email info@codegraphi.ac.in <br />
                For business inquiries, email support@codegraphi.ac.in <br />
                For press inquiries, email press@codegraphi.ac.in<br />
                Interested in working with us? Visit the Career Page.
              </p>
            </section>
          )}
        

      {/* UGC Section */}
      <section className="ugc-section">
        <div className="ugc-text">
          <h2>UGC-entitled online degrees from</h2>
          <p>NAAC A+ CodeGraphi Institute</p>
          <div className="degree-options">
            <h1>BA | MA</h1>
            <h1>MCOM | BCOM | MCA</h1>
          </div>
          <div className="admission-date">
            <button>Last date of admission: October 20</button>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h3>Get started</h3>
          <p>Enter your details and our experts will get in touch with you shortly!</p>
          <form>
            <input type="text" placeholder="Enter name" required />
            <input type="email" placeholder="Enter email" required />
            <select required>
              <option value="">Select course applying for*</option>
              <option value="ba">BA</option>
              <option value="ma">MA</option>
              <option value="mcom">MCOM</option>
              <option value="bcom">BCOM</option>
              <option value="mca">MCA</option>
            </select>
            <input type="text" placeholder="Enter mobile number" required />
            <label>
              <input type="checkbox" required />
              I authorize CodeGraphi Institute and its associates to contact me with updates & notifications.
            </label>
            <button type="submit">REGISTER NOW</button>
          </form>
        </div>
      </section>

      {/* Recognised & Accredited Section */}
      <section className="recognised-section">
        <h2>Recognised & Accredited</h2>
        <div className="logos">
          <img src="logo1.png" alt="Logo 1" />
          <img src="logo2.png" alt="Logo 2" />
          <img src="logo3.png" alt="Logo 3" />
          <img src="logo4.png" alt="Logo 4" />
        </div>
      </section>
    </div>
  );
}

export default App;