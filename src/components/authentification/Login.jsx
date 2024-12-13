import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import casemixlogodark from "../../assets/logo/logo_dark.png";
import { LuArrowLeftSquare } from "react-icons/lu";
import { PiArrowLeft } from "react-icons/pi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import "../authentification/authentification.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleLogin2 = (e) => {
    e.preventDefault();
    navigate("/dashboardpublic");
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <>
      <Container className="login-screen">
        <Row>
          <Col>
            <Card id="login-card">
              <Card.Body className="text-start">
                <HiOutlineArrowLeft
                  onClick={handleBack}
                  cursor="pointer"
                  size={30}
                  className="text-dark"
                />
              </Card.Body>

              <Card.Body>
                <Image className="mb-3" id="logo-img" src={casemixlogodark} />
                <h3 className="mb-3">
                  <strong>Welcome</strong>
                </h3>
                <Form onSubmit={handleLogin}>
                  <Form.Control
                    className="mb-3"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    // required
                    size="md"
                  />
                  <Form.Control
                    className="mb-3"
                    id="password"
                    type="password"
                    placeholder="Password"
                    // required
                    size="md"
                  />
                  <div className="d-grid gap-2 mb-3">
                    <Button type="submit" id="login-button" size="md">
                      Login as doctor
                    </Button>
                  </div>
                </Form>

                <Form >
                  <div className="d-grid gap-2 mb-3">
                    <Button type="submit" id="login-button" size="md" onClick={handleLogin2}>
                      Login as public
                    </Button>
                  </div>
                </Form>

                
                {/* <div className="d-grid gap-2 mb-3">
                  <Button href="/dashboardpublic" type="submit" id="login-button" size="md">
                  Login as public
                  </Button>
                </div> */}

                <p className="forgot-password">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </p>
                <p className="sign-up">
                  Don&apos;t have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/sign-up">
                    Sign Up
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
