import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import MainDashboard from '../pages/MainDashboard';
import PatientListDashboard from '../pages/PatientListDashboard';
import DoctorListDashboard from '../pages/DoctorListDashboard';
import AnalyticDashboard from '../pages/AnalyticDashboard';
import InvoiceDashboard from '../pages/InvoiceDashboard';
import ReportDashboard from '../pages/ReportDashboard';

const MainBody = ({ selectedPage }) => {
  return (
    <Col 
      className="p-4 d-flex flex-column" 
      md={10} 
      style={{ backgroundColor: 'whitesmoke',}}
    >
      <div style={{ flex: 1 }}>
        {selectedPage === 'dashboard' && <MainDashboard />}
        {selectedPage === 'patient' && <PatientListDashboard />}
        {selectedPage === 'doctor' && <DoctorListDashboard />}
        {selectedPage === 'analytic' && <AnalyticDashboard />}
        {selectedPage === 'invoice' && <InvoiceDashboard />}
        {selectedPage === 'report' && <ReportDashboard />}
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
