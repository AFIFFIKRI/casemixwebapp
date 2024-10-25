import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import casemixlogodark from '../assets/logo/logo_dark.png';
import UserProfile from '../assets/people/user.png';
import { IconContext } from "react-icons";
import { IoMenuOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { CiUser, CiBoxList } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import './Dashboard.css';

const Dashboard = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth > 768 && window.innerWidth <= 991);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      setIsMediumScreen(window.innerWidth > 768 && window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" id='topnav' fixed='top'>
        <Container fluid>
          <IconContext.Provider value={{ color: "#252525", size: "40" }}>
            <IoMenuOutline id='toggle-button'
              className="me-2"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            />
          </IconContext.Provider>
          <Navbar.Brand href="/dashboard" className='pt-3'>
            <Row>
              <Col className='g-0' id='logo-img-dashboard-col'><Image className="mb-3" id="logo-img-dashboard" src={casemixlogodark}/></Col>
              <Col className='pt-1'><font id='logo-text'>Casemix</font></Col>
            </Row>
          </Navbar.Brand>
          {(isSmallScreen || isMediumScreen) ? (
            <NavDropdown
              title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IoNotificationsOutline style={{ marginRight: '20px', fontSize: '24px' }} />
                  <Image 
                    src={UserProfile} 
                    roundedCircle 
                    width="40" 
                    height="40" 
                    alt="User"
                    style={{ border: 'none' }}
                  />
                </div>
              } 
              id="basic-nav-dropdown"
              className="nav-dropdown-smallscreen"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <div className="d-grid gap-2">
                  <Button variant="primary" id='profile-button-dashboard'>
                    Logout
                  </Button>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              as="button"
              id="custom-toggle"
              style={{ display: 'none' }}
            >
              <Image className="mb-3" id="logo-img-dashboard" src={casemixlogodark}/>
            </Navbar.Toggle>
          )}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto full-width-menu">
              <NavDropdown
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IoNotificationsOutline style={{ marginRight: '20px', fontSize: '24px' }} />
                    <Image 
                      src={UserProfile} 
                      roundedCircle 
                      width="40" 
                      height="40" 
                      alt="User"
                    />
                  </div>
                } 
                id="basic-nav-dropdown"
                className="full-width-menu"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <div className="d-grid gap-2">
                    <Button variant="primary" id='profile-button-dashboard'>
                      Logout
                    </Button>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className={`sidebar-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <Col md={2} id='sidebar'>
            <Nav className="flex-column">
              <Nav.Link id='menulink'
                as={Link} 
                to="/dashboard" 
                className={location.pathname === "/dashboard" ? 'active' : ''}
                onClick={closeSidebar}
              >
                <LuLayoutDashboard />  Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/dashboard/coding" 
                className={location.pathname === "/dashboard/coding" ? 'active' : ''}
                onClick={closeSidebar}
              >
                <FiFileText />  Coding
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/dashboard/patient-list" 
                className={location.pathname === "/dashboard/patient-list" ? 'active' : ''}
                onClick={closeSidebar}
              >
                <CiBoxList />  Patient List
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/dashboard/profile" 
                className={location.pathname === "/dashboard/profile" ? 'active' : ''}
                onClick={closeSidebar}
              >
                <CiUser />  Profile
              </Nav.Link>
            </Nav>
          </Col>
          <Col id='mainwrapper'>
            <Outlet /> {/* This will render the nested routes */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
