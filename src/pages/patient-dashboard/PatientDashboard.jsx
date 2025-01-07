import { useState } from 'react';
import Menu from './components/Menu';
import Layout from './components/layouts/Layout';
import '../patient-dashboard/PatientDashboard.css';

const PatientDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard'); // State lifted here

  return (
    <div className="dashboard-container">
      <Menu setSelectedPage={setSelectedPage} /> {/* Pass setSelectedPage to Menu */}
      <Layout externalSelectedPage={selectedPage} setExternalSelectedPage={setSelectedPage} />
    </div>
  );
};

export default PatientDashboard;
