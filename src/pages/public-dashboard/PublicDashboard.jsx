import { useState } from 'react';
import Menu from './components/Menu';
import Layout from './components/layouts/Layout';
import '../public-dashboard/PublicDashboard.css';

const PublicDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard'); // State lifted here

  return (
    <div className="dashboard-container">
      <Menu setSelectedPage={setSelectedPage} /> {/* Pass setSelectedPage to Menu */}
      <Layout externalSelectedPage={selectedPage} setExternalSelectedPage={setSelectedPage} />
    </div>
  );
};

export default PublicDashboard;
