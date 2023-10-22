import React, { useState } from "react";

function GenerateAnimal() {
  const [animalName, setAnimalName] = useState("");
  const [randomAdjective, setRandomAdjective] = useState("");
  const [error, setError] = useState("");
  const [imageURL, setImageURL] = useState("");

  const generateRandomAdjective = () => {
    const adjectives = [
      "happy",
      "colorful",
      "playful",
      "majestic",
      "cuddly",
      "graceful",
    ];
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    return adjectives[randomIndex];
  };

  const fetchGoogleImage = async (animalName) => {
    const apiKey = "YOUR_GOOGLE_API_KEY"; 

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${animalName}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const imageURL = data.items[0].link;
        setImageURL(imageURL);
      } else {
        setError("No image found for the given query");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setError("Error fetching image");
    }
  };

  const handleGenerate = () => {
    if (animalName.length < 2 || animalName.length > 20) {
      setError("Animal name must be 2 to 20 characters long");
    } else {
      const randomAdj = generateRandomAdjective();
      setRandomAdjective(randomAdj);
      setError("");
      fetchGoogleImage(`${animalName} ${randomAdj}`);
    }
  };

  const handleInputChange = (e) => {
    setAnimalName(e.target.value);
  };

  return (
    <div className="container">
      <label className="name-label">
        Enter your favorite animal:
        <input
          className="name"
          type="text"
          value={animalName}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleGenerate}>Generate</button>

      {error && <p>{error}</p>}
      {randomAdjective && <p>Random Adjective: {randomAdjective}</p>}
      {imageURL && <img src={imageURL} width={"100%"} alt="Random Animal" />}
    </div>
  );
}

export default GenerateAnimal;
