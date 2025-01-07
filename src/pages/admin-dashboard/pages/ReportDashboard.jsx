//import { useState } from 'react';
import { Row, Col, Card,  } from 'react-bootstrap';
//import MoreVertIcon from '@mui/icons-material/MoreVert';  
//import SearchIcon from '@mui/icons-material/Search';
import { Typography, Button, } from '@mui/material';
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

const ReportDashboard = () => {
  return (
    <>
    <Row>
        <Col>
            <StyledCard className='mb-4'>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Typography variant="h5" style={{fontWeight: 'bold'}}>Report</Typography>
                            <Typography style={{fontSize: 14}}>Records Management</Typography>
                        </Col>
                        <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'flex-end', padding: 5}}>
                            <Button 
                            variant="contained" 
                            style={{
                            backgroundColor: '#044cc0', 
                            marginRight: 10
                            }}>+ New Doctor</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </StyledCard>
        </Col>
    </Row>

    </>
  )
}

export default ReportDashboard