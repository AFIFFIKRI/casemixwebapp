import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Card, Row } from 'react-bootstrap';
import { TextField, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';
import casemixLogo from '../assets/logo/casemix-logo-latest.png';
import googleLogo from '../assets/icon/google.png';
import facebookLogo from '../assets/icon/facebook.png';
import appleLogo from '../assets/icon/apple-logo.png';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate('/public');
  };

  const handleLogin2 = () => {
    navigate('/patient');
  };

  const handleLogin3 = () => {
    navigate('/doctor');
  };

  const handleLogin4 = () => {
    navigate('/admin');
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh', backgroundColor: 'whitesmoke' }}
      >
        <Card style={{ width: 400, border: 'none', borderRadius: 20, padding: 20 }}>
          <div>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ArrowBackOutlinedIcon />
            </Link>
          </div>
          <Card.Body>
            <img
              src={casemixLogo}
              alt="React logo"
              style={{
                width: 40,
                height: 35,
                display: 'block',
                margin: '0 auto',
                marginTop: 20,
                marginBottom: 20,
              }}
            />
            <Col md={12} className="mb-3">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 15 }}
              />

              <TextField
                id="password-field"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 5 }}
              />
              <div
                style={{
                  marginBottom: 15,
                  textAlign: 'right',
                  fontSize: 12,
                }}
              >
                <Link to="/forgetpassword" style={{ textDecoration: 'none' }}>
                  Forgot Password
                </Link>
              </div>
              <Button
                variant="contained"
                fullWidth
                style={{ backgroundColor: '#044ccc', marginBottom: 15, }}
                onClick={handleLogin} // Call handleLogin on click
              >
                Login Public
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{ backgroundColor: '#044ccc', marginBottom: 15, }}
                onClick={handleLogin2} // Call handleLogin on click
              >
                Login Patient
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{ backgroundColor: '#044ccc', marginBottom: 15, }}
                onClick={handleLogin3} // Call handleLogin on click
              >
                Login Doctor
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{ backgroundColor: '#044ccc', marginBottom: 15, }}
                onClick={handleLogin4} // Call handleLogin on click
              >
                Login Admin
              </Button>
            </Col>
            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
              <p style={{ fontSize: 12, margin: '0 10px', whiteSpace: 'nowrap' }}>Or login with</p>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
            </div>
            <Row
              style={{ margin: '20px 0', flexWrap: 'nowrap', overflowX: 'auto' }}
              className="d-flex justify-content-between"
            >
              <Card style={{ textAlign: 'center', flex: '0 0 auto', width: '100px', borderRadius: 15 }}>
                <Card.Body>
                  <img
                    src={googleLogo}
                    alt="Google logo"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </Card.Body>
              </Card>
              <Card style={{ textAlign: 'center', flex: '0 0 auto', width: '100px', borderRadius: 15 }}>
                <Card.Body>
                  <img
                    src={facebookLogo}
                    alt="Facebook logo"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </Card.Body>
              </Card>
              <Card style={{ textAlign: 'center', flex: '0 0 auto', width: '100px', borderRadius: 15 }}>
                <Card.Body>
                  <img
                    src={appleLogo}
                    alt="Apple logo"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </Card.Body>
              </Card>
            </Row>
            <div className="mb-3" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 12 }}>
                Do not have an account?{' '}
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  Register here
                </Link>
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 12 }}>
                © 2024 - {new Date().getFullYear()} Casemix Solutions
                <br />
                Powered by QK Prima
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
