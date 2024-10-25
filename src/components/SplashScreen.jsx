import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import casemixlogodark from '../assets/logo/logo_white.png';
import '../styles.css'


const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container fluid className="splash-screen">
      <Row>
        <Col>
        <Image className="mb-5" id="logo-img" src={casemixlogodark}/>
          <h3 className="mb-3" style={{color: 'white'}}><strong>Clinical<br></br>Coding & Grouping</strong></h3>
          <div id='splash-text'>
            <h5 style={{textAlign: 'left', color:'white'}}><strong>&nbsp;&nbsp;Features:</strong></h5>
            <p style={{textAlign: 'left', color:'white'}}>
              • ICD-11 and ICHI procedures<br></br>&nbsp;&nbsp;&nbsp;references and bookmark<br></br>
              • Input patient & medical<br></br>&nbsp;&nbsp;&nbsp;information<br></br>
              • Code and group diagnosis and<br></br>&nbsp;&nbsp;&nbsp;procedures<br></br>
              • ICD-11 and ICHI procedures<br></br>&nbsp;&nbsp;&nbsp;references and bookmark<br></br>
              • Download coded information in<br></br>&nbsp;&nbsp;&nbsp;.csv and .pdf formats
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SplashScreen;