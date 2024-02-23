import React from 'react';
import backgroundImage from '../images/3.jpg'; // Replace with the actual path to your image
import Button from '@mui/material/Button';

export default function TeacherView() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    width: '300px', // Increased button width
    padding: '30px 0', // Increased button height
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '16px',
  };

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <Button
          href='/login'
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle the click event for CREATE ADVERTISEMENT
          }}
          style={buttonStyle}
        >
          LOGIN FOR STUDENTS
        </Button>
        <Button  
          href="/teacher/login"
          variant="contained"
          color="secondary"
          onClick={() => {
            // Handle the click event for VIEW MY ADS
          }}
          style={buttonStyle}
        >
          LOGIN FOR TEACHERS
        </Button>
      </div>
      {/* Your content goes here */}
    </div>
  );
}
