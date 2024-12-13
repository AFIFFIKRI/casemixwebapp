import React from "react";
import { Form, Col, Row, Button, Table, Container } from "react-bootstrap";

const ResultSummary = () => {
  return (
    <Form.Group className="mb-3 mt-5 ">
      <p className="mb-3" style={{ fontWeight: "" }}>
        Result Summary
      </p>
      <Row className="mb-3">
        <Col md={1}>
          <Form.Label>UNUCBG</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            className="text-center"
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
        <Col md={8}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
        <Col md={1}>
          <Form.Label>UNUCSP</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="text-lg-start" md={1}>
          <Form.Label>UNUSA</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            className="text-center"
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
        <Col md={8}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
        <Col md={1}>
          <Form.Label>UNUSR</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="text-lg-start" md={1}>
          <Form.Label>UNUCH</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            className="text-center"
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
        <Col md={8}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
        <Col md={1}>
          <Form.Label>UNUSI</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={1}>
          <Form.Label>TARIFF</Form.Label>
        </Col>
        <Col md={2}>
          <Form.Control
            className="text-center"
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with tariff
            disabled
          />
        </Col>
        <Col md={7}>
          <Form.Control
            className="text-center"
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with tariff
            disabled
          />
        </Col>
        <Col md={1}>
          <Form.Label>UNUSD</Form.Label>
        </Col>
        <Col md={1}>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value="" // Prefill with data 
            disabled
          />
        </Col>
      </Row>
    </Form.Group>
  );
};

export default ResultSummary;
