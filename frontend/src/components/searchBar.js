import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPersona = async () => {
      try {
        const response = await axios.get('http://localhost:5001/fetch-persona');
        if (response.data) {
          const personaDescription = response.data.description;
          setQuery(personaDescription);
          onSearch(personaDescription); // Automatically search with the persona
        }
      } catch (error) {
        console.error('Error fetching persona:', error);
      }
    };

    fetchPersona();
  }, [onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter Model Description" 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

