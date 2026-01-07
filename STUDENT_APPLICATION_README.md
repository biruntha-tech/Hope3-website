# HOPE3 Student Application Feature

## Overview
A complete student application system that integrates with Google Apps Script for data collection and storage. The page follows the same design pattern as other HOPE3 pages with consistent header and footer.

## Features
- ✅ Consistent header (Navbar) and footer (NewFooter) like other pages
- ✅ Clean white background matching site design
- ✅ Responsive student application form
- ✅ Form validation (required fields, mobile number, pincode)
- ✅ Google Apps Script integration for data submission
- ✅ Success/error status messages
- ✅ Navigation integration with existing "Get Involved" buttons
- ✅ Quick test data fill functionality

## Routes Added
- `/join-hope3` - Student application page

## Updated Components
1. **StudentApplication.jsx** - Main application form with Navbar and NewFooter
2. **StudentApplication.css** - Styling matching other pages
3. **App.jsx** - Added new route
4. **GetInvolvedExamples.jsx** - Updated navigation
5. **whyHope3.jsx** - Updated "Apply to Join HOPE3" button
6. **navbar.jsx** - Updated "Join HOPE3" dropdown button
7. **ButtonTest.jsx** - Updated test button

## Page Structure
```jsx
<div className="student-application">
  <Navbar />
  
  <div className="page-title">
    <div className="container">
      <h1>Join HOPE3 - Student Application</h1>
      <p>Take the first step towards transforming your future with HOPE3</p>
    </div>
  </div>

  <div className="application-container">
    <div className="test-section">
      <!-- Quick test data fill -->
    </div>
    
    <form className="application-form">
      <!-- Application form fields -->
    </form>
  </div>

  <div className="data-table-section">
    <!-- Submitted applications table -->
  </div>

  <NewFooter />
</div>
```

## API Integration
- **Endpoint**: `https://script.google.com/macros/s/AKfycbwzwOtIpwWc0IWbbjWuSqNgJ8zPxfq672yMLml0b1teCMAz66Lm9u6D2mmFEg7wb7fSHQ/exec`
- **Method**: POST
- **Mode**: no-cors (due to Google Apps Script CORS limitations)

## Test Data Feature
The page includes two main sections for testing:

### 1. Quick Test Data Fill
A "Fill Test Data" button that populates the form with the following test data:
```javascript
{
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
}
```

### 2. Submitted Applications Table
An enhanced data table section above the footer that:
- **Default Empty Table**: Shows table structure by default with empty state message
- **Horizontal Scrolling**: Table is horizontally scrollable with custom scrollbar styling
- **Fetch Data**: Uses `fetch(GOOGLE_SCRIPT_URL).then(res => res.json()).then(data => console.log(data))`
- **All Fields**: Displays ID, Student Name, Father's Name, Mother's Name, Mobile Number, School Name, Medium, Date of Birth, City, District, Pincode, 10th Score, 12th Score
- **Interactive Controls**: 
  - "Fetch All Data" button to load submitted applications
  - "Clear Table" button to reset the table to empty state
- **Enhanced UI**: 
  - Sticky table headers
  - Custom scrollbar design
  - Scroll indicator showing horizontal scroll availability
  - Hover effects on table rows
  - Professional card-style container with shadows
- **Responsive Design**: Adapts to mobile with smaller text and optimized spacing

## Form Fields
### Required Fields (*)
- Student Name
- Father's Name
- Mother's Name
- Mobile Number (10 digits)
- School Name
- Medium of Instruction
- Date of Birth
- City
- District
- Pincode (6 digits)
- 10th Grade Score

### Optional Fields
- 12th Half-Yearly Score

## Validation Rules
- All required fields must be filled
- Mobile number must be exactly 10 digits
- Pincode must be exactly 6 digits
- Date of birth must be a valid date

## Styling
- Matches the design pattern of other HOPE3 pages
- White background with gradient page title
- Responsive design that works on desktop and mobile
- Form validation styling with error states
- Success/error message styling
- Smooth transitions and hover effects

## Navigation Integration
All "Join HOPE3" and "Get Involved" buttons throughout the application now navigate to the student application page:
- Main navigation dropdown
- WhyHope3 page CTA button
- GetInvolvedExamples component
- ButtonTest component