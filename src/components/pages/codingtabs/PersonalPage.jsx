import { useState, useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const PersonalPage = ({ validatePersonalPage, formData, setFormData }) => {
  const [dob, setDob] = useState(formData.dob || '');
  const [age, setAge] = useState(formData.age || 0);
  const [ageInDays, setAgeInDays] = useState(formData.ageInDays || 0);
  const [isNewborn, setIsNewborn] = useState(formData.age < 1);

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
    if (!formData.mrn) {
      alert('MRN Number is required.');
      return false;
    } else if (!formData.fullName) {
      alert('Full Name is required.');
      return false;
    } else if (!formData.insuranceNumber) {
      alert('Insurance Number is required.');
      return false;
    } else if (!formData.gender) {
      alert('Gender is required.');
      return false;
    } else if (!formData.dob) {
      alert('Date of Birth is required.');
      return false;
    }

    if (formData.age < 1 && (!formData.ageInDays)) {
      alert('Age (In Days) for Newborn are required.');
      return false;
    } else if (formData.age < 1 && (!formData.weight)) {
      alert('Weight for Newborn is required.');
      return false;
    }

    return true;
  };

  useEffect(() => {
    validatePersonalPage.current = validatePersonalPageInputs;
  }, [validatePersonalPageInputs]);

  return (
    <div>
      <h5 style={{fontWeight: 'bold'}}>Personal Information</h5>
      <Form.Group className="mb-3">
        <Form.Label>MRN Number</Form.Label>
        <Form.Control
          type="text"
          id="mrn"
          name="mrn"
          placeholder="Please fill in MRN Number"
          value={formData.mrn || ''}
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
          value={formData.fullName || ''}
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
          value={formData.insuranceNumber || ''}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select
          id="gender"
          name="gender"
          aria-label="Default select example"
          value={formData.gender || ''}
          onChange={handleInputChange}
        >
          <option value="">Please Choose Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
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
        <Form.Label>Age</Form.Label>
        <Form.Control 
          disabled
          id="age" 
          type="text" 
          placeholder="Age will be automatically calculated based on DOB" 
          value={age} 
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age (In Days) (For Newborn)</Form.Label>
        <Form.Control 
          ref={ageInDaysRef}
          type="text"
          id="ageInDaysRef" 
          placeholder="Please fill in Age (In Days) (For Newborn)" 
          value={isNewborn ? ageInDays : ''} 
          disabled={!isNewborn} 
          onChange={(e) => setAgeInDays(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Weight (For Newborn)</Form.Label>
        <Form.Control 
          ref={weightRef}
          type="text" 
          name="weight"
          id="weight"
          placeholder="Please fill in Weight (For Newborn)" 
          value={formData.weight || ''}
          disabled={!isNewborn} 
          onChange={handleInputChange}
        />
      </Form.Group>
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
