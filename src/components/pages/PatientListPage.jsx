import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import './PatientListPage.css';

const PatientListPage = () => {
  
  return (
    <Container fluid>
      <Row>
        <Col>
        <Card id='patient-list-card'>
          <Card.Body>
            <h5 className='mb-4' style={{fontWeight: 'bold'}}>Patient&apos;s List</h5>
            <InputGroup className="mb-3">
              <Form.Control
              id='search-icon-input'
                placeholder="Search patient&apos;s MRN, name or insurance number"
                aria-label="Search"
                aria-describedby="search-icon-input-icon"
              />
              <InputGroup.Text id="search-icon-input-icon"><IoIosSearch /></InputGroup.Text>
            </InputGroup>

            <Table bordered responsive>
              <thead>
                <tr>
                  <th>MRN</th>
                  <th colSpan={3}>Patient Name</th>
                  <th style={{textAlign:'center'}}>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{width:'20%'}}>MRN123</td>
                  <td style={{width:'1%', paddingLeft:'12px',borderRight:'none'}}>
                    <Form.Check type='checkbox' id='table-checkbox' label='' />
                  </td>
                  <td style={{width:'68%',borderLeft:'none',borderRight:'none'}}>Safuan Johari</td>
                  <td style={{width:'1%',borderLeft:'none'}}><BsThreeDotsVertical /></td>
                  <td style={{width:'10%', textAlign:'center'}}>View</td>
                </tr>
                <tr>
                  <td style={{width:'20%'}}>MRN123</td>
                  <td style={{width:'1%', paddingLeft:'12px',borderRight:'none'}}>
                    <Form.Check type='checkbox' id='table-checkbox' label='' />
                  </td>
                  <td style={{width:'68%',borderLeft:'none',borderRight:'none'}}>Hamsani Irwan</td>
                  <td style={{width:'1%',borderLeft:'none'}}><BsThreeDotsVertical /></td>
                  <td style={{width:'10%', textAlign:'center'}}>View</td>
                </tr>
                <tr>
                  <td style={{width:'20%'}}>MRN123</td>
                  <td style={{width:'1%', paddingLeft:'12px',borderRight:'none'}}>
                    <Form.Check type='checkbox' id='table-checkbox' label='' />
                  </td>
                  <td style={{width:'68%',borderLeft:'none',borderRight:'none'}}>Ahmad Zaki</td>
                  <td style={{width:'1%',borderLeft:'none'}}><BsThreeDotsVertical /></td>
                  <td style={{width:'10%', textAlign:'center'}}>View</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PatientListPage