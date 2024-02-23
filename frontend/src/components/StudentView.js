import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdvertisementList = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

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

  // Function to handle the search query change and filter advertisements
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterAdvertisements(e.target.value);
  };

  // Function to filter advertisements based on the search query
  const filterAdvertisements = (query) => {
    const filteredAds = advertisements.filter((advertisement) =>
      advertisement.title.toLowerCase().includes(query.toLowerCase())
    );
    setAdvertisements(filteredAds);
  };

  return (
    <div style={styles.container}>
      <h1>Advertisements</h1>

      {/* Search input for filtering advertisements by title */}
      <div style={styles.searchBlock}>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchQuery}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.adContainer}>
        {advertisements.map((advertisement) => (
          <div key={advertisement._id} style={styles.advertisement}>
            <h2>{advertisement.title}</h2>
            <p>Description: {advertisement.description}</p>
            <p>Payment per Hour: {advertisement.paymentPerHour}</p>
            <p>Teacher Name: {advertisement.teacherName}</p>
            <p>Class Conducting Date: {advertisement.classConductingDate}</p>
            <p>Phone Number: {advertisement.phoneNumber}</p>
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
  searchBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    width: '50%',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '0 auto',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: '#D2B48C', // Light brown color
  },
};

export default AdvertisementList;
