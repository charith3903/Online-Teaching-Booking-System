import React from 'react';
import backgroundImage from '../images/2.jpg'; // Replace with the actual path to your image
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
    width: '400px', // Increased button width
    padding: '40px 0', // Increased button height
    fontSize: '20px', // Increased text size
    fontWeight: 'bold', // Make text bold
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '16px',
  };

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <Button
          href='/teacher/createadd'
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle the click event for CREATE ADVERTISEMENT
          }}
          style={buttonStyle}
        >
          Create Ad
        </Button>
        <Button  
          href="/teacher/myadd"
          variant="contained"
          color="secondary"
          onClick={() => {
            // Handle the click event for VIEW MY ADS
          }}
          style={buttonStyle}
        >
          View Ads
        </Button>
      </div>
      {/* Your content goes here */}
    </div>
  );
}
