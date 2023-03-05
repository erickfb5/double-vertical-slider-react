import { useState } from "react";

import slideImages from "./slideImages";
import "./App.css";

const App = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (direction) => {
    const slidesLength = slideImages.length;
    let newActiveIndex;

    if (direction === "up") {
      newActiveIndex =
        activeSlideIndex === slidesLength - 1 ? 0 : activeSlideIndex + 1;
    } else if (direction === "down") {
      newActiveIndex =
        activeSlideIndex === 0 ? slidesLength - 1 : activeSlideIndex - 1;
    }

    setActiveSlideIndex(newActiveIndex);
  };

  return (
    <div className="slider-container">
      <div
        className="left-slide"
        style={{ top: `-${activeSlideIndex * 100}vh` }}
      >
        {slideImages.map((image, index) => (
          <div key={index} style={{ backgroundColor: image.color }}>
            <h1>{image.title}</h1>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      <div className="right-slide">
        {slideImages.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${image.imageUrl})` }}
          ></div>
        ))}
      </div>
      <div className="action-buttons">
        <button
          className="down-button"
          onClick={() => handleSlideChange("down")}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className="up-button" onClick={() => handleSlideChange("up")}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
