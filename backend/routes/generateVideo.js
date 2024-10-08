const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { imageUrl, text, voiceId } = req.body;
  const apiKey = process.env.DID_API_KEY;
  const apiUrl = 'https://api.d-id.com/talks';

  try {
    console.log(voiceId)
    const startResponse = await axios.post(apiUrl, {
      source_url: imageUrl,
      script: {
        type: "text",
        input: text,
        provider: {
          type: "microsoft",
          voice_id: voiceId
        }
      },
      config: {
        fluent: false,
        pad_audio: 0.0
      }
    }, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Basic ${apiKey}`
      }

    });

    const { id } = startResponse.data;
    
    // Poll the API until the video generation is complete
    const pollForResult = async () => {
      const response = await axios.get(`${apiUrl}/${id}`, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Basic ${apiKey}`
        }
      });

      if (response.data.status === 'done') {
        return response.data.result_url;  // Return the video URL
      } else {
        // Wait for a bit and poll again
        await new Promise(resolve => setTimeout(resolve, 8000));
        return pollForResult();
      }
    };

    const videoUrl = await pollForResult();
    res.json({ videoUrl });  // Send the video URL to the frontend

  } catch (error) {
    console.error('Error generating video:', error);
    res.status(500).json({ error: 'Error generating video' });
  }
});

module.exports = router;
