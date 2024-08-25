import React, { useState } from 'react';
import axios from 'axios';
import PersonaForm from './PersonaForm';
import SearchBar from './searchBar';
import ImageDisplay from './ImageDisplay';
import VideoGenerator from './VideoGenerator';

const ImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [personaDescription, setPersonaDescription] = useState('');

  const fetchImage = async (query) => {
    try {
      const response = await axios.get('http://localhost:5001/fetch-image', {
        params: { q: query }
      });
      setImageUrl(response.data.url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const handlePersonaSubmit = (personaData) => {
    const { age, skinColor, traits, voiceType } = personaData;
    const description = `${age} years old, ${skinColor}, ${traits}, voice type: ${voiceType}`;
    setPersonaDescription(description);
    fetchImage(description); // Automatically fetch image with the persona description
  };

  return (
    <div>
      {/* Render PersonaForm first */}
      <PersonaForm onSubmit={handlePersonaSubmit} />

      {/* Render the SearchBar with the persona description (if needed) */}
      {personaDescription && <SearchBar onSearch={fetchImage} initialQuery={personaDescription} />}

      {/* Display the fetched image */}
      <ImageDisplay imageUrl={imageUrl} />

      {/* If there's an image, render the VideoGenerator */}
      {imageUrl && <VideoGenerator imageUrl={imageUrl} />}
    </div>
  );
};

export default ImageFetcher;
