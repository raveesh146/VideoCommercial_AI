import React, { useState } from 'react';
import axios from 'axios';

const VideoGenerator = ({ imageUrl }) => {
  const [text, setText] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false); 
  const [voiceType, setVoiceType] = useState('');

  const generateVideo = async () => {
    setLoading(true);
    let voiceId=''

        if (voiceType.toLowerCase() == 'female') {
          voiceId = 'en-US-JennyNeural';
        } else if (voiceType.toLowerCase() == 'male') {
          voiceId = 'en-GB-RyanNeural'; 
        }


    try {
      console.log(voiceId);
      
      const response = await axios.post('https://videocommercial-ai.onrender.com/generate-video', {
        imageUrl,
        text,
        voiceId
      });
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error('Error generating video:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text to be spoken"
      />
      <input 
        type="text" 
        value={voiceType} 
        onChange={(e) => setVoiceType(e.target.value)} 
        placeholder="Enter Voice Type (Male/Female)"
      />

      <button onClick={generateVideo}>Generate Video</button>

      {loading && <p>Loading...</p>} {/* Display Loading... while generating video */}

      {videoUrl && (
        <div className="video-display">
          <h3>Your Video:</h3>
          <video src={videoUrl} controls />
          <br />
          <button 
            className="download-button" 
            onClick={() => {
              const link = document.createElement('a');
              link.href = videoUrl;
              link.download = 'generated-video.mp4';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGenerator;
