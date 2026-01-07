import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import './StudentApplication.css';

const StudentApplication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    student_name: '',
    father_name: '',
    mother_name: '',
    mobile_number: '',
    school_name: '',
    medium_of_instruction: '',
    date_of_birth: '',
    city: '',
    district: '',
    pincode: '',
    tenth_score: '',
    twelfth_half_yearly_score: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [showDataTable, setShowDataTable] = useState(true); // Show table by default

  // Test data for quick testing
  const testData = {
    student_name: 'Aarif',
    father_name: 'Mohamed',
    mother_name: 'Fathima',
    mobile_number: '9876543210',
    school_name: 'Govt School',
    medium_of_instruction: 'English',
    date_of_birth: '2007-05-12',
    city: 'Chennai',
    district: 'Chennai',
    pincode: '600001',
    tenth_score: '480',
    twelfth_half_yearly_score: '450'
  };

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzwOtIpwWc0IWbbjWuSqNgJ8zPxfq672yMLml0b1teCMAz66Lm9u6D2mmFEg7wb7fSHQ/exec';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fillTestData = () => {
    setFormData(testData);
    setSubmitStatus(null);
  };

  const fetchSubmittedData = async () => {
    setIsLoadingData(true);
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      const data = await response.json();
      console.log('Fetched data:', data);
      setSubmittedData(Array.isArray(data) ? data : []);
      setShowDataTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSubmittedData([]);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic form validation
    const requiredFields = ['student_name', 'father_name', 'mother_name', 'mobile_number', 'school_name', 'medium_of_instruction', 'date_of_birth', 'city', 'district', 'pincode', 'tenth_score'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      setSubmitStatus('validation_error');
      setIsSubmitting(false);
      return;
    }

    // Validate mobile number
    if (!/^[0-9]{10}$/.test(formData.mobile_number)) {
      setSubmitStatus('mobile_error');
      setIsSubmitting(false);
      return;
    }

    // Validate pincode
    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      setSubmitStatus('pincode_error');
      setIsSubmitting(false);
      return;
    }

    try {
      const applicationData = {
        id: `STU_${Date.now()}`,
        ...formData
      };

      console.log('Submitting application data:', applicationData);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData)
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          student_name: '',
          father_name: '',
          mother_name: '',
          mobile_number: '',
          school_name: '',
          medium_of_instruction: '',
          date_of_birth: '',
          city: '',
          district: '',
          pincode: '',
          tenth_score: '',
          twelfth_half_yearly_score: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="student-application">
      <Navbar />
      
      {/* Page Title */}
      <div className="page-title">
        <div className="container">
          <h1>Join HOPE3 - Student Application</h1>
          <p>Take the first step towards transforming your future with HOPE3</p>
        </div>
      </div>

      <div className="application-container">
        {/* Test Data Section */}
        <div className="test-section">
          <h3>Quick Test</h3>
          <p>Fill the form with test data for quick testing</p>
          <button 
            type="button"
            className="test-button"
            onClick={fillTestData}
          >
            Fill Test Data
          </button>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            
            <div className="form-group">
              <label htmlFor="student_name">Student Name *</label>
              <input
                type="text"
                id="student_name"
                name="student_name"
                value={formData.student_name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="father_name">Father's Name *</label>
                <input
                  type="text"
                  id="father_name"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Father's full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mother_name">Mother's Name *</label>
                <input
                  type="text"
                  id="mother_name"
                  name="mother_name"
                  value={formData.mother_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Mother's full name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile_number">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile_number"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleInputChange}
                  required
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="form-group">
                <label htmlFor="date_of_birth">Date of Birth *</label>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Educational Information</h2>
            
            <div className="form-group">
              <label htmlFor="school_name">School Name *</label>
              <input
                type="text"
                id="school_name"
                name="school_name"
                value={formData.school_name}
                onChange={handleInputChange}
                required
                placeholder="Name of your current school"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="medium_of_instruction">Medium of Instruction *</label>
                <select
                  id="medium_of_instruction"
                  name="medium_of_instruction"
                  value={formData.medium_of_instruction}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select medium</option>
                  <option value="English">English</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="tenth_score">10th Grade Score *</label>
                <input
                  type="number"
                  id="tenth_score"
                  name="tenth_score"
                  value={formData.tenth_score}
                  onChange={handleInputChange}
                  required
                  placeholder="Total marks obtained"
                  min="0"
                  max="500"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="twelfth_half_yearly_score">12th Half-Yearly Score</label>
              <input
                type="number"
                id="twelfth_half_yearly_score"
                name="twelfth_half_yearly_score"
                value={formData.twelfth_half_yearly_score}
                onChange={handleInputChange}
                placeholder="Half-yearly marks (if applicable)"
                min="0"
                max="500"
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Location Information</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Your city"
                />
              </div>

              <div className="form-group">
                <label htmlFor="district">District *</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  placeholder="Your district"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pincode">Pincode *</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
                placeholder="6-digit pincode"
                pattern="[0-9]{6}"
              />
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✅ Application submitted successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              ❌ There was an error submitting your application. Please try again.
            </div>
          )}

          {submitStatus === 'validation_error' && (
            <div className="status-message error">
              ❌ Please fill in all required fields marked with *.
            </div>
          )}

          {submitStatus === 'mobile_error' && (
            <div className="status-message error">
              ❌ Please enter a valid 10-digit mobile number.
            </div>
          )}

          {submitStatus === 'pincode_error' && (
            <div className="status-message error">
              ❌ Please enter a valid 6-digit pincode.
            </div>
          )}

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>

      {/* Submitted Data Table Section */}
      <div className="data-table-section">
        <div className="data-table-header">
          <h2>Submitted Applications</h2>
          <div className="table-controls">
            <button 
              type="button"
              className="fetch-data-button"
              onClick={fetchSubmittedData}
              disabled={isLoadingData}
            >
              {isLoadingData ? 'Loading...' : 'Fetch All Data'}
            </button>
            <button 
              type="button"
              className="clear-data-button"
              onClick={() => setSubmittedData([])}
              disabled={isLoadingData}
            >
              Clear Table
            </button>
          </div>
        </div>

        <div className="table-wrapper">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Father's Name</th>
                  <th>Mother's Name</th>
                  <th>Mobile Number</th>
                  <th>School Name</th>
                  <th>Medium</th>
                  <th>Date of Birth</th>
                  <th>City</th>
                  <th>District</th>
                  <th>Pincode</th>
                  <th>10th Score</th>
                  <th>12th Score</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.length > 0 ? (
                  submittedData.map((student, index) => (
                    <tr key={student.id || index}>
                      <td>{student.id}</td>
                      <td>{student.student_name}</td>
                      <td>{student.father_name}</td>
                      <td>{student.mother_name}</td>
                      <td>{student.mobile_number}</td>
                      <td>{student.school_name}</td>
                      <td>{student.medium_of_instruction}</td>
                      <td>{student.date_of_birth}</td>
                      <td>{student.city}</td>
                      <td>{student.district}</td>
                      <td>{student.pincode}</td>
                      <td>{student.tenth_score}</td>
                      <td>{student.twelfth_half_yearly_score}</td>
                    </tr>
                  ))
                ) : (
                  <tr className="empty-row">
                    <td colSpan="13" className="empty-cell">
                      {isLoadingData ? 'Loading data...' : 'No applications submitted yet. Click "Fetch All Data" to load submitted applications.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="scroll-indicator">
            <span>← Scroll horizontally to view all columns →</span>
          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default StudentApplication;