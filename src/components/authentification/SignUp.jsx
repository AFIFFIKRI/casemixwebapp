import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IconContext } from "react-icons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const phoneInputRef = useRef(null);
  const itiInstance = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      // Destroy any previous instance to avoid conflicts
      if (itiInstance.current) {
        itiInstance.current.destroy();
      }

      // Initialize intlTelInput
      itiInstance.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "my",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }

    // Cleanup on component unmount
    return () => {
      if (itiInstance.current) {
        itiInstance.current.destroy();
      }
    };
  }, []);

  const handleBack = () => {
    navigate("/login"); // Navigates to the login page
  };

  return (
    <>
      <Container className="login-screen">
        <Row>
          <Col>
            <Card id="login-card">
              <Card.Body>
                <Row align="left">
                  <Col md={2} style={{ paddingTop: "5px", cursor: "pointer" }}>
                    <IconContext.Provider
                      value={{ color: "#252525", size: "30" }}
                    >
                      <HiOutlineArrowLeft onClick={handleBack} />
                    </IconContext.Provider>
                  </Col>
                  <Col>
                    <h3 id="sign-up-text" className="mb-3">
                      <strong>Sign Up</strong>
                    </h3>
                  </Col>
                </Row>
                <Form>
                  <Form.Group id="sign-up-text" className="mb-1">
                    <Form.Label>User Level</Form.Label>
                    <Form.Select aria-label="Default select example" size="md">
                      <option>Select user level</option>
                      <option value="public">Public</option>
                      <option value="doctor">Doctor</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group id="sign-up-text" className="mb-1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="mb-3"
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      required
                      size="md"
                    />
                  </Form.Group>

                  <Form.Group id="sign-up-text" className="mb-1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="mb-3"
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      required
                      size="md"
                    />
                  </Form.Group>

                  <Form.Group id="sign-up-text" className="mb-1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="mb-3"
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                      size="md"
                    />
                  </Form.Group>

                  <Form.Group id="sign-up-text" className="mb-1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      className="mb-3"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      required
                      size="md"
                    />
                  </Form.Group>

                  <Form.Group id="sign-up-text" className="mb-1">
                    <Form.Label htmlFor="phone">Phone</Form.Label>{" "}
                    {/* Ensure the label is associated with the input */}
                    <div>
                      {" "}
                      {/* Wrap the input in a div to avoid intl-tel-input affecting the label */}
                      <Form.Control
                        className="mb-3"
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required
                        size="md"
                        // ref={phoneInputRef} // Attach the ref to this input
                      />
                    </div>
                  </Form.Group>

                  <div className="d-grid gap-2 mt-3 mb-3">
                    <Button type="button" id="reset-button" size="md">
                      Sign Up
                    </Button>
                    <Button
                      type="button"
                      id="back-button"
                      size="md"
                      onClick={handleBack}
                    >
                      <IconContext.Provider
                        value={{ color: "#364DB9", size: "15" }}
                      >
                        <HiOutlineArrowLeft onClick={handleBack} />
                      </IconContext.Provider>{" "}
                      Back
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
