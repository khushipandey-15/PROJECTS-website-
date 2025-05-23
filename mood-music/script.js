const songs = {
  happy: [
    { title: "Kar Gayi Chull – Kapoor & Sons", url: "https://open.spotify.com/track/3BhjbaGeI7E0CiIjctfdD3?si=762ebd9949b54932" },
    { title: "Gallan Goodiyan – Dil Dhadakne Do", url: "https://open.spotify.com/track/7hNYvX0qAKrxtVr1jGDmvR?si=d9750c30d3a64848" }
  ],
  sad: [
    { title: "Channa Mereya – Ae Dil Hai Mushkil", url: "https://open.spotify.com/track/0H2iJVgorRR0ZFgRqGUjUM?si=fe58a23fb9d34614" },
    { title: "Tujhe Kitna Chahne Lage – Kabir Singh", url: "https://open.spotify.com/track/2Fv2injs4qAm8mJBGaxVKU?si=94abdbfb79654705" }
  ],
  energetic: [
    { title: "Malhari – Bajirao Mastani", url: "https://open.spotify.com/track/2K9uOczZgzGzvxb7ZgRJNK?si=5b0f62e507d24656" },
    { title: "Zinda – Bhaag Milkha Bhaag", url: "https://open.spotify.com/track/7vZz8oJ5qAqB9MghufRK5k?si=f07bec2fa28344c8" }
  ],
  relaxed: [
    { title: "Ilahi – Yeh Jawaani Hai Deewani", url: "https://open.spotify.com/track/5cgKosPPj5Cs9a2JQufUc1?si=3e1bd25b83034f00" },
    { title: "Raabta – Agent Vinod", url: "https://open.spotify.com/track/6FjbAnaPRPwiP3sciEYctO?si=a4b4e43ef5ca43c2" }
  ]
};

function showSongs(mood) {
  const songList = document.getElementById("song-list");
  const selectedSongs = songs[mood];
  songList.innerHTML = selectedSongs.map(song =>
    `<div class="song-card"><a href="${song.url}" target="_blank">${song.title}</a></div>`
  ).join("");
}