import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import '../CodingPage.css';

const GroupPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
            <h5 className='mb-4' style={{fontWeight: 'bold'}}>Grouping List</h5>
            <InputGroup className="mb-3">
              <Form.Control
              id='search-icon-input'
                placeholder="Search patient&apos;s MRN, name or insurance number"
                aria-label="Search"
                aria-describedby="search-icon-input-icon"
              />
              <InputGroup.Text id="search-icon-input-icon"><IoIosSearch /></InputGroup.Text>
            </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className='mb-3' id='group-card'>
            <Card.Header id='group-card-header' align='right'>
              <BsThreeDotsVertical />
            </Card.Header>
            <Card.Body>
              1
            </Card.Body>
            <Card.Footer className='mb-2' id='group-card-footer' align='right'>
              <Row>
                <Col sm={2}><Form.Check type='checkbox' id='group-checkbox' label='' /></Col>
                <Col sm={4}><Button id='group-button-download'>Download</Button></Col>
                <Col><Button id='group-button'>Group</Button></Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='mb-3' id='group-card'>
            <Card.Header id='group-card-header' align='right'>
              <BsThreeDotsVertical />
            </Card.Header>
            <Card.Body>
              1
            </Card.Body>
            <Card.Footer className='mb-2' id='group-card-footer' align='right'>
              <Row>
                <Col sm={2}><Form.Check type='checkbox' id='group-checkbox' label='' /></Col>
                <Col sm={4}><Button id='group-button-download'>Download</Button></Col>
                <Col><Button id='group-button'>Group</Button></Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='mb-3' id='group-card'>
            <Card.Header id='group-card-header' align='right'>
              <BsThreeDotsVertical />
            </Card.Header>
            <Card.Body>
              1
            </Card.Body>
            <Card.Footer className='mb-2' id='group-card-footer' align='right'>
              <Row>
                <Col sm={2}><Form.Check type='checkbox' id='group-checkbox' label='' /></Col>
                <Col sm={4}><Button id='group-button-download'>Download</Button></Col>
                <Col><Button id='group-button'>Group</Button></Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default GroupPage