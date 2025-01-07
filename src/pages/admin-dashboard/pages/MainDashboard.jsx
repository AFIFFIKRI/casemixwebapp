import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Calendar from 'react-calendar';
import '../pages/calendar.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserImg from '../../../assets/user/man.png';

const MainDashboard = () => {
  const [date, setDate] = useState(new Date());

  const data = [
    { title: 'Follow up', date: 'Wed, 7 Jan 3:20 PM' },
    { title: 'Consultation', date: 'Fri, 9 Jan 2:30 PM' },
  ];

  const medicalCheckupData = [
    {
      title: 'Medical Checkup',
      date: '03 Jan 2025',
      nextAppointment: '10 Jan 2025',
    },
    {
      title: 'Dental Checkup',
      date: '31 Dec 2024',
      nextAppointment: '13 Jan 2025',
    },
    {
      title: 'Eye Checkup',
      date: '24 Dec 2024',
      nextAppointment: '17 Jan 2025'
    },
  ];

  return (
    <>
    <Row className='mb-3'>
      <Col md={12} align='right'>
        <Row>
          <Col>
          <Button style={{marginRight: 10, backgroundColor: '#044ccc'}}>Schedule</Button>
          <Button style={{marginRight: 10, backgroundColor: '#044ccc'}}>Invoice</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="d-flex align-items-stretch">
      <Col md={8} className='mb-3'>
        <Card className='mb-3 p-2 h-100' style={{border: 'none', borderRadius: 15,}}>
          <Card.Body>
          <Row className="mb-3">
            <Col xs={3} className="d-flex justify-content-center align-items-center">
              <Image 
                src={UserImg}
                width="100"
                height="100" 
                roundedCircle
                alt="User"
              />
            </Col>
            <Col xs={9} style={{justifyContent: 'center', alignContent: 'center'}}>
              <div style={{ fontSize: 18, fontWeight: 'bold' }}>Muhammad Hamsani Irwan Hamzah</div>
              <Row>
                <Col xs={6} style={{ fontSize: 13 }}>Age: 33</Col>
                <Col xs={6} style={{ fontSize: 13 }}>Weight: 80kg</Col>
              </Row>
              <Row>
                <Col xs={6} style={{ fontSize: 13 }}>Last Login: 01 Jan 2025</Col>
                <Col xs={6} style={{ fontSize: 13 }}>Height: 176cm</Col>
              </Row>
            </Col>
          </Row>
            <div className='mt-3 mb-3'>Recent Activities</div>
            <Row>
              {medicalCheckupData.map((checkup, index) => (
                <Col key={index}>
                  <Card className='mb-3' style={{ border: 'none', borderRadius: 15, backgroundColor: '#1e3d58', color: 'white' }}>
                    <Card.Body>
                      <span style={{ fontSize: 16, fontWeight: 'bold' }}>{checkup.title}</span><br />
                      <span style={{ fontSize: 14, opacity: 0.8 }}>{checkup.date}</span><br />
                      <span style={{ fontSize: 14, marginTop: 10, opacity: 0.7 }}>Next Appointment: {checkup.nextAppointment}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className='mb-3'>
        <Card className='mb-3 p-2 h-100' style={{border: 'none', borderRadius: 15,}}>
          <Card.Body>
            <Calendar
              onChange={setDate}
              value={date}
              className="custom-calendar"
              style={{ marginTop: 20 }}
            />
            <div className='p-2'>
              <div>Upcoming Schedule</div>
              <div style={{fontSize: 12,}}>
                {data.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    <div style={{ width: '50%' }}>
                      <span>{item.title}</span>
                    </div>
                    <div style={{ width: '48%', textAlign: 'right' }}>
                      <span>{item.date}</span>
                    </div>
                    <div style={{ width: '2%' }}>
                      <MoreVertIcon style={{ fontSize: 'medium' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default MainDashboard