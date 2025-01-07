import { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

// Define consistent style variables for reusability
const styles = {
  sidebar: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    cursor: 'pointer',
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
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

const SideBar = ({ setPage }) => {
  const [activeItem, setActiveItem] = useState('dashboard'); // Default to 'dashboard'

  const handleClick = (item) => {
    setActiveItem(item);  // Update the active item
    setPage(item);        // Notify parent of the change
  };

  return (
    <Col className="d-none d-md-block" md={2} style={styles.sidebar}>
      <div>
        <div
          onClick={() => handleClick('dashboard')}
          style={{
            ...styles.menuItem,
            ...(activeItem === 'dashboard' ? styles.activeMenuItem : styles.inactiveMenuItem),
          }}
        >
          Dashboard
        </div>
        <div
          onClick={() => handleClick('mypatient')}
          style={{
            ...styles.menuItem,
            ...(activeItem === 'mypatient' ? styles.activeMenuItem : styles.inactiveMenuItem),
          }}
        >
          My Patient
        </div>
        <div
          onClick={() => handleClick('appointment')}
          style={{
            ...styles.menuItem,
            ...(activeItem === 'appointment' ? styles.activeMenuItem : styles.inactiveMenuItem),
          }}
        >
          Appointment
        </div>
      </div>
    </Col>
  );
};

// Define prop types
SideBar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default SideBar;
