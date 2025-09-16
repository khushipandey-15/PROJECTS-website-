# Mood Music - Bollywood Vibes 🎧

A simple and interactive web application that recommends Bollywood songs based on your current mood. Whether you're feeling happy, sad, energetic, or relaxed, Mood Music has curated Bollywood tracks for every emotion!

## 📝 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Song Collection](#song-collection)
- [Customization](#customization)
- [Future Enhancements](#future-enhancements)
- [Installation](#installation)
- [Live Demo](#live-demo)

## 🔍 Overview

Mood Music is a web-based application designed to provide Bollywood music recommendations based on the user's mood. With a clean and intuitive interface, users can select their current mood and get instant song suggestions with direct links to listen on Spotify.

## ✨ Features

- **Mood Selection**: Choose from four different moods - Happy, Sad, Energetic, and Relaxed
- **Curated Playlists**: Hand-picked Bollywood songs for each mood category
- **Direct Spotify Links**: One-click access to listen to songs on Spotify
- **Responsive Design**: Works well on desktop and mobile devices
- **Smooth Animations**: Engaging user interface with hover effects and transitions

## 💻 Technologies Used

- **HTML5**: Structure of the web application
- **CSS3**: Styling and animations
- **JavaScript**: Dynamic content and interactivity
- **Spotify**: External links to music streaming

## 🎮 Usage

1. Open the application in a web browser
2. Click on a mood button that matches how you're feeling
3. Browse the recommended songs that appear
4. Click on any song title to open it in Spotify

## 🎵 Song Collection

### 😊 Happy
- Kar Gayi Chull – Kapoor & Sons
- Gallan Goodiyan – Dil Dhadakne Do

### 😢 Sad
- Channa Mereya – Ae Dil Hai Mushkil
- Tujhe Kitna Chahne Lage – Kabir Singh

### 🔥 Energetic
- Malhari – Bajirao Mastani
- Zinda – Bhaag Milkha Bhaag

### 🌙 Relaxed
- Ilahi – Yeh Jawaani Hai Deewani
- Raabta – Agent Vinod

## 🎨 Customization

The application can be easily customized in the following ways:

### Adding More Songs
Edit the `script.js` file to add more songs to each mood category:

```javascript
const songs = {
  happy: [
    { title: "Existing Song", url: "spotify-url" },
    { title: "New Song", url: "new-spotify-url" }
  ],
  // other moods
};
```

### Changing Colors and Styling
Modify the `style.css` file to change the appearance:

- Background gradient: Edit the `linear-gradient` property in the `body` selector
- Button colors: Change the `background-color` values for `.buttons button`
- Card styling: Adjust properties in the `.song-card` selector

### Adding New Mood Categories
To add a new mood category:

1. Add a new button in `index.html`:
   ```html
   <button onclick="showSongs('newMood')">🎭 New Mood</button>
   ```

2. Add the corresponding songs in `script.js`:
   ```javascript
   const songs = {
     // existing moods
     newMood: [
       { title: "Song Title 1", url: "spotify-url-1" },
       { title: "Song Title 2", url: "spotify-url-2" }
     ]
   };
   ```

## 🚀 Future Enhancements

Potential improvements for future versions:

- Add audio previews for each song
- Implement a search function
- Include more mood categories
- Allow users to save favorite songs
- Create user accounts for personalized recommendations
- Add multi-language support

## 📥 Installation

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. No additional dependencies or installation required!

## 🌐 Live Demo

Access the live version of Mood Music here: [coming soon]

---

Created with ❤️ for Bollywood music lovers everywhere!