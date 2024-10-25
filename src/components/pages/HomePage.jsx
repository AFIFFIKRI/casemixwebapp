import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './HomePage.css';
import { IconContext } from "react-icons";
import { IoBookOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Container fluid id='homepage-container'>
      <Row>
      <Col md={5}>
          <Row>
          <h5 className='mb-3'><strong>How can we help you?</strong></h5>
            <Col className='mb-3'>
              <Card 
              className='h-100 pt-2' 
              id='card3'
              onClick={() => navigate('/dashboard/coding', { state: { initialStep: 3 } })} 
              style={{ cursor: 'pointer' }} >
                <Card.Body>
                <IconContext.Provider value={{ color: "#364DB9", size: "40" }}>
                  <Col>
                    <IoBookOutline />
                  </Col>
                </IconContext.Provider>
                  <Col><strong>Group*</strong></Col>
                  <Col><p style={{fontSize: '10px', lineHeight: '1.2'}}>*Assign DRG Code based on diagnosis and procedures selected</p></Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100 pt-2' id='card3'>
                <Card.Body>
                  <IconContext.Provider value={{ color: "purple", size: "40" }}>
                    <Col>
                      <IoBookmarkOutline />
                    </Col>
                  </IconContext.Provider>
                  <Col><strong>My Bookmark</strong></Col>
                  <Col><br></br></Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card 
                className='h-100 pt-2' 
                id='card3' 
                onClick={() => navigate('./help-center')} 
                style={{ cursor: 'pointer' }} 
              >
                <Card.Body>
                  <IconContext.Provider value={{ color: "green", size: "40" }}>
                    <Col>
                      <GoQuestion />
                    </Col>
                  </IconContext.Provider>
                  <Col><strong>Help Center</strong></Col>
                  <Col><br></br></Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
          <h5 className='mb-3'><strong>Browse online?</strong></h5>
            <Col className='mb-3'>
              <Card className='h-100 pt-3 pb-3' id='card4'>
                <Card.Body>
                  <IconContext.Provider value={{ color: "#364DB9", size: "40" }}>
                    <Col>
                      <IoBookOutline />
                    </Col>
                  </IconContext.Provider>
                  <strong>ICD-11</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100 pt-3 pb-3' id='card4'>
                <Card.Body>
                  <IconContext.Provider value={{ color: "#364DB9", size: "40" }}>
                    <Col>
                      <IoBookOutline />
                    </Col>
                  </IconContext.Provider>
                  <strong>ICD-10</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100 pt-3 pb-3' id='card4'>
                <Card.Body>
                  <IconContext.Provider value={{ color: "#364DB9", size: "40" }}>
                    <Col>
                      <IoBookOutline />
                    </Col>
                  </IconContext.Provider>
                  <strong>ICHI</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100 pt-3 pb-3' id='card4'>
                <Card.Body>
                  <IconContext.Provider value={{ color: "#364DB9", size: "40" }}>
                    <Col>
                      <IoBookOutline />
                    </Col>
                  </IconContext.Provider>
                  <strong>ICF</strong>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
          <h5 className='mb-3'><strong>Tips</strong></h5>
            <Col className='mb-3'>
              <Card className='h-100' id='card4'>
                <Card.Body>
                  <strong>A Guide for Clinical Staff</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100' id='card4'>
                <Card.Body>
                  <strong>6 Tips to Improve Clinical Coding</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100' id='card4'>
                <Card.Body>
                  <strong>Clinical Coding for Beginners</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mb-3'>
              <Card className='h-100' id='card4'>
                <Card.Body>
                  <strong>Clinical Coding Career in Malaysia</strong>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={7}>
          <Row>
          <h5 className='mb-3'><strong>Latest news</strong></h5>
            <Col>
              <Card id='card1' style={{height: '33rem'}}>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default HomePage