import React from 'react';

const supportPageStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  content: {
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#0066cc',
    fontSize: '36px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.4',
  },
  contactInfo: {
    marginTop: '20px',
  },
  contactInfoItem: {
    fontSize: '16px',
    margin: '10px 0',
  },
  logo: {
    width: '100px', // Adjust the logo's width
    marginBottom: '20px',
    borderRadius: '50%', // Make the image circular
  },
};

const SupportPage = () => {
  // Import the image using require
  const logo = require('../public/5.png');

  return (
    <div style={supportPageStyles.container}>
      <div style={supportPageStyles.content}>
        {/* Use the imported image with a circular shape */}
        <img src={logo} alt="Company Logo" style={supportPageStyles.logo} />
        <h1 style={supportPageStyles.title}>Contact Support</h1>
        <p style={supportPageStyles.paragraph}>
          Welcome to our support page. If you have any questions, issues, or need assistance,
          please don't hesitate to reach out to our support team. We're here to help!
        </p>
        <div style={supportPageStyles.contactInfo}>
          <p style={supportPageStyles.contactInfoItem}>Email: support@example.com</p>
          <p style={supportPageStyles.contactInfoItem}>Phone: +1 (123) 456-7890</p>
        </div>
        {/* Add more text or content as needed */}
      </div>
    </div>
  );
};

export default SupportPage;
