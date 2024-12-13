import { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa';
import ResultSummary from "./summary/ResultSummary";

const PersonalPage = ({ validatePersonalPage, formData, setFormData }) => {
  const [dob, setDob] = useState(formData.dob || "");
  const [age, setAge] = useState(formData.age || 0);
  const [ageInDays, setAgeInDays] = useState(formData.ageInDays || 0);
  const [isNewborn, setIsNewborn] = useState(formData.age < 1);
  const [isTableVisible3, setIsTableVisible3] = useState(false);
  const [selectedItemsdoctorName, setselectedItemsdoctorName] = useState(
    formData.doctorName ? formData.doctorName.split(", ") : []
  );

  const weightRef = useRef(null);
  const ageInDaysRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDobChange = (e) => {
    const dob = e.target.value;
    const selectedDate = new Date(dob);
    const today = new Date();

    const ageYears = today.getFullYear() - selectedDate.getFullYear();
    const ageMonths = today.getMonth() - selectedDate.getMonth();
    const ageDays = today.getDate() - selectedDate.getDate();

    let calculatedAge = ageYears;
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      calculatedAge--;
    }

    let ageInDaysCalculated = Math.floor(
      (today - selectedDate) / (1000 * 60 * 60 * 24)
    );

    // Adjust if the selected date is today
    if (ageInDaysCalculated === 0) {
      ageInDaysCalculated = 1;
    }

    const isNewbornCalculated = calculatedAge < 1;

    setDob(dob);
    setAge(calculatedAge);
    setAgeInDays(ageInDaysCalculated);
    setIsNewborn(isNewbornCalculated);

    setFormData({
      ...formData,
      dob,
      age: calculatedAge,
      ageInDays: ageInDaysCalculated,
    });
  };

  const validatePersonalPageInputs = () => {
    // if (!formData.mrn) {
    //   alert("MRN Number is required.");
    //   return false;
    // } else if (!formData.fullName) {
    //   alert("Full Name is required.");
    //   return false;
    // } else if (!formData.insuranceNumber) {
    //   alert("Insurance Number is required.");
    //   return false;
    // } else if (!formData.gender) {
    //   alert("Gender is required.");
    //   return false;
    // } else if (!formData.dob) {
    //   alert("Birth date is required.");
    //   return false;
    // }

    // if (formData.age < 1 && !formData.ageInDays) {
    //   alert("Age (In Days) for Newborn are required.");
    //   return false;
    // } else if (formData.age < 1 && !formData.weight) {
    //   alert("Weight for Newborn is required.");
    //   return false;
    // }

    return true;
  };

  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. A" },
    { id: 2, name: "Dr. B" },
    { id: 3, name: "Dr. C" },
  ]);

  const handleAddDoctor = () => {
    const newDoctor = { id: Date.now(), name: "" };
    setDoctors([...doctors, newDoctor]);
  };

  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  const handleReorder = (index, direction) => {
    const newDoctors = [...doctors];
    const currentIndex = index;

    if (direction === "up" && currentIndex > 0) {
      [newDoctors[currentIndex - 1], newDoctors[currentIndex]] = [
        newDoctors[currentIndex],
        newDoctors[currentIndex - 1],
      ];
    } else if (direction === "down" && currentIndex < newDoctors.length - 1) {
      [newDoctors[currentIndex], newDoctors[currentIndex + 1]] = [
        newDoctors[currentIndex + 1],
        newDoctors[currentIndex],
      ];
    }

    setDoctors(newDoctors);
  };

  useEffect(() => {
    validatePersonalPage.current = validatePersonalPageInputs;
  }, [validatePersonalPageInputs]);

  return (
    <div>
      <h5 style={{ fontWeight: "bold" }}>Personal Information</h5>
      <Form.Group className="mb-3">
        <Form.Label>MRN Number</Form.Label>
        <Form.Control
          type="text"
          id="mrn"
          name="mrn"
          placeholder="Please fill in MRN Number"
          value={formData.mrn || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Please fill in Full Name"
          value={formData.fullName || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Insurance Number</Form.Label>
        <Form.Control
          type="text"
          id="insuranceNumber"
          name="insuranceNumber"
          placeholder="Please fill in Insurance Number"
          value={formData.insuranceNumber || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select
          id="gender"
          name="gender"
          aria-label="Default select example"
          value={formData.gender || ""}
          onChange={handleInputChange}
        >
          <option value="">Please Choose Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control
          type="date"
          id="dob"
          name="dob"
          placeholder="Please fill in Date of Birth"
          value={dob}
          onChange={handleDobChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age (in Years)</Form.Label>
        <Form.Control
          disabled
          id="age"
          type="text"
          placeholder="Age will be automatically calculated based on DOB"
          value={age}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age (in Days)</Form.Label>
        <Form.Control
          ref={ageInDaysRef}
          type="text"
          id="ageInDaysRef"
          placeholder="Please fill in Age (in Days)"
          value={isNewborn ? ageInDays : ""}
          disabled={!isNewborn}
          onChange={(e) => setAgeInDays(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Weight (newborn)</Form.Label>
        <Form.Control
          ref={weightRef}
          type="text"
          name="weight"
          id="weight"
          placeholder="Please fill in Weight (in Grams)"
          value={formData.weight || ""}
          disabled={!isNewborn}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Row className="mb-2">
          <Col>
            <Form.Label>Doctors</Form.Label>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="py-0 px-2"
              style={{ backgroundColor: "#364DB9" }}
              variant="primary"
              onClick={handleAddDoctor}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Row style={{ maxHeight: "300px", overflowY: "auto" }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>Doctor Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor.id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={doctor.name}
                      onChange={(e) => {
                        const updatedDoctors = [...doctors];
                        updatedDoctors[index].name = e.target.value;
                        setDoctors(updatedDoctors);
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      disabled={index === 0}
                      onClick={() => handleReorder(index, "up")}
                      className="mx-2 rounded-circle p-1"
                    >
                      <FaArrowUp />
                    </Button>
                    <Button
                      variant="secondary"
                      disabled={index === doctors.length - 1}
                      onClick={() => handleReorder(index, "down")}
                      className="mx-2 rounded-circle p-1"
                    >
                      <FaArrowDown />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteDoctor(doctor.id)}
                      className="mx-2 rounded-circle p-1"
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Form.Group>
      <ResultSummary />
    </div>
  );
};

// Add PropTypes validation
PersonalPage.propTypes = {
  validatePersonalPage: PropTypes.shape({
    current: PropTypes.func,
  }).isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PersonalPage;
