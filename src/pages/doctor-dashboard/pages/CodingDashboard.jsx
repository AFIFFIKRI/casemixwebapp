import { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Grid, Stepper, Step, StepLabel, Button, Typography, Box, TextField, MenuItem, InputAdornment, IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from 'react-calendar';
import '../pages/calendar.css';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const steps = ['Patient Information', 'Clinical Information', 'Review'];

const CodingDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    mrnNumber: '',
    fullName: '',
    insurance: '',
    gender: '',
    birthDate: new Date(),
    ageYears: '',
    ageDays: '',
    weight: '',
    adlSubAcute: 0,
    adlChronic: 0,
    admissionDate: new Date(),
    dischargeDate: new Date(),
    dischargeStatus: '',
    patientType: '',
    sProcedure: '',
    sProsthesis: '',
    sInvestigation: '',
    sDrug: '',
    ownership: '',
    regional: '',
    hospitalType: '',
    tariffClass: '',
    diagnosis: '',
    procedures: '',
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleDateChange = (date) => {
  //   setFormData({ ...formData, birthDate: date });
  //   setCalendarOpen(false);
  // };

  const handleDateChange = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
  
    // Calculate age in years
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
  
    // Adjust age if birth date hasn't occurred yet in the current year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      ageYears--;
    }
  
    // Calculate age in days
    const ageDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  
    setFormData({
      ...formData,
      birthDate: date,
      ageYears: ageYears.toString(), // Convert to string for the TextField
      ageDays: ageDays.toString(),
    });
  
    setCalendarOpen(false);
  };
  

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, doctorName: '' }]);
  };

  const handleDoctorNameChange = (id, value) => {
    setRows(rows.map(row => (row.id === id ? { ...row, doctorName: value } : row)));
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleMoveDoctor = (id, direction) => {
    const index = rows.findIndex(row => row.id === id);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= rows.length) return;

    // Swap the doctor names while keeping the ids intact
    const updatedRows = [...rows];
    const temp = updatedRows[index].doctorName;
    updatedRows[index].doctorName = updatedRows[newIndex].doctorName;
    updatedRows[newIndex].doctorName = temp;

    setRows(updatedRows);
  };

  const handleIncrement = (field) => {
    setFormData({ ...formData, [field]: formData[field] + 1 });
  };

  const handleDecrement = (field) => {
    setFormData({ ...formData, [field]: formData[field] > 0 ? formData[field] - 1 : 0 });
  };


  const renderStepContent = (step) => {
    if (step === 0) {
      return (
        <form>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="MRN Number"
              name="mrnNumber"
              value={formData.mrnNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              size='small'
            />
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              size='small'
            />
            <TextField
              label="Insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              fullWidth
              margin="normal"
              size='small'
            />
            <TextField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              select
              fullWidth
              margin="normal"
              size='small'
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                    label="Date of Birth"
                    value={formData.birthDate.toDateString()}
                    fullWidth
                    margin="normal"
                    size='small'
                    InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton onClick={() => setCalendarOpen(!calendarOpen)}>
                            <CalendarMonthIcon />
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}
                />
                {calendarOpen && (
                    <Box sx={{ mt: 2, mb: 2, width: 280 }}>
                    <Calendar
                        className="custom-calendar2"
                        onChange={handleDateChange}
                        value={formData.birthDate}
                    />
                    </Box>
                )}
                </Grid>

                <Grid item xs={6}>
                <TextField
                    label="Age (in Years)"
                    name="ageYears"
                    value={formData.ageYears}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    size='small'
                    disabled
                />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                    label="Age (in Days)"
                    name="ageDays"
                    value={formData.ageDays}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    size='small'
                    disabled
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="Weight (Newborn)"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    size='small'
                    disabled
                />
                </Grid>
            </Grid>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddRow} 
                style={{ 
                    marginTop: 15, 
                    backgroundColor: '#044ccc'
                }}>
                    <AddBoxOutlinedIcon 
                    style={{
                        fontSize: 18,
                    }}/>&nbsp;&nbsp;Add
                </Button>
            </Box>
            <table style={{ width: '100%', marginTop: 15, marginBottom: 15 }}>
              <thead>
                <tr>
                  <td
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      padding: 5,
                      width: '5%',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    No
                  </td>
                  <td
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      padding: 5,
                      width: '70%',
                      fontWeight: 'bold',
                    }}
                  >
                    Doctor Name
                  </td>
                  <td
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      padding: 5,
                      width: '25%',
                      fontWeight: 'bold',
                    }}
                  >
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.id}>
                    <td style={{ borderWidth: 1, borderColor: 'lightgray', padding: 5, width: '5%', textAlign: 'center' }}>
                      {row.id}
                    </td>
                    <td style={{ borderWidth: 1, borderColor: 'lightgray', padding: 5, width: '70%' }}>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={row.doctorName}
                        onChange={(e) => handleDoctorNameChange(row.id, e.target.value)}
                      />
                    </td>
                    <td style={{ borderWidth: 1, borderColor: 'lightgray', padding: 5, width: '25%' }}>
                        <ArrowUpwardOutlinedIcon 
                            style={{
                                color: 'white',
                                backgroundColor: '#044ccc',
                                borderRadius: 50,
                                fontSize: 35,
                                padding: 5,
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                            onClick={() => handleMoveDoctor(row.id, 'up')}
                        />
                        <ArrowDownwardOutlinedIcon 
                            style={{
                                color: 'white',
                                backgroundColor: '#044ccc',
                                borderRadius: 50,
                                fontSize: 35,
                                padding: 5,
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                            onClick={() => handleMoveDoctor(row.id, 'down')}
                        />
                        <DeleteOutlineOutlinedIcon 
                            style={{
                                color: 'white',
                                backgroundColor: 'red',
                                borderRadius: 50,
                                fontSize: 35,
                                padding: 5,
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                            onClick={() => handleDeleteRow(row.id)}
                        />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </form>
      );
    } else if (step === 1) {
        return (
          <form>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="MRN Number"
                name="mrnNumber"
                value={formData.mrnNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size='small'
              />
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size='small'
              />
              <TextField
                label="Patient Type"
                name="patientType"
                value={formData.patientType}
                onChange={handleChange}
                select
                fullWidth
                margin="normal"
                size='small'
              >
                <MenuItem value="Inpatient">Inpatient</MenuItem>
                <MenuItem value="Outpatient">Outpatient</MenuItem>
              </TextField>
              
              {/* Admission Date with Calendar Popup */}
              <TextField
                label="Admission Date"
                value={formData.admissionDate.toDateString()}
                fullWidth
                margin="normal"
                size='small'
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setCalendarOpen(!calendarOpen)}>
                        <CalendarMonthIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {calendarOpen && (
                <Box sx={{ mt: 2, mb: 2, width: 280 }}>
                  <Calendar
                    className="custom-calendar2"
                    onChange={(date) => handleDateChange(date, 'admissionDate')}
                    value={formData.admissionDate}
                  />
                </Box>
              )}
  
              {/* Discharge Date with Calendar Popup */}
              <TextField
                label="Discharge Date"
                value={formData.dischargeDate.toDateString()}
                fullWidth
                margin="normal"
                size='small'
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setCalendarOpen(!calendarOpen)}>
                        <CalendarMonthIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {calendarOpen && (
                <Box sx={{ mt: 2, mb: 2, width: 280 }}>
                  <Calendar
                    className="custom-calendar2"
                    onChange={(date) => handleDateChange(date, 'dischargeDate')}
                    value={formData.dischargeDate}
                  />
                </Box>
              )}
  
              {/* ADL Score Sub Acute and Chronic */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton style={{backgroundColor: 'transparent'}} onClick={() => handleDecrement('adlSubAcute')}>
                      <RemoveOutlinedIcon 
                      style={{
                        marginTop: 10,
                        backgroundColor: 'red',
                        borderRadius: 50,
                        color: 'white'
                      }} />
                    </IconButton>
                    <TextField
                      label="ADL Score Sub Acute"
                      value={formData.adlSubAcute}
                      onChange={handleChange}
                      name="adlSubAcute"
                      fullWidth
                      margin="normal"
                      size="small"
                      disabled
                    />
                    <IconButton style={{backgroundColor: 'transparent'}} onClick={() => handleIncrement('adlSubAcute')}>
                      <AddOutlinedIcon 
                      style={{
                        marginTop: 10,
                        backgroundColor: '#044ccc',
                        borderRadius: 50,
                        color: 'white'
                      }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton style={{backgroundColor: 'transparent'}} onClick={() => handleDecrement('adlChronic')}>
                      <RemoveOutlinedIcon 
                      style={{
                        marginTop: 10,
                        backgroundColor: 'red',
                        borderRadius: 50,
                        color: 'white'
                      }} />
                    </IconButton>
                    <TextField
                      label="ADL Score Chronic"
                      value={formData.adlChronic}
                      onChange={handleChange}
                      name="adlChronic"
                      fullWidth
                      margin="normal"
                      size="small"
                      disabled
                    />
                    <IconButton style={{backgroundColor: 'transparent'}} onClick={() => handleIncrement('adlChronic')}>
                      <AddOutlinedIcon 
                      style={{
                        marginTop: 10,
                        backgroundColor: '#044ccc',
                        borderRadius: 50,
                        color: 'white'
                      }} />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
  
              {/* Discharge Status Type */}
              <TextField
                label="Discharge Status Type"
                name="dischargeStatus"
                value={formData.dischargeStatus}
                onChange={handleChange}
                select
                fullWidth
                margin="normal"
                size='small'
              >
                <MenuItem value="Home and Self-care">Home and Self-care</MenuItem>
                <MenuItem value="Transfer Acute Care Facility">Transfer Acute Care Facility</MenuItem>
                <MenuItem value="Leave Again Medical Advice">Leave Again Medical Advice</MenuItem>
                <MenuItem value="Expired/Died">Expired/Died</MenuItem>
                <MenuItem value="Others/Uknown">Others/Uknown</MenuItem>
              </TextField>

              <Typography style={{fontWeight: 'bold' }}>Special Group</Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                    label="S.Procedure"
                    name="sProcedure"
                    value={formData.sProcedure}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="Special Procedure A">Special Procedure A</MenuItem>
                    <MenuItem value="Special Procedure B">Special Procedure B</MenuItem>
                </TextField>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="S.Prosthesis"
                    name="sProsthesis"
                    value={formData.sProsthesis}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="Special Prosthesis A">Special Prosthesis A</MenuItem>
                    <MenuItem value="Special Prosthesis B">Special Prosthesis B</MenuItem>
                </TextField>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                    label="S.Investigation"
                    name="sInvestigation"
                    value={formData.sInvestigation}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="Special Investigation A">Special Investigation A</MenuItem>
                    <MenuItem value="Special Investigation B">Special Investigation B</MenuItem>
                </TextField>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="S.Drug"
                    name="sDrug"
                    value={formData.sDrug}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="Special Drug A">Special Drug A</MenuItem>
                    <MenuItem value="Special Drug B">Special Drug B</MenuItem>
                </TextField>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                    label="Ownership"
                    name="ownership"
                    value={formData.ownership}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="Goverment">Goverment</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                </TextField>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="Regional"
                    name="regional"
                    value={formData.regional}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                </TextField>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                    label="Hospital Type"
                    name="hospitalType"
                    value={formData.hospitalType}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                </TextField>
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="Tariff Class"
                    name="tariffClass"
                    value={formData.tariffClass}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                    size='small'
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                </TextField>
                </Grid>
              </Grid>

              <TextField
                label="Diagnosis"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size='small'
              />

              <TextField
                label="Procedures"
                name="procedures"
                value={formData.procedures}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size='small'
              />
            </Box>
          </form>
        );
    } else if (step === 2) {
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Step 3: Review</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography><strong>MRN Number:</strong> {formData.mrnNumber}</Typography>
            <Typography><strong>Full Name:</strong> {formData.fullName}</Typography>
            <Typography><strong>Insurance:</strong> {formData.insurance}</Typography>
            <Typography><strong>Gender:</strong> {formData.gender}</Typography>
            <Typography><strong>Date of Birth:</strong> {formData.birthDate.toDateString()}</Typography>
            <Typography><strong>Age (Years):</strong> {formData.ageYears}</Typography>
            <Typography><strong>Age (Days):</strong> {formData.ageDays}</Typography>
            <Typography><strong>Weight (Newborn):</strong> {formData.weight}</Typography>
            <Typography><strong>Patient Type:</strong> {formData.patientType}</Typography>
            <Typography><strong>Admission Date:</strong> {formData.admissionDate.toDateString()}</Typography>
            <Typography><strong>Discharge Date:</strong> {formData.dischargeDate.toDateString()}</Typography>
    
            <Typography variant="h6" sx={{ mt: 2 }}>Doctors</Typography>
            {rows.length > 0 ? (
              <ul>
                {rows.map((row) => (
                  <li key={row.id}>{row.doctorName}</li>
                ))}
              </ul>
            ) : (
              <Typography>No doctors added</Typography>
            )}
          </Box>
        </Box>
      );
    }
    return <Typography>Unknown step</Typography>;
  };

  return (
    <Card style={{ border: 'none', borderRadius: 20, padding: 10 }}>
      <Card.Body>
        <Row>
          <Col>
            <Typography variant="h5" gutterBottom>
              Coding
            </Typography>
            <Box sx={{ width: '100%', mt: 4 }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ mt: 2, mb: 1 }}>{renderStepContent(activeStep)}</Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button style={{backgroundColor: 'lightgray', color: '#252525'}} disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {activeStep === steps.length - 1 ? (
                  <Button style={{backgroundColor: '#044ccc', color: 'white'}} onClick={handleReset}>Reset</Button>
                ) : (
                  <Button style={{backgroundColor: '#044ccc', color: 'white'}} onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                )}
              </Box>
            </Box>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CodingDashboard;