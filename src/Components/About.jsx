import LeftPart from "./LeftPart";
import Navbar from "./Navbar";
import "../styles/About.scss";

function About() {
  return (
    <div className="main_container">
      <LeftPart />
      <div className="right_part">
        <Navbar />
        <div className="about_container">
          <p className="about_me">
            <span>💻</span> <strong>Web Developer & Designer</strong> with
            expertise in <strong>MERN stack</strong>, building high-performance,
            visually stunning, and fully responsive web applications. Skilled in{" "}
            <strong>
              UI/UX design 🎨, CSS animations 🎭, and modern JavaScript ⚡
            </strong>
            , I ensure every project is both functional and aesthetically
            refined. <br />
            <br />
          </p>
          <h1>what I'm doing</h1>
          <div className="my_purposes">
            <div className="purpose">
              <img src="/webdesign.png" alt="" />
              <div className="purpose_content">
                <h2>Web Design</h2>
                <p>
                  Creating visually appealing and user-friendly websites with a
                  focus on clean design,
                </p>
              </div>
            </div>
            <div className="purpose">
              <img src="/webdevelop.png" alt="" />
              <div className="purpose_content">
                <h2>Web Development</h2>
                <p>
                  Building dynamic, scalable, and responsive web applications
                  using the latest
                </p>
              </div>
            </div>
            <div className="purpose">
              <img src="/mobileapp.png" alt="" />
              <div className="purpose_content">
                <h2>Mobile App </h2>
                <p>
                  I help clients develop high-quality mobile apps using React
                  Native, Flutter, or Ionic.{" "}
                </p>
              </div>
            </div>
            <div className="purpose">
              <img src="/photography.png" alt="" />
              <div className="purpose_content">
                <h2>Photography</h2>
                <p>
                  Capturing stunning photographs for websites, portfolios, and
                  projects, ensuring visual content aligns with brand
                  aesthetics.
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------Testimonials-------------------------- */}
          <h1>Testimonials</h1>
          <div className="testimonials">
            <div className="testimonial">
              <img src="data:image/jpeg;base64,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" alt="Client 2" />
              <strong className="client_name">John Doe</strong>

              <p className="client_review">
                "This is the best web development service I have ever
                experienced. The team understood my needs and delivered exactly
                what I wanted!"
              </p>
            </div>

            <div className="testimonial">
              <img src="data:image/jpeg;base64,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" alt="Client 2" />
              <strong className="client_name">Jane Smith</strong>

              <p className="client_review">
                "I couldn't be happier with the design and functionality of my
                website. Highly recommend this team for any project!"
              </p>
            </div>
          </div>

          <h1>Clients</h1>
          <div className="clients">

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
