import { Row, Card, Col } from 'react-bootstrap';
import { MenuBookOutlined as BookIcon, ArticleOutlined as ArticleIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';

const MainDashboard = () => {
  const cardStyle = {
    textAlign: 'center',
    border: 'none',
    borderRadius: 20,
    backgroundColor: '#044ccc',
    color: 'white',
    height: '150px', // Set consistent height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10,
  };

  const renderCard = (icon, text, link) => (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%' }}>
      <Card className='p-3' style={cardStyle}>
        <Card.Body style={cardBodyStyle}>
          {icon}
          <Typography style={{ marginTop: '8px', fontSize: 14 }}>{text}</Typography>
        </Card.Body>
      </Card>
    </a>
  );

  return (
    <Row className="d-flex align-items-stretch">
      {/* Browse Online Section */}
      <Col md={8} className='mb-3'>
        <Card className='mb-3 p-2 h-100' style={{ border: 'none', borderRadius: 20 }}>
          <Card.Body>
            <Typography className='mb-3'>Browse Online</Typography>
            <Row className="g-3">
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, 'ICD-11', 'https://icd.who.int/en')}</Col>
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, 'ICD-10', 'https://icd.who.int/browse10/2019/en')}</Col>
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, 'ICHI', 'https://www.who.int/classifications/ichi/en/')}</Col>
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, 'ICF', 'https://www.who.int/classifications/icf/en/')}</Col>
            </Row>

            <Typography className='mt-3 mb-3'>Tips</Typography>
            <Row className="g-3">
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, 'A Guide for Clinical Staff', '#')}</Col>
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, '6 Tips to Improve Clinical Coding', '#')}</Col>
              <Col md={3} xs={6}>{renderCard(<BookIcon fontSize="medium" />, 'Clinical Coding for Beginners', '#')}</Col>
              <Col md={3} xs={6}>{renderCard(<ArticleIcon fontSize="medium" />, 'Clinical Coding Career in Malaysia', '#')}</Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      {/* Latest News Section */}
      <Col md={4} className='mb-3'>
        <Card className='mb-3 p-2 h-100' style={{ border: 'none', borderRadius: 20 }}>
          <Card.Body>
            <Typography>Latest News</Typography>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MainDashboard;
