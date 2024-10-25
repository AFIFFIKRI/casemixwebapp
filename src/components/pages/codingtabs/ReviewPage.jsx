import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ReviewPage = ({ formData, setFormData }) => {
  const [diagnosis, setDiagnosis] = useState(formData.diagnosis || '');
  const [procedures, setProcedures] = useState(formData.procedures || '');
  const [doctorName, setdoctorName] = useState(formData.doctorName || '');

  useEffect(() => {
    setDiagnosis(formData.diagnosis || '');
  }, [formData.diagnosis]);

  useEffect(() => {
    setProcedures(formData.procedures || '');
  }, [formData.procedures]);

  useEffect(() => {
    setdoctorName(formData.doctorName || '');
  }, [formData.doctorName]);

  return (
    <div>
      <h5 style={{fontWeight: 'bold'}}>Review Information</h5>

      <br></br>

      <h5 style={{fontWeight: 'bold'}}>Personal Information</h5>

      <table>
        <tbody>
          <tr>
            <td>MRN Number</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.mrn}</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.fullName}</td>
          </tr>
          <tr>
            <td>Insurance Number</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.insuranceNumber}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.gender}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.dob}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>:&nbsp;</td>
            <td>{formData.age}</td>
          </tr>
          <tr>
            <td>Age (In Days) (For Newborn)</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.ageInDays}</td>
          </tr>
          <tr>
            <td>Weight (For Newborn)</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.weight}</td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <h5 style={{fontWeight: 'bold'}}>Clinical Information</h5>

      <table>
        <tbody>
          <tr>
            <td>MRN Number</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.mrn}</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.fullName}</td>
          </tr>
          <tr>
            <td>Type of Patient</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.patientType}</td>
          </tr>
          <tr>
            <td>Doctor Name</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{doctorName}</td>
          </tr>
          <tr>
            <td>Diagnosis</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{diagnosis}</td>
          </tr>
          <tr>
            <td>Sub Acute</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.subAcuteScore}</td>
          </tr>
          <tr>
            <td>Chronic</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.chronicScore}</td>
          </tr>
          <tr>
            <td>Discharge Status</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{formData.dischargeStatus}</td>
          </tr>
          <tr>
            <td>Procedures</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{procedures}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ReviewPage.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default ReviewPage;
