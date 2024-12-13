import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import ResultSummary from "./summary/ResultSummary";
// import { BsThreeDotsVertical } from "react-icons/bs";

const ClinicalPage = ({ validateClinicalPage, formData, setFormData }) => {
  const [subAcuteScore, setSubAcuteScore] = useState(
    formData.subAcuteScore || 0
  );
  const [chronicScore, setChronicScore] = useState(formData.chronicScore || 0);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isTableVisible2, setIsTableVisible2] = useState(false);
  const [isTableVisible3, setIsTableVisible3] = useState(false);
  const [selectedItemsdoctorName, setselectedItemsdoctorName] = useState(
    formData.doctorName ? formData.doctorName.split(", ") : []
  );
  const [selectedItemsDiagnosis, setselectedItemsDiagnosis] = useState(
    formData.diagnosis ? formData.diagnosis.split(", ") : []
  );
  const [selectedItemsProcedures, setSelectedItemsProcedures] = useState(
    formData.procedures ? formData.procedures.split(", ") : []
  );

  const tableDoctorName = [
    { code: "KKM1", description: "Doctor A" },
    { code: "KKM2", description: "Doctor B" },
    { code: "KKM3", description: "Doctor C" },
    { code: "KKM4", description: "Doctor D" },
    { code: "KKM5", description: "Doctor E" },
  ];

  const tableDiagnosis = [
    { code: "INF", description: "Influenza" },
    { code: "INF A", description: "Influenza A" },
    { code: "INF B", description: "Influenza B" },
    { code: "PYREXIA", description: "Fever" },
    { code: "PYREXIA C", description: "Cold Fever" },
    { code: "MIG", description: "Headache" },
  ];

  const tableProcedures = [
    { code: "PYREXIA", description: "Fever" },
    { code: "MIG", description: "Headache" },
    { code: "INF", description: "Influenza" },
    { code: "INF A", description: "Influenza A" },
    { code: "INF B", description: "Influenza B" },
    { code: "PYREXIA C", description: "Cold Fever" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "doctorName") {
      setIsTableVisible3(value.trim() !== "");
      const matchingdoctorName = tableDoctorName.find(
        (item) => item.description.toLowerCase() === value.toLowerCase()
      );
      if (
        matchingdoctorName &&
        !selectedItemsdoctorName.includes(matchingdoctorName.description)
      ) {
        setselectedItemsdoctorName((prev) => [
          ...prev,
          matchingdoctorName.description,
        ]);
      }
    } else if (name === "diagnosis") {
      setIsTableVisible(value.trim() !== "");
      const matchingDiagnosis = tableDiagnosis.find(
        (item) => item.description.toLowerCase() === value.toLowerCase()
      );
      if (
        matchingDiagnosis &&
        !selectedItemsDiagnosis.includes(matchingDiagnosis.description)
      ) {
        setselectedItemsDiagnosis((prev) => [
          ...prev,
          matchingDiagnosis.description,
        ]);
      }
    } else if (name === "procedures") {
      setIsTableVisible2(value.trim() !== "");
      const matchingProcedures = tableProcedures.find(
        (item) => item.description.toLowerCase() === value.toLowerCase()
      );
      if (
        matchingProcedures &&
        !selectedItemsProcedures.includes(matchingProcedures.description)
      ) {
        setSelectedItemsProcedures((prev) => [
          ...prev,
          matchingProcedures.description,
        ]);
      }
    }
  };

  const handleCheckboxChangedoctorName = (description) => {
    setselectedItemsdoctorName((prev) =>
      prev.includes(description)
        ? prev.filter((item) => item !== description)
        : [...prev, description]
    );
  };

  const handleCheckboxChangeDiagnosis = (description) => {
    setselectedItemsDiagnosis((prev) =>
      prev.includes(description)
        ? prev.filter((item) => item !== description)
        : [...prev, description]
    );
  };

  const handleCheckboxChangeProcedures = (description) => {
    setSelectedItemsProcedures((prev) =>
      prev.includes(description)
        ? prev.filter((item) => item !== description)
        : [...prev, description]
    );
  };

  useEffect(() => {
    if (selectedItemsdoctorName.length > 0) {
      setFormData({
        ...formData,
        doctorName: selectedItemsdoctorName.join(", "),
      });
    } else {
      setFormData({ ...formData, doctorName: "" });
    }
  }, [formData, selectedItemsdoctorName, setFormData]);

  useEffect(() => {
    if (selectedItemsDiagnosis.length > 0) {
      setFormData({
        ...formData,
        diagnosis: selectedItemsDiagnosis.join(", "),
      });
    } else {
      setFormData({ ...formData, diagnosis: "" });
    }
  }, [formData, selectedItemsDiagnosis, setFormData]);

  useEffect(() => {
    if (selectedItemsProcedures.length > 0) {
      setFormData({
        ...formData,
        procedures: selectedItemsProcedures.join(", "),
      });
    } else {
      setFormData({ ...formData, procedures: "" });
    }
  }, [formData, selectedItemsProcedures, setFormData]);

  useEffect(() => {
    return () => {
      setFormData({
        ...formData,
        procedures: selectedItemsdoctorName.join(", "),
      });
    };
  }, [formData, selectedItemsdoctorName, setFormData]);

  useEffect(() => {
    return () => {
      setFormData({
        ...formData,
        procedures: selectedItemsDiagnosis.join(", "),
      });
    };
  }, [formData, selectedItemsDiagnosis, setFormData]);

  useEffect(() => {
    return () => {
      setFormData({
        ...formData,
        procedures: selectedItemsProcedures.join(", "),
      });
    };
  }, [formData, selectedItemsProcedures, setFormData]);

  const handleSubAcuteChange = (amount) => {
    const newScore = Math.max(0, subAcuteScore + amount);
    setSubAcuteScore(newScore);
    setFormData((prevFormData) => ({
      ...prevFormData,
      subAcuteScore: newScore,
    }));
  };

  const handleChronicChange = (amount) => {
    const newScore = Math.max(0, chronicScore + amount);
    setChronicScore(newScore);
    setFormData((prevFormData) => ({
      ...prevFormData,
      chronicScore: newScore,
    }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      subAcuteScore: subAcuteScore,
      chronicScore: chronicScore,
    }));
  }, [subAcuteScore, chronicScore, setFormData]);

  const validateClinicalPageInputs = () => {
    // if (!formData.mrn) {
    //   alert("MRN Number is required.");
    //   return false;
    // } else if (!formData.fullName) {
    //   alert("Full Name is required.");
    //   return false;
    // } else if (!formData.patientType) {
    //   alert("Type of Patient is required.");
    //   return false;
    // } else if (!formData.admissionDate) {
    //   alert("Admission Date is required.");
    //   return false;
    // } else if (!formData.dischargeDate) {
    //   alert("Discharge Date is required.");
    //   return false;
    // } else if (!formData.dischargeStatus) {
    //   alert("Discharge Status is required.");
    //   return false;
    // } else if (!formData.specialProcedure) {
    //   alert("Special Procedure is required.");
    //   return false;
    // } else if (!formData.specialProsthesis) {
    //   alert("Special Prosthesis is required.");
    //   return false;
    // } else if (!formData.specialInvestigation) {
    //   alert("Special Investigation is required.");
    //   return false;
    // } else if (!formData.specialDrug) {
    //   alert("Special Drug is required.");
    //   return false;
    // } else if (!formData.ownership) {
    //   alert("Ownership is required.");
    //   return false;
    // } else if (!formData.regional) {
    //   alert("Regional is required.");
    //   return false;
    // } else if (!formData.hospitalType) {
    //   alert("Hospital Type is required.");
    //   return false;
    // } else if (!formData.tariffClass) {
    //   alert("Tariff Class is required.");
    //   return false;
    // } else if (
    //   !(formData.diagnosis.trim() !== "" || selectedItemsDiagnosis.length > 0)
    // ) {
    //   alert("Diagnosis is required.");
    //   return false;
    // } 
    // else if (
    //   !(formData.doctorName.trim() !== "" || selectedItemsdoctorName.length > 0)
    // ) {
    //   alert("Doctor Name is required.");
    //   return false;
    // } 
    // else if (
    //   !(formData.procedures.trim() !== "" || selectedItemsProcedures.length > 0)
    // ) {
    //   alert("Procedures is required.");
    //   return false;
    // }
    return true;
  };

  useEffect(() => {
    validateClinicalPage.current = validateClinicalPageInputs;
  }, [validateClinicalPageInputs]);

  const handleSaveAsDraft = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to Save as Draft?"
    );

    if (isConfirmed) {
      console.log("Draft saved:", formData);
      // Add logic here to actually save the draft, e.g., sending it to an API or storing it locally
    } else {
      console.log("Draft save canceled");
    }
    // You can add logic here to actually save the draft, e.g., sending it to an API or storing it locally
  };

  return (
    <div>
      <h5>Clinical Information</h5>
      <Form.Group className="mb-3">
        <Form.Label>MRN Number</Form.Label>
        <Form.Control
          type="text"
          id="mrn"
          name="mrn"
          value={formData.mrn} // Prefill with data from PersonalPage
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName} // Prefill with data from PersonalPage
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Patient Type</Form.Label>
        <Form.Select
          aria-label="Default select example"
          id="patientType"
          name="patientType"
          value={formData.patientType}
          onChange={handleInputChange}
        >
          <option value="">Please select Type of Patient</option>
          <option value="Inpatient">Inpatient</option>
          <option value="Outpatient">Outpatient</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Admission Date</Form.Label>
        <Form.Control
          type="date"
          id="admissionDate"
          name="admissionDate"
          placeholder="Please fill in Date of Admission"
          value={formData.admissionDate}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Discharge Date</Form.Label>
        <Form.Control
          type="date"
          id="dischargeDate"
          name="dischargeDate"
          placeholder="Please fill in Date of Discharge"
          value={formData.dischargeDate}
          onChange={handleInputChange}
        />
      </Form.Group>

      {/* Doctor name DISABLE */}
      {/* <Col>
        <Form.Group className="mb-3">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control 
            type="text"
            id="doctorName"
            name="doctorName"
            placeholder="Please fill in Doctor Name" 
            value={formData.doctorName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Col className="mb-3">
          {selectedItemsdoctorName.map((item, index) => (
            <span key={index} id='diagnosis-filter'>
              {item}
            </span>
          ))}
        </Col>

        {isTableVisible3 && (
          <Table bordered responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th colSpan={3}>Doctor Name</th>
              </tr>
            </thead>
            <tbody>
              {tableDoctorName.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: '20%' }}>{item.code}</td>
                  <td style={{ width: '1%', paddingLeft: '12px', borderRight: 'none' }}>
                    <Form.Check
                      type="checkbox"
                      id={`diagnosis-checkbox-${index}`}
                      label=""
                      checked={selectedItemsdoctorName.includes(item.description)}
                      onChange={() => handleCheckboxChangedoctorName(item.description)}
                    />
                  </td>
                  <td style={{ width: '68%', borderLeft: 'none', borderRight: 'none' }}>
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col> */}

      {/* <p>ADL Score (Range from 12-60)</p> */}

      <Row className="mb-3">
        <p>ADL Score Sub Acute</p>
        <Col md="2">
          <div className="d-grid gap-2 mb-3">
            <Button
              style={{ backgroundColor: "#364DB9" }}
              onClick={() => handleSubAcuteChange(-1)}
            >
              -
            </Button>
          </div>
        </Col>
        <Col md="8" className="mb-3">
          <Form.Control
            type="text"
            id="subAcuteScore"
            name="subAcuteScore"
            value={subAcuteScore}
            onChange={(e) =>
              setSubAcuteScore(Math.max(0, Number(e.target.value)))
            }
            placeholder="Please fill in Sub Acute Score"
          />
        </Col>
        <Col md="2">
          <div className="d-grid gap-2">
            <Button
              style={{ backgroundColor: "#364DB9" }}
              onClick={() => handleSubAcuteChange(1)}
            >
              +
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <p>ADL Score Chronic</p>
        <Col md="2">
          <div className="d-grid gap-2 mb-3">
            <Button
              style={{ backgroundColor: "#364DB9" }}
              onClick={() => handleChronicChange(-1)}
            >
              -
            </Button>
          </div>
        </Col>
        <Col md="8" className="mb-3">
          <Form.Control
            type="text"
            id="chronicScore"
            name="chronicScore"
            value={chronicScore}
            onChange={(e) =>
              setChronicScore(Math.max(0, Number(e.target.value)))
            }
            placeholder="Please fill in Chronic Score"
          />
        </Col>
        <Col md="2">
          <div className="d-grid gap-2">
            <Button
              style={{ backgroundColor: "#364DB9" }}
              onClick={() => handleChronicChange(1)}
            >
              +
            </Button>
          </div>
        </Col>
      </Row>

      <Form.Group className="mb-4">
        <Form.Label>Discharge Status</Form.Label>
        <Form.Select
          aria-label="Default select example"
          id="dischargeStatus"
          name="dischargeStatus"
          value={formData.dischargeStatus}
          onChange={handleInputChange}
        >
          <option value="">Please select Discharge Status</option>
          <option value="discStats-1">Home and Self-Care</option>
          <option value="discStats-2">Transfer Acute Care Facility</option>
          <option value="discStats-3">Leave Against Medical Advice</option>
          <option value="discStats-4">Expired/Died</option>
          <option value="discStats-5">Others/Unknown</option>
        </Form.Select>
      </Form.Group>

      <p className="mb-3" style={{ fontWeight: "bold" }}>Special Groups</p>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>S.Procedure</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="specialProcedure"
              name="specialProcedure"
              value={formData.specialProcedure || ""}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="sProcedure-1">Special Procedure A</option>
              <option value="sProcedure-2">Special Procedure B</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>S.Prosthesis</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="specialProsthesis"
              name="specialProsthesis"
              value={formData.specialProsthesis}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="sProsthesis-1">Special Prosthesis A</option>
              <option value="sProsthesis-2">Special Prosthesis B</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>S.Investigation</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="specialInvestigation"
              name="specialInvestigation"
              value={formData.specialInvestigation}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="sInvestigation-1">Special Investigation A</option>
              <option value="sInvestigation-2">Special Investigation B</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>S.Drug</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="specialDrug"
              name="specialDrug"
              value={formData.specialDrug}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="sDrug-1">Special Drug A</option>
              <option value="sDrug-2">Special Drug B</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Ownership</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="ownership"
              name="ownership"
              value={formData.ownership}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="ownership-1">G</option>
              <option value="ownership-2">P</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Regional</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="regional"
              name="regional"
              value={formData.regional}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="regional-1">1</option>
              <option value="regional-2">2</option>
              <option value="regional-3">3</option>
              <option value="regional-4">4</option>
              <option value="regional-5">5</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Hospital Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="hospitalType"
              name="hospitalType"
              value={formData.hospitalType}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="hospitalType-A">A</option>
              <option value="hospitalType-B">B</option>
              <option value="hospitalType-C">C</option>
              <option value="hospitalType-D">D</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Tariff Class</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="tariffClass"
              name="tariffClass"
              value={formData.tariffClass}
              onChange={handleInputChange}
            >
              <option value="">None</option>
              <option value="tariffClass-1">1</option>
              <option value="tariffClass-2">2</option>
              <option value="tariffClass-3">3</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Col>
        <Form.Group className="mb-3">
          <Form.Label>Diagnosis</Form.Label>
          <Form.Control
            type="text"
            id="diagnosis"
            name="diagnosis"
            placeholder="Please fill in Diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Col className="mb-3">
          {selectedItemsDiagnosis.map((item, index) => (
            <span key={index} id="diagnosis-filter">
              {item}
            </span>
          ))}
        </Col>

        {isTableVisible && (
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Code</th>
                <th colSpan={3}>Description</th>
              </tr>
            </thead>
            <tbody>
              {tableDiagnosis.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: "20%" }}>{item.code}</td>
                  <td
                    style={{
                      width: "1%",
                      paddingLeft: "12px",
                      borderRight: "none",
                    }}
                  >
                    <Form.Check
                      type="checkbox"
                      id={`diagnosis-checkbox-${index}`}
                      label=""
                      checked={selectedItemsDiagnosis.includes(
                        item.description
                      )}
                      onChange={() =>
                        handleCheckboxChangeDiagnosis(item.description)
                      }
                    />
                  </td>
                  <td
                    style={{
                      width: "68%",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                  >
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>

      <Col>
        <Form.Group className="mb-3">
          <Form.Label>Procedures</Form.Label>
          <Form.Control
            type="text"
            id="procedures"
            name="procedures"
            placeholder="Please fill in Procedures"
            value={formData.procedures}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Col className="mb-3">
          {selectedItemsProcedures.map((item, index) => (
            <span key={index} id="diagnosis-filter">
              {item}
            </span>
          ))}
        </Col>

        {isTableVisible2 && (
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Code</th>
                <th colSpan={3}>Description</th>
              </tr>
            </thead>
            <tbody>
              {tableProcedures.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: "20%" }}>{item.code}</td>
                  <td
                    style={{
                      width: "1%",
                      paddingLeft: "12px",
                      borderRight: "none",
                    }}
                  >
                    <Form.Check
                      type="checkbox"
                      id={`procedures-checkbox-${index}`}
                      label=""
                      checked={selectedItemsProcedures.includes(
                        item.description
                      )}
                      onChange={() =>
                        handleCheckboxChangeProcedures(item.description)
                      }
                    />
                  </td>
                  <td
                    style={{
                      width: "68%",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                  >
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>

      <ResultSummary />

      <Button id="save-as-draf-button" onClick={handleSaveAsDraft}>
        Save as Draft
      </Button>
    </div>
  );
};

ClinicalPage.propTypes = {
  validateClinicalPage: PropTypes.shape({
    current: PropTypes.func,
  }).isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default ClinicalPage;
