import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login'); // Navigates to the login page
  };

  return (
    <>
      <Container className="login-screen">
        <Row>
          <Col>
            <Card id="login-card">
                <Card.Body>
                  <Row align='left'>
                    <Col md={2} style={{paddingTop: '5px', cursor: 'pointer'}}>
                      <IconContext.Provider value={{ color: "#252525", size: "30" }}>
                        <HiOutlineArrowLeft  onClick={handleBack}/>
                      </IconContext.Provider>
                      </Col>
                      <Col>
                      <h3 id="forget-password-text" className="mb-3"><strong>Forget Password</strong></h3>
                      </Col>
                  </Row>
                  <Form>
                  <Form.Group id="forget-password-text" className="mb-1" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control className="mb-3" id='email' type="email" placeholder="E-mail" required size="md"/>
                  </Form.Group>
                  <div className="d-grid gap-2 mb-3">
                      <Button type="button" id="reset-button" size="md">
                      Reset Password
                      </Button>
                      <Button type="button" id="back-button" size="md" onClick={handleBack}>
                      <IconContext.Provider value={{ color: "#364DB9", size: "15" }}>
                        <HiOutlineArrowLeft  onClick={handleBack}/>
                      </IconContext.Provider> Back
                      </Button>
                  </div>
                  </Form>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgetPassword;
