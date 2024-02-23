import React, { useState } from 'react';
import axios from 'axios';

const CreateAdvertisement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [paymentPerHour, setPaymentPerHour] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [classConductingDate, setClassConductingDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showMyAddButton, setShowMyAddButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/advertisement/postadd', {
        title,
        description,
        paymentPerHour,
        teacherName,
        classConductingDate,
        phoneNumber,
      });
      console.log(response.data);
      setSuccessMessage('ADD POST SUCCESSFUL');
      setShowMyAddButton(true);
    } catch (error) {
      console.error(error);
      setSuccessMessage('Failed to post add');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>Create an Advertisement</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="please add subject name"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={paymentPerHour}
          onChange={(e) => setPaymentPerHour(e.target.value)}
          placeholder="Payment Per Hour"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          placeholder="Teacher Name"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={classConductingDate}
          onChange={(e) => setClassConductingDate(e.target.value)}
          placeholder="Class Conducting Date"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
        {successMessage && <p>{successMessage}</p>}
        {showMyAddButton && (
          <button
            onClick={() => {
              window.location.href = '/teacher/myadd';
            }}
            style={styles.navigateButton}
          >
            Go to My Add
          </button>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    width: '300px',
    height: 'auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
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
  navigateButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2E64FE',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CreateAdvertisement;
