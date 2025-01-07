// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Col, Card } from 'react-bootstrap';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';
import casemixLogo from '../assets/logo/casemix-logo-latest.png';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const ForgotPassword = () => {

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh', backgroundColor: 'whitesmoke' }}
      >
        <Card style={{ width: 400, border: 'none', borderRadius: 20, padding: 20,}}>
          <div>
            <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
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
            <Col md={12} className='mb-3'>
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
                <Button 
                variant="contained" 
                fullWidth 
                style={{backgroundColor: '#044ccc'}}
                >
                    Submit
                </Button>
            </Col>
            
            <div style={{textAlign: 'center'}}><p style={{fontSize: 12}}>© 2024 - {new Date().getFullYear()} Casemix Solutions<br></br>
            Powered by QK Prima</p></div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ForgotPassword;
