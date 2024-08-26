# AI Business Video Commercial Generator

**Hosted live on Vercel:** [https://video-commercial-ai-opo7.vercel.app/](https://video-commercial-ai-opo7.vercel.app/)

**NOTE : Backend deployed on Render may not respond since it becomes inactive after sometime on the free plan**
**BackEnd Deployed on Render :** [https://videocommercial-ai.onrender.com](https://videocommercial-ai.onrender.com)


## Overview

The **AI Business Video Commercial Generator** is a web application that allows users and businesses to create personalized video commercials using AI technology. Users can input details about the desired model or AI actor (e.g., "handsome young 22-year-old Indonesian man") that they want to feature in their brand or product commercial video.

### Workflow

1. **Fill Out the Form:** Users first fill out a form where they provide details about the model, such as age, skin color, and personality traits.
2. **Image Generation:** An AI-generated image of the desired model is fetched using the Bing v7 Image Search API.
3. **Text Input:** The user then enters the text that the model will speak in the video.
4. **Voice Selection:** The user selects a male or female voice for the narration.
5. **Commercial Generation:** A high-quality commercial video is generated and made available for download.

## Features

- **Personalized Model Selection:** Users can provide specific details like age, skin color, and personality traits to customize the model.
- **Image Fetching:** The app integrates with the Bing Image Search API to fetch images based on user input.
- **Video Generation:** Uses the D-ID API to generate videos from the fetched images and user-provided text.
- **Voice Customization:** Allows users to choose between a male or female voice for the video narration.
- **Downloadable Video:** Users can download the generated video for further use.

## Technologies Used

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **APIs:** Bing Image Search API, D-ID Talks API endpoint

## Getting Started

### Prerequisites

- Access to Bing Image Search API
- Access to D-ID API
- MongoDB connection URL

### To Run Locally

1. **Clone the Repository**

```bash

git clone https://github.com/raveesh146/VideoCommercial_AI

```

**Create a .env file in the backend directory and include the following**
```bash
BING_API_KEY=your_bing_api_key
DID_API_KEY=your_did_api_key
MONGODB_URL=your_mongodb_url
```


open terminal in the backend folder 
```bash  
cd backend
npm install
nodemon server.js
```
open terminal in the frontend folder and start react app
```bash  
cd frontend
npm install
npm start
```


The application will be available at http://localhost:3000 in your web browser.