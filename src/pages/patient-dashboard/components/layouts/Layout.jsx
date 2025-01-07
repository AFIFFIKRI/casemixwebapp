import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../layouts/Layout.css';
import SideBar from '../SideBar';
import MainBody from '../MainBody';

const Layout = ({ externalSelectedPage, setExternalSelectedPage }) => {
  const [selectedPage, setSelectedPage] = useState(externalSelectedPage);

  // Sync internal state with external state when it changes
  useEffect(() => {
    setSelectedPage(externalSelectedPage);
  }, [externalSelectedPage]);

  // Update external state when internal state changes
  const handlePageChange = (page) => {
    setSelectedPage(page);
    setExternalSelectedPage(page);
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <SideBar setPage={handlePageChange} /> {/* Pass synced handler to SideBar */}
        <MainBody selectedPage={selectedPage} />
      </Row>
    </Container>
  );
};

Layout.propTypes = {
  externalSelectedPage: PropTypes.string.isRequired,
  setExternalSelectedPage: PropTypes.func.isRequired,
};

export default Layout;
