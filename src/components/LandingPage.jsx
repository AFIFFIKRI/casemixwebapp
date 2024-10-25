import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Carousel,
  Row,
  Col,
  ListGroup,
  Card,
  Image,
} from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
// import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import "./LandingPage.css";
import bannerimg1 from "../assets/landingpage/banner-3.jpg";
import bannerimg2 from "../assets/landingpage/banner-4.jpg";
import infoimg1 from "../assets/landingpage/infosec-1.jpg";
import infoimg2 from "../assets/landingpage/infosec-2.jpg";
import infoimg3 from "../assets/landingpage/infosec-3.jpg";
import logoimg1 from "../assets/landingpage/logo-1.png";
import logoimg2 from "../assets/landingpage/logo-2.png";
import logoimg3 from "../assets/landingpage/logo-3.png";
import logoimg4 from "../assets/landingpage/logo-4.png";
import logoimg5 from "../assets/landingpage/logo-5.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Eye Specialist");

  const handleLogin = () => {
    navigate("/login");
  };

  const infoData = {
    "Eye Specialist": {
      title: "Eye Specialist",
      image: infoimg1,
      caption: "Offering specialized eye care.",
    },
    "Stroke Centre": {
      title: "Stroke Centre",
      image: infoimg2,
      caption: "Expert stroke treatment and recovery.",
    },
    "Dental Specialist": {
      title: "Dental Specialist",
      image: infoimg3,
      caption: "Comprehensive dental care for all ages.",
    },
  };

  const logos = [logoimg1, logoimg2, logoimg3, logoimg4, logoimg5];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const settings = {
    infinite: true, // Infinite loop
    speed: 8000, // The speed of scrolling (slower for smooth effect)
    slidesToShow: 3, // Number of logos to show at once
    slidesToScroll: 1, // Number of logos to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Speed set to 0 for continuous scroll
    cssEase: "linear", // Smooth linear scrolling
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Keep scrolling on hover
  };



  return (
    <div style={{ backgroundColor: "#f0fbff" }}>
      {/* Navigation Bar */}
      <Navbar className="navbar-section" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className="fw-bold" href="/home">
            CASEMIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              defaultActiveKey="#hero"
              variant="underline"
              className="ml-auto text-center"
            >
              <Nav.Link href="#hero">Public</Nav.Link>
              <Nav.Link href="#info">Info</Nav.Link>
              <Nav.Link href="#insights">Insights</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button
                variant="outline-light rounded-pill"
                className="ml-3"
                onClick={handleLogin}
              >
                <FiLogIn />&nbsp;
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className=" hero-section text-center pb-5">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-image-wrapper">
              <img src={bannerimg1} alt="First slide" />
              <div className="gradient-overlay"></div>
            </div>
            <Carousel.Caption className="text-start text-dark">
              <Container>
                <Fade cascade damping={0.5} triggerOnce={true}>
                  <h1 className="fw-bold display-2 mb-3">
                    Welcome to Our Healthcare
                  </h1>
                  <h2>
                    Providing quality care for everyone <br /> Together, we can
                    make a difference in the world of healthcare
                  </h2>
                  <p>Innovation in healthcare, every step of the way.</p>
                </Fade>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-image-wrapper">
              <img src={bannerimg2} alt="Second slide" />
              <div className="gradient-overlay"></div>
            </div>
            <Carousel.Caption className="text-dark text-start">
              <Container>
                <h1 className="fw-bold display-2 mb-3">
                  Dedicated to providing exceptional care
                </h1>
                <h2>
                  Providing quality care for everyone <br /> Together, we can
                  make a difference in the world of healthcare
                </h2>
                <p>Innovation in healthcare, every step of the way.</p>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Info Section */}
      <section id="info" className="py-5">
        <Container>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6} className="py-3">
                  <Fade direction="left" delay={700} triggerOnce={true}>
                    <h3>Our Specialist Centres</h3>
                    <ListGroup>
                      {Object.keys(infoData).map((option) => (
                        <ListGroup.Item
                          key={option}
                          action
                          onClick={() => setSelectedOption(option)}
                        >
                          {option}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Fade>
                </Col>

                <Col md={6} className="py-3">
                  <Fade direction="right" triggerOnce={true}>
                    <Image
                      className="border border-dark rounded-4 mb-3"
                      src={infoData[selectedOption].image}
                      fluid
                    />
                    <h4>{infoData[selectedOption].title}</h4>
                    <p>{infoData[selectedOption].caption}</p>
                  </Fade>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-5 insights-section">
        <Container>
          <Fade cascade={false} delay={300} direction="left" triggerOnce={true}>
            <Row className="text-center mb-5">
              <h3 className="display-4 fw-bold ">Insights Corner</h3>
              <p className="fs-3">
                Hear out some of valuable information for better future
                prevention
              </p>
            </Row>
          </Fade>

          <Row>
            {[
              {
                title: "Insight 1",
                text: "Advancements in medical technology are transforming patient care. Advancements in medical technology are transforming patient care.Advancements in medical technology are transforming patient care.",
              },
              {
                title: "Insight 2",
                text: "Preventative healthcare measures reduce long-term costs for patients Preventative healthcare measures reduce long-term costs for patients.",
              },
              {
                title: "Insight 3",
                text: "Telemedicine is on the rise, improving access to healthcare.",
              },
            ].map((insight, index) => (
              <Col key={index} md={4}>
                <Fade
                  cascade={false}
                  delay={index * 500}
                  direction="up"
                  triggerOnce={true}
                >
                  <Card className="mb-2">
                    <Card.Body>
                      <Card.Title>{insight.title}</Card.Title>
                      <Card.Text>{insight.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Joint Venture Section */}
      <section id="joint-venture" className="py-5">
        <Container>
          <Fade cascade damping={0.2} triggerOnce={true}>
            <Row className="text-center mb-3">
              <h3 className="display-4 fw-bold ">Our Partners</h3>
              <p className="fs-3">
                We collaborate with industry leaders to provide the best care.
              </p>
            </Row>

            <Row>
              <Card>
                {/* <CarouselMulti
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  arrows={false}
                >
                  {logos.map((logo, index) => (
                    <div key={index} className="logo-container">
                      <img
                        src={logo}
                        alt={`Logo ${index}`}
                        className="logo-image"
                      />
                    </div>
                  ))}
                </CarouselMulti> */}             
                  <Slider {...settings}>
                    {logos.map((logo, index) => (
                      <div key={index} className="logo-container">
                        <img
                          src={logo}
                          alt={`Logo ${index}`}
                          className="logo-image"
                        />
                      </div>
                    ))}
                  </Slider>
                
              </Card>
            </Row>
          </Fade>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 contact-section">
        <Container>
          <h3>Contact Us</h3>
          <Row>
            <Col>
              <p>Email: info@medicalcare.com</p>
              <p>Phone: +603 456 7890</p>
            </Col>
            <Col className="text-end">
              <h5>Follow Us</h5>
              <FaFacebook size={30} className="mr-3" />
              <FaInstagram size={30} className="mr-3" />
              <FaLinkedin size={30} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 bg-dark text-white">
        <Container>
          <p>&copy; 2024 Casemix. All Rights Reserved.</p>
          <a href="#top" className="btn btn-secondary">
            Back to Top
          </a>
        </Container>
      </footer>
    </div>
  );
}

export default LandingPage;
