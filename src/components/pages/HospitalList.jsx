import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "./HospitalList.css";
import HospitalMap from "./hospital-list-tabs/HospitalMap";

const HospitalList = () => {
  const navigate = useNavigate();

  const hospitalList = [
    {
      state: "Kuala Lumpur",
      geocode: [3.171771761433759, 101.70255280507773],
      popUp: "Hospital Kuala Lumpur",
    },
    {
      state: "Kuala Lumpur",
      geocode: [3.098219433675454, 101.72412230992747],
      popUp: "Hospital Universiti Kebangsaan Malaysia (HUKM)",
    },
    {
      state: "Kuala Lumpur",
      geocode: [3.1137742777039326, 101.65290953018962],
      popUp: "Pusat Perubatan Universiti Malaya",
    },
    {
      state: "Putrajaya",
      geocode: [2.9292779082400466, 101.67421705410665],
      popUp: "Hospital Putrajaya",
    },
    {
      state: "Selangor",
      geocode: [2.9765197138276824, 101.71997682278189],
      popUp: "Hospital Sultan Idris Shah, Serdang",
    },
    {
      state: "Selangor",
      geocode: [3.071612992225812, 101.4907453386863],
      popUp: "Hospital Shah Alam",
    },
    {
      state: "Selangor",
      geocode: [3.0204752592054214, 101.44144160985026],
      popUp: "Hospital Tengku Ampuan Rahimah, Klang",
    },
    {
      state: "Negeri Sembilan",
      geocode: [2.7099666270161045, 101.94481944740008],
      popUp: "Hospital Tuanku Ja'afar, Seremban",
    },
    {
      state: "Negeri Sembilan",
      geocode: [2.600601870914254, 102.07281522527127],
      popUp: "Hospital Rembau",
    },
    {
      state: "Negeri Sembilan",
      geocode: [2.484990366007772, 102.23366523390487],
      popUp: "Hospital Tampin",
    },
    {
      state: "Negeri Sembilan",
      geocode: [2.47822199444776, 101.85617826419409],
      popUp: "Hospital Port Dickson",
    },
    {
      state: "Johor",
      geocode: [2.0609806679452034, 102.57777435962],
      popUp: "Hospital Pakar Sultanah Fatimah, Muar",
    },
    {
      state: "Johor",
      geocode: [1.8378903074371764, 102.94098278292122],
      popUp: "Hospital Sultanah Nora Ismail, Batu Pahat",
    },
    {
      state: "Johor",
      geocode: [1.4586309097713452, 103.74601031950897],
      popUp: "Hospital Sultanah Aminah, Johor Bahru",
    },
  ];

  // Pagination and entries per page state
  const [currentPage, setCurrentPage] = useState(1);
  const [hospitalsPerPage, setHospitalsPerPage] = useState(5);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page after search
  };

  // Handle entries per page change
  const handleEntriesPerPageChange = (event) => {
    setHospitalsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page when entries per page change
  };

  // Filter hospitals based on the search query (by name or state)
  const filteredHospitals = hospitalList.filter(
    (hospital) =>
      hospital.popUp.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current hospitals for pagination
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = filteredHospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container fluid id="homepage-container">
        <Row>
          <Col md={5}>
            <Card id="hospital-list-card">
              <Card.Body>
                <h5 className="mb-4" style={{ fontWeight: "bold" }}>
                  Hospital&apos;s List
                </h5>

                {/* Search Input */}
                <InputGroup className="mb-3">
                  <Form.Control
                    id="search-icon-input"
                    placeholder="Search hospital's name or state"
                    aria-label="Search"
                    aria-describedby="search-icon-input-icon"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <InputGroup.Text id="search-icon-input-icon">
                    <IoIosSearch />
                  </InputGroup.Text>
                </InputGroup>

                {/* Entries Per Page Selector */}
                <Container className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Group
                    controlId="entriesPerPageSelect"
                    className="d-flex align-items-center"
                  >
                    <Form.Label className="mb-0 me-2">Show entries:</Form.Label>
                    <Form.Select
                      value={hospitalsPerPage}
                      onChange={handleEntriesPerPageChange}
                      style={{ width: "auto" }}
                    >
                      <option value={3}>3</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                    </Form.Select>
                  </Form.Group>
                </Container>

                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>No</th>
                      <th colSpan={3}>Hospital Name</th>
                      <th>State</th>
                      <th style={{ textAlign: "center" }}>View</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentHospitals.length > 0 ? (
                      currentHospitals.map((hospital, index) => (
                        <tr key={index}>
                          {/* Serial number column */}
                          <td style={{ width: "5%", textAlign: "center" }}>
                            {indexOfFirstHospital + index + 1}
                          </td>

                          {/* Checkbox column */}
                          <td
                            style={{
                              width: "1%",
                              paddingLeft: "12px",
                              borderRight: "none",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              id={`table-checkbox-${index}`}
                              label=""
                            />
                          </td>

                          {/* Hospital name column */}
                          <td
                            style={{
                              width: "63%",
                              borderLeft: "none",
                              borderRight: "none",
                            }}
                          >
                            {hospital.popUp}
                          </td>

                          <td style={{ width: "1%", borderLeft: "none" }}>
                            <BsThreeDotsVertical />
                          </td>

                          {/* State name column */}
                          <td
                            style={{
                              width: "20%",
                              borderLeft: "none",
                              borderRight: "none",
                            }}
                          >
                            {hospital.state}
                          </td>

                          <td style={{ width: "10%", textAlign: "center" }}>
                            <button style={{backgroundColor: "#364DB9"}} className="btn btn-primary">View</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" style={{ textAlign: "center" }}>
                          No hospitals found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-center mt-3">
                  <Button
                    variant="secondary"
                    className="mx-1"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <FaAngleLeft />
                  </Button>
                  <span className="mx-2">
                    {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="secondary"
                    className="mx-1"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <FaAngleRight />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={7}>
            <Row>
              <h5 className="mb-3">
                <strong>Location Details</strong>
              </h5>
              <Col>
                <HospitalMap />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HospitalList;
