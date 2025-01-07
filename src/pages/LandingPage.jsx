import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import casemixLogo from '../assets/logo/casemix-logo-latest.png';
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import bannerdrug from '../assets/banner/bannerdrug2.jpg';
import bannercasemix from '../assets/banner/bannercasemix.jpeg';
import ukmlogo from '../assets/logo/ukmlogo.png';
import kkmlogo from '../assets/logo/kkmlogo.png';
import qkprimalogo from '../assets/logo/qkprimalogo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../pages/LandingPage.css'
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Typography } from '@mui/material';

const LandingPage = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBackground('#044ccc');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: navbarBackground,
          transition: 'background-color 0.3s ease',
          zIndex: 1000,
          color: 'white',
        }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={casemixLogo}
              className="logo react"
              alt="React logo"
              style={{ width: 40, height: 30 }}
            />Casemix Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="menulist" href="#home">Home</Nav.Link>
              <Nav.Link className="menulist" href="#about">About</Nav.Link>
              <Nav.Link className="menulist" href="#subscriptions">Subscriptions</Nav.Link>
              <Nav.Link className="menulist" href="#ourpartner">Our Partner</Nav.Link>
              <Nav.Link className="menulist" href="#contactus">Contact Us</Nav.Link>
              <Button
                variant="outline-primary"
                className="custom-login-button"
                onClick={() => navigate('/login')} 
              >Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="home" style={{ position: 'relative', overflow: 'hidden' }}>
        <Carousel style={{ height: '100vh' }}>
          <Carousel.Item interval={3000}>
            <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
              <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              />
              <Carousel.Caption
                style={{
                    position: 'absolute',
                    top: '55%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                }}
              >
                <Typography>For over 21 Years. For Hundreds of Users.</Typography>
                <Typography variant='h3'>Your CASEMIX Health <br></br>Business Success</Typography>
                <Typography>Provide digital solutions (CASEMIX system) to capture 
                  patient information during hospital admission and clinic 
                  visits for rapid, robust, and accurate costing of health 
                  care services</Typography>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              />
              <Carousel.Caption
                style={{
                    position: 'absolute',
                    top: '61%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                }}
              >
                <h3>Second Slide</h3>
                <p>Second slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
              <img
                className="d-block w-100"
                src={banner1}
                alt="Third slide"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              />
              <Carousel.Caption
                style={{
                    position: 'absolute',
                    top: '61%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                }}
              >
                <h3>Third Slide</h3>
                <p>Third slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="about" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#F8F8F8'}}>
        <div className='h-100'>
          <Container fluid>
            <Container style={{paddingTop: 100, paddingBottom: 100,}}>
              <div className='mb-3' style={{textAlign: 'center'}}>
                <Typography variant='h4' style={{fontWeight: 'bold'}}>Informative Board</Typography>
              </div>
              <Card className='mb-4' style={{
                border: 'none',
                borderRadius: 20,
                backgroundColor: '#044ccc',
                color: 'white',
                padding: 20,
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${bannerdrug})`, // Replace with your desired image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',}}
              >
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Typography variant='h4' style={{fontWeight: 'bold'}}>About DRGs</Typography>
                      <Typography style={{textAlign: 'justify'}}>
                        Diagnosis-Related Groups (DRGs), or Casemix, is a system that 
                        categorises hospital cases into groups based on similar clinical 
                        characteristics and resource usage, with each group assigned a code 
                        reflecting the expected cost of care. DRGs will help to promote 
                        transparency in treatment costs that fosters trust and accountability, 
                        allowing you to anticipate expenses and ensuring hospitals align their 
                        charges with the care provided. It empowers you to make informed decisions 
                        by comparing providers and treatment options based on cost and quality, 
                        enabling you to choose care that best meets your needs. Cost clarity also 
                        helps you manage financial risks by preparing for out-of-pocket expenses or 
                        insurance claims, reducing the burden of unexpected medical bills. By making 
                        treatment costs transparent, DRG systems promote trust, affordability, and 
                        sustainability, building a patient-centered healthcare system that prioritizes 
                        fairness and accountability.
                      </Typography>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className='mb-4' style={{
                border: 'none',
                borderRadius: 20,
                backgroundColor: '#044ccc',
                color: 'white',
                padding: 20,
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${bannercasemix})`, // Replace with your desired image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',}}
              >
                <Card.Body>
                  <Row>
                    <Col md={6} style={{alignContent: 'center', textAlign: 'center'}}>
                    <img
                      src={casemixLogo}
                      className="logo react"
                      alt="React logo"
                      style={{padding: 20}}
                    />
                    </Col>
                    <Col md={6}>
                      <Typography variant='h4' style={{fontWeight: 'bold'}}>Casemix History</Typography>
                      <Typography style={{textAlign: 'justify'}}>
                        <strong>CASEMIX SOLUTIONS</strong> is a start-up private limited 
                        company incorporated under UKM in 2011. In 2016 
                        the ownership of the company was transferred to 
                        UKM researchers. We are the company that designs, 
                        sells, trains, and distributes the CASEMIX system 
                        to the global market. We provide dynamic software 
                        for implementing the CASEMIX system, which can be 
                        customised according to the country’s needs at a 
                        minimal cost. We are the only CASEMIX company in 
                        the world that can train and provide the total 
                        solution for CASEMIX implementation.
                      </Typography>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </Container>
        </div>
      </div>
      <div id="subscriptions" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className='h-100'>
          <Container fluid>
            <Container style={{paddingTop: 100, paddingBottom: 100,}}>
              <div className='mb-3' style={{textAlign: 'center'}}>
                <Typography variant='h4' style={{fontWeight: 'bold'}}>Subscriptions</Typography>
              </div>
              <Row className="d-flex justify-content-center align-items-stretch">
                <Col md={4} className='mb-3'>
                  <Card className='mb-3' 
                    style={{
                      border: 'none',
                      borderRadius: 20,
                      padding: 20,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      height: '100%',
                    }}>
                    <Card.Body>
                      <Typography variant='h5' style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Basic Plan
                      </Typography>
                      <Typography variant='h6' style={{ color: '#044ccc', textAlign: 'center', margin: '10px 0' }}>
                        $10/month
                      </Typography>
                      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                      </ul>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor: 'transparent'}}>
                      <Button variant="primary" 
                      style={{ 
                        width: '100%', 
                        marginTop: 10, 
                        backgroundColor: '#044ccc',
                        height: 50, 
                        borderRadius: 15,
                      }}>
                        Subscribe
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col md={4} className='mb-3'>
                  <Card className='mb-3' 
                    style={{
                      border: 'none',
                      borderRadius: 20,
                      padding: 20,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      height: '100%',
                    }}>
                    <Card.Body>
                      <Typography variant='h5' style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Standard Plan
                      </Typography>
                      <Typography variant='h6' style={{ color: '#044ccc', textAlign: 'center', margin: '10px 0' }}>
                        $20/month
                      </Typography>
                      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                        <li>✔ Feature 4</li>
                      </ul>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor: 'transparent'}}>
                      <Button variant="primary" 
                      style={{ 
                        width: '100%', 
                        marginTop: 10, 
                        backgroundColor: '#044ccc',
                        height: 50, 
                        borderRadius: 15,
                      }}>
                        Subscribe
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col md={4} className='mb-3'>
                  <Card className='mb-3' 
                    style={{
                      border: 'none',
                      borderRadius: 20,
                      padding: 20,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      height: '100%',
                      backgroundColor: '#00008B',
                      color: 'white'
                    }}>
                    <Card.Body>
                      <Typography variant='h5' style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Premium Plan
                      </Typography>
                      <Typography variant='h6' style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>
                        $30/month
                      </Typography>
                      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                        <li>✔ Feature 4</li>
                        <li>✔ Feature 5</li>
                      </ul>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor: 'transparent'}}>
                      <Button variant="primary" 
                      style={{ 
                        width: '100%', 
                        marginTop: 10, 
                        backgroundColor: '#044ccc',
                        height: 50, 
                        borderRadius: 15,
                      }}>
                        Subscribe
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
      <div id="ourpartner" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#F8F8F8'}}>
        <div className='h-100'>
          <Container fluid>
            <Container style={{
              paddingTop: 50, 
              paddingBottom: 10, 
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'}}
            >
              <Typography variant='h4' style={{fontWeight: 'bold'}}>Our Partner</Typography>
              <Col style={{ paddingTop: 20, paddingBottom: 20,}}>
              <img
                src={ukmlogo}
                className="logo react"
                alt="React logo"
                style={{ width: 300, height: 180,}}
              />
              <img
                src={kkmlogo}
                className="logo react"
                alt="React logo"
                style={{ width: 130, height: 130,}}
              />
              <img
                src={qkprimalogo}
                className="logo react"
                alt="React logo"
                style={{ width: 120, height: 100, marginLeft: 70,}}
              />
              </Col>
            </Container>
          </Container>
        </div>
      </div>
      <div id="contactus">
        <Container fluid style={{backgroundColor: '#044ccc'}}>
          <Container sticky="bottom" style={{paddingTop: 30, paddingBottom: 40,}}>
            <Row>
                <Col md={4} className='mb-3'>
                  <Card 
                  style={{
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    color: 'white',
                    fontSize: 14
                    }}
                  >
                    <Card.Body>
                      <h5 style={{fontWeight: 'bold'}}>About Us</h5>
                      <p style={{padding: 10,}}><strong>CASEMIX SOLUTIONS</strong> is a start-up private limited 
                        company incorporated under UKM in 2011. In 2016 
                        the ownership of the company was transferred to 
                        UKM researchers. We are the company that designs, 
                        sells, trains, and distributes the CASEMIX system 
                        to the global market. We provide dynamic software 
                        for implementing the CASEMIX system, which can be 
                        customised according to the country’s needs at a 
                        minimal cost. We are the only CASEMIX company in 
                        the world that can train and provide the total 
                        solution for CASEMIX implementation.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className='mb-3'>
                  <Card 
                  style={{
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    color: 'white',
                    fontSize: 14
                    }}
                  >
                    <Card.Body>
                      <h5 style={{fontWeight: 'bold'}}>Contact Us</h5>
                      <table>
                        <tr>
                          <td style={{padding: 10, marginBottom: 10,}}><RoomIcon /></td>
                          <td style={{padding: 10, marginBottom: 10,}}>
                            Casemix Solutions, Lot 1-15 MKH Boulevard,<br></br> 
                            Jalan Changkat, Bandar Kajang, 43000 Kajang,<br></br> 
                            Selangor Darul Ehsan, Malaysia.
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding: 10,}}><EmailIcon /></td>
                          <td style={{padding: 10, marginBottom: 10,}}>
                            <a href="mailto:info@casemix.com.my" style={{textDecoration: 'none', color: 'white'}}>info@casemix.com.my</a> <br></br>
                            <a href="mailto:infocasemix@gmail.com" style={{textDecoration: 'none', color: 'white'}}>infocasemix@gmail.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding: 10,}}><PhoneIcon /></td>
                          <td style={{padding: 10, marginBottom: 10,}}>
                            03-8735 0074 / 012-638 3521
                          </td>
                        </tr>
                      </table>
                      <p></p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className='mb-3'>
                  <Card 
                  style={{
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    color: 'white',
                    fontSize: 14
                    }}
                  >
                    <Card.Body>
                      <h5 style={{fontWeight: 'bold'}}>Quick Link</h5>
                      <div style={{padding: 10}}>
                      <p><a href="https://www.casemix.com.my/terms-condition/" style={{textDecoration: 'none', color: 'white'}}>Term and Conditions</a></p>
                      <p><a href="https://www.casemix.com.my/privacy-policy/" style={{textDecoration: 'none', color: 'white'}}>Privacy Policy</a></p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            <div style={{textAlign: 'center', color: 'white', fontSize: 14}}>
              © 2024 - {new Date().getFullYear()} Casemix Solutions<br></br>
              Powered by QK Prima
            </div>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default LandingPage