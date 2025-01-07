import PropTypes from 'prop-types';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import casemixLogo from '../../../assets/logo/casemix-logo-latest.png';
import manLogo from '../../../assets/user/man.png';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

// Define consistent style variables for reusability
const styles = {
  navbar: {
    backgroundColor: 'white',
  },
  navbarBrandText: {
    color: '#252525',
  },
  menuIcon: {
    color: '#252525',
    fontSize: 26,
  },
  notificationIcon: {
    color: '#252525',
    fontSize: 26,
  },
  accountDropdown: {
    paddingLeft: 20,
    paddingRight: 20,
    width: 250,
  },
  menuItem: {
    cursor: 'pointer',
    marginBottom: '10px',
    padding: 15,
    borderRadius: '15px',
    fontSize: 14,
  },
  activeMenuItem: {
    backgroundColor: '#044ccc',
    color: 'white',
  },
  inactiveMenuItem: {
    backgroundColor: 'transparent',
    color: 'black',
  },
};

const Menu = ({ setSelectedPage }) => {
  const [show, setShow] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handlePageClick = (page) => {
    setActivePage(page);
    setSelectedPage(page);
    handleClose();
  };

  const getMenuItemStyle = (page) => ({
    ...styles.menuItem,
    ...(activePage === page ? styles.activeMenuItem : styles.inactiveMenuItem),
  });

  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" style={styles.navbar}>
        <Container fluid>
          <div className="d-lg-none" style={{ paddingRight: 10 }}>
            <MenuIcon style={styles.menuIcon} onClick={handleShow} />
          </div>
          <Navbar.Brand href="#home">
            <img
              src={casemixLogo}
              width="40"
              height="30"
              className="d-inline-block align-top"
              alt="Casemix Solutions Logo"
            />
            <span style={styles.navbarBrandText}>Casemix Solutions</span>
          </Navbar.Brand>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <NotificationsActiveOutlinedIcon style={styles.notificationIcon} />
            <NavDropdown
              title={<img src={manLogo} width="40" height="40" alt="User Profile" />}
              id="account-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile" style={styles.accountDropdown}>Profile</NavDropdown.Item>
              <NavDropdown.Item href="#logout" style={styles.accountDropdown}>Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '70%' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand href="#home">
              <img
                src={casemixLogo}
                width="40"
                height="30"
                className="d-inline-block align-top"
                alt="Casemix Solutions Logo"
              />
              <span style={styles.navbarBrandText}>Casemix Solutions</span>
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div onClick={() => handlePageClick('dashboard')} style={getMenuItemStyle('dashboard')}>
            Dashboard
          </div>
          <div onClick={() => handlePageClick('mypatient')} style={getMenuItemStyle('mypatient')}>
            My Patient
          </div>
          <div onClick={() => handlePageClick('appointment')} style={getMenuItemStyle('appointment')}>
            Appointment
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

Menu.propTypes = {
  setSelectedPage: PropTypes.func.isRequired,
};

export default Menu;
