import { useState } from 'react';
import Menu from './components/Menu';
import Layout from './components/layouts/Layout';
import '../doctor-dashboard/DoctorDashboard.css';

const DoctorDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard'); // State lifted here

  return (
    <div className="dashboard-container">
      <Menu setSelectedPage={setSelectedPage} /> {/* Pass setSelectedPage to Menu */}
      <Layout externalSelectedPage={selectedPage} setExternalSelectedPage={setSelectedPage} />
    </div>
  );
};

export default DoctorDashboard;
