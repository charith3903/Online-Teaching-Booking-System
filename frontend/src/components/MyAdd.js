import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AdvertisementList = () => {
  const [advertisements, setAdvertisements] = useState([]);
  

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get('http://localhost:3001/advertisement/getAll');
        setAdvertisements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdvertisements();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/advertisement/delete/${productId}`);
      // Update the client-side state to remove the deleted advertisement
      setAdvertisements((prevAds) => prevAds.filter((ad) => ad._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  

  // Define handleChange and handleUpdateOk functions
 

 

  return (
    <div style={styles.container}>
      <h1>Advertisements</h1>
      <div style={styles.adContainer}>
        {advertisements.map((advertisement) => (
          <div key={advertisement._id} style={styles.advertisement}>
            <div>
              <h2>{advertisement.title}</h2>
              <p>Description: {advertisement.description}</p>
              <p>Payment per Hour: {advertisement.paymentPerHour}</p>
              <p>Teacher Name: {advertisement.teacherName}</p>
              <p>Class Conducting Date: {advertisement.classConductingDate}</p>
              <p>Phone Number: {advertisement.phoneNumber}</p>
             
            </div>
            <Link to={`/teacher/editeadd/${advertisement._id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(advertisement._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
  adContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  advertisement: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    border: '4px solid #8B4513',
    borderRadius: '8px',
    width: '300px',
  },
};

export default AdvertisementList;
