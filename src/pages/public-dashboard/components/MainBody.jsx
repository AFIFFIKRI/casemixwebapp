import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import MainDashboard from '../pages/MainDashboard';
import MyPatientDashboard from '../pages/MyPatientDashboard';
import HospitalList from '../pages/HospitalList';

const MainBody = ({ selectedPage }) => {
  return (
    <Col 
      className="p-4 d-flex flex-column" 
      md={10} 
      style={{ backgroundColor: 'whitesmoke',}}
    >
      <div style={{ flex: 1 }}>
        {selectedPage === 'dashboard' && <MainDashboard />}
        {selectedPage === 'mypatient' && <MyPatientDashboard />}
        {selectedPage === 'hospitallist' && <HospitalList />}
      </div>
      <div style={{ color: 'gray', textAlign: 'center', fontSize: 14, paddingTop: 20 }}>
        © 2024 - {new Date().getFullYear()} Casemix Solutions<br />
        Powered by QK Prima
      </div>
    </Col>
  );
};

// Define prop types
MainBody.propTypes = {
  selectedPage: PropTypes.string.isRequired,
};

export default MainBody;
