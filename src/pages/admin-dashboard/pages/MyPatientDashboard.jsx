import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import MoreVertIcon from '@mui/icons-material/MoreVert';  
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Typography } from '@mui/material';
import styled from '@emotion/styled';

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

const Title = styled(Typography)`
  font-weight: bold;
  color: #252525;
  margin-bottom: 16px;
`;

const PatientCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const PatientInfo = styled.div`
  width: 50%;
`;

const PatientName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const PatientDetails = styled.div`
  font-size: 12px;
  color: #555;
`;

const NoPatientsText = styled(Typography)`
  text-align: center;
  color: #888;
  font-size: 16px;
  margin-top: 24px;
`;

const MyPatientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for patients
  const patients = [
    { name: "John Doe", mrn: "MRN12345", age: 30, gender: "Male", diagnosis: "Flu" },
    { name: "Jane Smith", mrn: "MRN12346", age: 25, gender: "Female", diagnosis: "Cough" },
    { name: "Michael Johnson", mrn: "MRN12347", age: 45, gender: "Male", diagnosis: "Diabetes" },
    { name: "Emily Davis", mrn: "MRN12348", age: 60, gender: "Female", diagnosis: "Hypertension" },
    { name: "Chris Lee", mrn: "MRN12349", age: 32, gender: "Male", diagnosis: "Asthma" },
    { name: "Sarah Brown", mrn: "MRN12350", age: 22, gender: "Female", diagnosis: "Migraine" },
    { name: "David Wilson", mrn: "MRN12351", age: 35, gender: "Male", diagnosis: "Back Pain" },
    { name: "Laura Garcia", mrn: "MRN12352", age: 40, gender: "Female", diagnosis: "Anxiety" },
    { name: "James Martinez", mrn: "MRN12353", age: 50, gender: "Male", diagnosis: "Arthritis" },
    { name: "Sophia Rodriguez", mrn: "MRN12354", age: 28, gender: "Female", diagnosis: "Allergy" }
  ];

  // Filter patients based on the search term
  const filteredPatients = patients.filter((patient) => {
    return (
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Row>
      <Col md={12}>
        <StyledCard>
          <Card.Body>
            <Row style={{padding: 10}}>
              <Col md={9} sm={12}>
                <Title variant="h5">Patient List</Title>
              </Col>
              <Col md={3} sm={12}>
                <TextField
                  id="search-input"
                  label="Search"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

            {/* Display filtered patients */}
            <div>
              {filteredPatients.length === 0 ? (
                <NoPatientsText variant="body1">No patients found.</NoPatientsText>
              ) : (
                filteredPatients.map((patient, index) => (
                  <PatientCard key={index}>
                    <PatientInfo>
                      <PatientName>{patient.name} - ({patient.mrn})</PatientName>
                      <PatientDetails>
                        Age: {patient.age} | Gender: {patient.gender} | Diagnosis: {patient.diagnosis}
                      </PatientDetails>
                    </PatientInfo>
                    <div>
                      <MoreVertIcon style={{ fontSize: 'medium', cursor: 'pointer' }} />
                    </div>
                  </PatientCard>
                ))
              )}
            </div>
          </Card.Body>
        </StyledCard>
      </Col>
    </Row>
  );
}

export default MyPatientDashboard;
