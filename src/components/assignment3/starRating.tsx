import React from "react";
import { useState } from "react";
import "./styles.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="star-rating">
      <h1>Rating Assignment</h1>
      {arr.map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star" title={`star ${index}`}>
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
