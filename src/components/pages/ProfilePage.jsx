import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProfilePage.css';
import { FaCamera } from 'react-icons/fa';
import UserProfile from '../../assets/people/user.png';

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(UserProfile);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Container fluid>
      <Card id='profile-card'>
        <Card.Body>
          <Row className="justify-content-center">
            <Col xs="auto" className="position-relative">
              <div className="profile-image-container">
                <Image
                  id="logo-img-profile"
                  src={selectedImage}
                  roundedCircle
                  onClick={() => document.getElementById('file-input').click()}
                  className="profile-image"
                />
                <div className="overlay">
                  <FaCamera className="camera-icon" />
                </div>
              </div>
              <input
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Please fill in Full Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Please fill in E-mail" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Please fill in Password" />
          </Form.Group>
          <Row className='mb-5'>
            <Col className='pt-1'>Set Download Passcode</Col>
            <Col align='right'>
              <Form.Check
                type="switch"
                id="custom-switch"
              />
            </Col>
          </Row>
          <Col align='right'>
            <Button variant="primary" id="profile-button">Save</Button>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
