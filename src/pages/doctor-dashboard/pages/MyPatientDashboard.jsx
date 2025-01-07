import { useState } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import MoreVertIcon from '@mui/icons-material/MoreVert';  
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Typography, Button, TablePagination } from '@mui/material';
import styled from '@emotion/styled';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import MultilineChartRoundedIcon from '@mui/icons-material/MultilineChartRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UserImg from '../../../assets/user/man.png';

// Styled components using @emotion/styled
const StyledCard = styled(Card)`
  border: none;
  border-radius: 20px;
  //box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px,
  //transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const MyPatientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsPerPage2, setRowsPerPage2] = useState(10);

  // Dummy data for patients
  const patients = [
    { id: "1", name: "John Doe", mrn: "MRN12345", age: 30, gender: "Male", diagnosis: "Flu" },
    { id: "2", name: "Jane Smith", mrn: "MRN12346", age: 25, gender: "Female", diagnosis: "Cough" },
    { id: "3", name: "Michael Johnson", mrn: "MRN12347", age: 45, gender: "Male", diagnosis: "Diabetes" },
    { id: "4", name: "Emily Davis", mrn: "MRN12348", age: 60, gender: "Female", diagnosis: "Hypertension" },
    { id: "5", name: "Chris Lee", mrn: "MRN12349", age: 32, gender: "Male", diagnosis: "Asthma" },
    { id: "6", name: "Sarah Brown", mrn: "MRN12350", age: 22, gender: "Female", diagnosis: "Migraine" },
    { id: "7", name: "David Wilson", mrn: "MRN12351", age: 35, gender: "Male", diagnosis: "Back Pain" },
    { id: "8", name: "Laura Garcia", mrn: "MRN12352", age: 40, gender: "Female", diagnosis: "Anxiety" },
    { id: "9", name: "James Martinez", mrn: "MRN12353", age: 50, gender: "Male", diagnosis: "Arthritis" },
    { id: "10", name: "Sophia Rodriguez", mrn: "MRN12354", age: 28, gender: "Female", diagnosis: "Allergy" },
    { id: "11", name: "Spike Spiegel", mrn: "MRN12355", age: 30, gender: "Male", diagnosis: "Flu A" },
    { id: "12", name: "Popol", mrn: "MRN12356", age: 25, gender: "Female", diagnosis: "Dry Cough" },
    { id: "13", name: "Michael Jordan", mrn: "MRN12357", age: 25, gender: "Male", diagnosis: "Diabetes" },
    { id: "14", name: "Ema Watson", mrn: "MRN12358", age: 61, gender: "Female", diagnosis: "Hypertension A" },
    { id: "15", name: "Chris Evan", mrn: "MRN12359", age: 35, gender: "Male", diagnosis: "Asthma" },
    { id: "16", name: "Wes Brown", mrn: "MRN12360", age: 32, gender: "Female", diagnosis: "Migraine" },
  ];
  
  const filteredPatients = patients.filter((patient) => {
    return (
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedPatients = filteredPatients.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const patientsreschedule = [
    { name: "Spike Spiegel", appointment: "Teeth Cleaning | 2:00 PM", date: "Jan 06, 2025"},
    { name: "Julia Daniels", appointment: "Root Canal | 3:30 PM", date: "Jan 06, 2025"},
    { name: "Vicious Lyon", appointment: "Braces Adjustment | 11:00 AM", date: "Jan 08, 2025"},
    { name: "Jet Black", appointment: "Tooth Extraction | 9:00 AM", date: "Jan 09, 2025"},
    { name: "Faye Valentine", appointment: "Teeth Whitening | 1:30 PM", date: "Jan 12, 2025"},
    { name: "Edward Wong", appointment: "Oral Check-up | 4:15 PM", date: "Jan 12, 2025"},
    { name: "Ein Shepherd", appointment: "Dental Cleaning | 10:00 AM", date: "Jan 20, 2025"},
  ];

  const handleChangePage2 = (event, newPage) => {
    setPage2(newPage);
  };

  const handleChangeRowsPerPage2 = (event) => {
    setRowsPerPage2(parseInt(event.target.value, 10));
    setPage2(0);
  };

  const paginationpatientsreschedule = patientsreschedule.slice(
    page2 * rowsPerPage2,
    page2 * rowsPerPage2 + rowsPerPage2
  );

  return (
    <Row>
      <Col md={12}>
        <StyledCard className='mb-4'>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Typography variant="h5" style={{fontWeight: 'bold'}}>Patient List</Typography>
                <Typography style={{fontSize: 14}}>Appointment Scheduling and Patient Records Management</Typography>
              </Col>
              <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'flex-end', padding: 5}}>
                <Button 
                variant="contained" 
                style={{
                  backgroundColor: '#044cc0', 
                  marginRight: 10
                }}><CloudUploadIcon />&nbsp;&nbsp;Upload Files</Button>
              </Col>
            </Row>
          </Card.Body>
        </StyledCard>

        <Row className='mb-3'>
          <Col md={4} className='mb-3'>
            <StyledCard>
              <Card.Body>
                <table>
                  <tbody>
                    <tr>
                      <td style={{width: '15%', backgroundColor: '#044ccc', textAlign: 'center', borderRadius: 50}}>
                        <ApartmentOutlinedIcon style={{color: 'white'}}/>
                      </td>
                      <td style={{paddingLeft: 10,}}>
                        <Typography style={{fontWeight: 'bold', color: '#252525'}}>Total Patient</Typography>
                        <Typography style={{fontSize: 12}}>Total patient visited to your clinic</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Typography className='mt-5' variant='h4' style={{fontWeight: 'bold', color: '#252525'}}>
                  330
                </Typography>
                <Typography style={{color: '#252525', fontSize: 12}}>
                  <ArrowCircleUpRoundedIcon style={{color: 'green'}}/> + 33% Up from last month
                </Typography>
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={4} className='mb-3'>
          <StyledCard>
              <Card.Body>
                <table>
                  <tbody>
                    <tr>
                      <td style={{width: '15%', backgroundColor: '#3b74d4', textAlign: 'center', borderRadius: 50}}>
                        <PaidRoundedIcon style={{color: 'white'}}/>
                      </td>
                      <td style={{paddingLeft: 10,}}>
                        <Typography style={{fontWeight: 'bold', color: '#252525'}}>Total Revenue</Typography>
                        <Typography style={{fontSize: 12}}>Total patient visited to your clinic</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Typography className='mt-5' variant='h4' style={{fontWeight: 'bold', color: '#252525'}}>
                  RM 23,330.33
                </Typography>
                <Typography style={{color: '#252525', fontSize: 12}}>
                  <ArrowCircleDownRoundedIcon style={{color: 'red'}}/> + 3% Down from last month
                </Typography>
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={4} className='mb-3'>
          <StyledCard>
              <Card.Body>
                <table>
                  <tbody>
                    <tr>
                      <td style={{width: '15%', backgroundColor: 'red', textAlign: 'center', borderRadius: 50}}>
                        <MultilineChartRoundedIcon style={{color: 'white'}}/>
                      </td>
                      <td style={{paddingLeft: 10,}}>
                        <Typography style={{fontWeight: 'bold', color: '#252525'}}>Total Appointment</Typography>
                        <Typography style={{fontSize: 12}}>Total patient visited to your clinic</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Typography className='mt-5' variant='h4' style={{fontWeight: 'bold', color: '#252525'}}>
                  331
                </Typography>
                <Typography style={{color: '#252525', fontSize: 12}}>
                  <ArrowCircleUpRoundedIcon style={{color: 'green'}}/> + 20% Up from last month
                </Typography>
              </Card.Body>
            </StyledCard>
          </Col>
        </Row>

        <Row style={{ display: 'flex' }}>
          <Col md={8} className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledCard style={{ flex: 1 }}>
              <Card.Body>
                <Row style={{padding: 10,}}>
                  <Col md={8} sm={12}>
                    <Typography variant="h6" style={{fontWeight: 'bold'}}>Patient List</Typography>
                  </Col>
                  <Col md={4} sm={12}>
                    <TextField
                      id="search-input"
                      label="Search"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{ marginBottom: 10}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Col>
                </Row>
                <div>
                  {paginatedPatients.length === 0 ? (
                    <Typography variant="body1">No patients found.</Typography>
                  ) : (
                    paginatedPatients.map((patient, index) => (
                      <table key={index} style={{ width: "100%" }}>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid lightgray" }}>
                            <td style={{ width: "10%", padding: 15 }}>
                              <Image
                                src={UserImg}
                                width="40"
                                height="40"
                                roundedCircle
                                alt="User"
                              />
                            </td>
                            <td>
                              <Typography style={{ fontSize: 14 }}>
                                {patient.name} - ({patient.mrn})
                              </Typography>
                              <Typography style={{ fontSize: 12 }}>
                                Age: {patient.age} | Gender: {patient.gender} | Diagnosis: {patient.diagnosis}
                              </Typography>
                            </td>
                            <td style={{ width: "5%", textAlign: "center" }}>
                              <MoreVertIcon style={{ fontSize: "medium", cursor: "pointer" }} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))
                  )}
                </div>
                <TablePagination
                  component="div"
                  count={filteredPatients.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={4} className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledCard style={{ flex: 1 }}>
            <Card.Body style={{paddingRight: 20}}>
              <div style={{marginBottom: 20, padding: 10}}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Reschedule List
                </Typography>
              </div>
              {paginationpatientsreschedule.map((patient, index) => (
                <table key={index} style={{width: '100%'}}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid lightgray", }}>
                      <td style={{ width: "15%", padding: 15 }}>
                        <Image
                          src={UserImg}
                          width="40"
                          height="40"
                          roundedCircle
                          alt="User"
                        />
                      </td>
                      <td>
                        <Typography style={{ fontSize: 14 }}>{patient.name}</Typography>
                        <Typography style={{ fontSize: 12 }}>{patient.appointment}</Typography>
                        <Typography style={{ fontSize: 12 }}>{patient.date}</Typography>
                      </td>
                      <td style={{ width: "25%", textAlign: 'center'}}>
                        <Typography style={{ fontSize: 12 }}>Reschedule</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
              <TablePagination
                component="div"
                count={patientsreschedule.length}
                page={page2}
                onPageChange={handleChangePage2}
                rowsPerPage={rowsPerPage2}
                onRowsPerPageChange={handleChangeRowsPerPage2}
              />
            </Card.Body>
            </StyledCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MyPatientDashboard;
