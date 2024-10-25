import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './CodingPage.css';
import PersonalPage from './codingtabs/PersonalPage';
import ClinicalPage from './codingtabs/ClinicalPage';
import ReviewPage from './codingtabs/ReviewPage';
import GroupPage from './codingtabs/GroupPage';
import ExportPage from './codingtabs/ExportPage';
import Card from 'react-bootstrap/Card';

const CodingPage = () => {
  const location = useLocation();
  const initialStep = location.state?.initialStep || 0;

  const [currentStep, setCurrentStep] = useState(initialStep);
  const validatePersonalPage = useRef(null); 
  const validateClinicalPage = useRef(null); 

  // Centralized state for form data
  const [formData, setFormData] = useState({
    mrn: '',
    fullName: '',
    insuranceNumber: '',
    gender: '',
    dob: '',
    age: '',
    ageInDays: '',
    weight: '',
    patientType: '',
    doctorName: '',
    diagnosis: '',
    subAcuteScore: '',
    chronicScore: '',
    dischargeStatus: '',
    procedures: '',
  });

  const wizardSteps = ['Personal', 'Clinical', 'Review'];
  const allSteps = [...wizardSteps, 'Group', 'Export'];

  const nextStep = useCallback(() => {
    if (currentStep === 0 && validatePersonalPage.current && !validatePersonalPage.current()) {
      return; 
    } else if (currentStep === 1 && validateClinicalPage.current && !validateClinicalPage.current()) {
      return;
    }
    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }, [currentStep, wizardSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  }, [currentStep]);

  const handleTabClick = useCallback((index) => {
    if ([0, 3, 4].includes(index)) {
      if (index === 3 || index === 4) {
        // Reset the form data for PersonalPage, ClinicalPage, and ReviewPage
        setFormData({
          mrn: '',
          fullName: '',
          insuranceNumber: '',
          gender: '',
          dob: '',
          age: '',
          ageInDays: '',
          weight: '',
          patientType: '',
          doctorName: '',
          diagnosis: '',
          subAcuteScore: '',
          chronicScore: '',
          dischargeStatus: '',
          procedures: '',
        });
      }
      setCurrentStep(index); 
    }
  }, []);

  return (
    <Card id='coding-card'>
      <Card.Body>
        <div id="codingpage-container">
        <nav className="tabs">
            {allSteps.map((step, index) => (
              <a
                key={index}
                href="#"
                className={currentStep === index ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(index);
                }}
                style={{ 
                  pointerEvents: [1, 2].includes(index) ? 'none' : 'auto', 
                  color: [1, 2].includes(index) ? '#252525' : 'inherit'
                }}
              >
                {step}
              </a>
            ))}
          </nav>

          <div className="tab-content">
            {currentStep === 0 && (
              <div>
                <PersonalPage
                  validatePersonalPage={validatePersonalPage}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            )}
            {currentStep === 1 && (
              <div>
                <ClinicalPage
                  validateClinicalPage={validateClinicalPage}
                  formData={formData}
                  setFormData={setFormData} 
                />
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <ReviewPage formData={formData} />
              </div>
            )}
            {currentStep === 3 && <div><GroupPage /></div>}
            {currentStep === 4 && <div><ExportPage /></div>}
          </div>

          {currentStep < 3 && (
            <div className="wizard-navigation">
              {currentStep > 0 && (
                <button onClick={prevStep} className="prev-button">
                  Previous
                </button>
              )}
              {currentStep < wizardSteps.length - 1 && (
                <button onClick={nextStep} className="next-button">
                  Next
                </button>
              )}
              {currentStep === wizardSteps.length - 1 && (
                <button className="save-button">Save</button>
              )}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CodingPage;
