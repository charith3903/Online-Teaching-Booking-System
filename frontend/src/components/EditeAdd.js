// EditAdvertisement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAdvertisement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [advertisement, setAdvertisement] = useState({
    title: '',
    description: '',
    paymentPerHour: '',
    teacherName: '',
    classConductingDate: '',
    phoneNumber: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/advertisement/get/${id}`)
      .then((response) => {
        setAdvertisement(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdvertisement({
      ...advertisement,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/advertisement/update/${id}`, advertisement)
      .then((response) => {
        console.log('Advertisement details updated:', response.data);
        navigate('/teacher/myadd');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h1 style={styles.heading}>Edit Advertisement</h1>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title</label>
          <input
            type="text"
            name="title"
            value={advertisement.title}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description</label>
          <input
            type="text"
            name="description"
            value={advertisement.description}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="paymentPerHour" style={styles.label}>Payment Per Hour</label>
          <input
            type="text"
            name="paymentPerHour"
            value={advertisement.paymentPerHour}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="teacherName" style={styles.label}>Teacher Name</label>
          <input
            type="text"
            name="teacherName"
            value={advertisement.teacherName}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="classConductingDate" style={styles.label}>Class Conducting Date</label>
          <input
            type="text"
            name="classConductingDate"
            value={advertisement.classConductingDate}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={advertisement.phoneNumber}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <button type="button" onClick={handleUpdate} style={styles.button}>
          Update Advertisement
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',  // Use minHeight instead of height
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '3px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    width: '300px',
    maxWidth: '100%',  // Set maxWidth to ensure responsiveness
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#EFAE32',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default EditAdvertisement;
