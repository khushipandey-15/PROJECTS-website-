async function getEmoji() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  resultDiv.innerText = "Thinking... 🧠";

  try {
    // Get random emoji
    const res = await fetch("https://emojihub.yurace.pro/api/random");
    const data = await res.json();

    let emoji = data.htmlCode[0]; // emoji symbol
    let category = data.category;

    resultDiv.innerHTML = `Based on your mood, here's a unique emoji: <br><span style="font-size: 4rem">${emoji}</span><br><small>Category: ${category}</small>`;
  } catch (error) {
    resultDiv.innerText = "Failed to load emoji 😢. Try again!";
    console.error(error);
  }
}
