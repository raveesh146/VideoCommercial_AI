import React, { useState } from 'react';
import axios from 'axios';

const PersonaForm = ({ onSubmit }) => {
  const [persona, setPersona] = useState({
    model: '',
    age: '',
    skinColor: '',
    personalityTrait: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const description = `${persona.model} ${persona.age} ${persona.personalityTrait} ${persona.skinColor}`;
// when voicetype male- send male in api body and vice versa 
    try {
      await axios.post('https://videocommercial-ai.onrender.com/save-persona', { ...persona, description });
      onSubmit({ ...persona, description });
    } catch (error) {
      console.error('Failed to save persona:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="model" value={persona.name} onChange={handleChange} placeholder="Eg: Teen Girl, Young Man" />
      <input type="text" name="age" value={persona.age} onChange={handleChange} placeholder="Age of Model" />
      <input type="text" name="skinColor" value={persona.skinColor} onChange={handleChange} placeholder="Skin Color" />
      <input type="text" name="personalityTrait" value={persona.personalityTrait} onChange={handleChange} placeholder="Personality Trait" />
      <button type="submit">Choose Model</button>
    </form>
  );
};

export default PersonaForm;
