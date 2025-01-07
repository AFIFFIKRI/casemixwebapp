//import { useState } from 'react';
import { Row, Col, Card,  } from 'react-bootstrap';
//import MoreVertIcon from '@mui/icons-material/MoreVert';  
//import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Typography, Button, } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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

const PatientListDashboard = () => {
  return (
    <>
    <Row>
        <Col>
            <StyledCard className='mb-4'>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Typography variant="h5" style={{fontWeight: 'bold'}}>Patient List</Typography>
                            <Typography style={{fontSize: 14}}>Patient Records Management</Typography>
                        </Col>
                        <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'flex-end', padding: 5}}>
                            <Button 
                            variant="contained" 
                            style={{
                            backgroundColor: '#044cc0', 
                            marginRight: 10
                            }}>+ New Patient</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </StyledCard>
        </Col>
    </Row>

    <Row>
        <Col>
            <StyledCard className='mb-4'>
                <Card.Body>
                    <Row style={{padding: 10,}}>
                        <Col md={8} sm={12}>
                            <Typography style={{fontWeight: 'bold'}}>All Patient List</Typography>
                        </Col>
                        <Col md={4} sm={12}>
                            <TextField
                            id="search-input"
                            label="Search"
                            variant="outlined"
                            fullWidth
                            size="small"
                            //value={searchTerm}
                            //onChange={(e) => setSearchTerm(e.target.value)}
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
                    <Row>
                        <Col>
                            <table style={{width: '100%'}}>
                                <thead>
                                    <tr>
                                        <th style={{width: '60%', padding: 10}}><Typography>Name</Typography></th>
                                        <th style={{width: '15%', padding: 10, textAlign: 'right'}}><Typography>Status</Typography></th>
                                        <th style={{width: '25%', padding: 10, textAlign: 'right'}}><Typography>Action</Typography></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{width: '60%', padding: 10}}>
                                            <Typography>John Doe - (MRN17332)</Typography>
                                            <Typography style={{fontSize: 12}}>06/01/2025 | 10:00 AM </Typography>
                                        </td>
                                        <td style={{width: '15%', padding: 10, textAlign: 'right'}}>
                                            <Typography style={{fontSize: 12}}>Completed</Typography>
                                        </td>
                                        <td style={{width: '25%', padding: 10, textAlign: 'right'}}>
                                            <Typography style={{fontSize: 12}}>Discharged</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '60%', padding: 10}}>
                                            <Typography>John Doe - (MRN17332)</Typography>
                                            <Typography style={{fontSize: 12}}>06/01/2025 | 10:00 AM </Typography>
                                        </td>
                                        <td style={{width: '15%', padding: 10, textAlign: 'right'}}>
                                            <Typography style={{fontSize: 12}}>Today</Typography>
                                        </td>
                                        <td style={{width: '25%', padding: 10, textAlign: 'right'}}>
                                            <Typography style={{fontSize: 12}}>
                                                <RemoveRedEyeOutlinedIcon 
                                                style={{
                                                    fontSize: 40,
                                                    backgroundColor: 'green',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    color: 'white',
                                                    margin: 5,
                                                }}/> 
                                                <ModeEditOutlinedIcon 
                                                style={{
                                                    fontSize: 40,
                                                    backgroundColor: '#044cc0',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    color: 'white',
                                                    margin: 5,
                                                }}/>  
                                                <DeleteForeverOutlinedIcon 
                                                style={{
                                                    fontSize: 40,
                                                    backgroundColor: 'red',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    color: 'white',
                                                    margin: 5,
                                                }}/> 
                                            </Typography>
                                        </td>
                                    </tr><tr>
                                        <td style={{width: '60%', padding: 10}}>
                                            <Typography>John Doe - (MRN17332)</Typography>
                                            <Typography style={{fontSize: 12}}>06/01/2025 | 10:00 AM </Typography>
                                        </td>
                                        <td style={{width: '15%', padding: 10, textAlign: 'right'}}>
                                            <Typography style={{fontSize: 12}}>Progress</Typography>
                                        </td>
                                        <td style={{width: '25%', padding: 10, textAlign: 'right'}}>
                                        <Typography style={{fontSize: 12}}>
                                                <RemoveRedEyeOutlinedIcon 
                                                style={{
                                                    fontSize: 40,
                                                    backgroundColor: 'green',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    color: 'white',
                                                    margin: 5,
                                                }}/> 
                                                <ModeEditOutlinedIcon 
                                                style={{
                                                    fontSize: 40,
                                                    backgroundColor: '#044cc0',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    color: 'white',
                                                    margin: 5,
                                                }}/>  
                                                <DeleteForeverOutlinedIcon 
                                                style={{
                                                    fontSize: 40,
                                                    backgroundColor: 'red',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    color: 'white',
                                                    margin: 5,
                                                }}/> 
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Card.Body>
            </StyledCard>
        </Col>
    </Row>
    </>
  )
}

export default PatientListDashboard