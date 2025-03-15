import React, { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Options</h2>

          <div className="option-container">
            {selectedOption === "option1" ? (
              <p className="option-details">Details for Option 1</p>
            ) : (
              <p
                className="option-title"
                onClick={() => setSelectedOption("option1")}
              >
                Option 1
              </p>
            )}
          </div>

          <div className="option-container">
            {selectedOption === "option2" ? (
              <p className="option-details">Details for Option 2</p>
            ) : (
              <p
                className="option-title"
                onClick={() => setSelectedOption("option2")}
              >
                Option 2
              </p>
            )}
          </div>

          <div className="option-container">
            {selectedOption === "option3" ? (
              <p className="option-details">Details for Option 3</p>
            ) : (
              <p
                className="option-title"
                onClick={() => setSelectedOption("option3")}
              >
                Option 3
              </p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {selectedOption ? (
            <>
              <h2>{selectedOption.replace("option", "Option ")}</h2>
              <img
                src={
                  selectedOption === "option1"
                    ? "https://via.placeholder.com/300/FF5733"
                    : selectedOption === "option2"
                    ? "https://via.placeholder.com/300/33FF57"
                    : "https://via.placeholder.com/300/3357FF"
                }
                alt="Selected Option"
                className="option-image"
              />
            </>
          ) : (
            <h2>Select an option</h2>
          )}
        </div>
      </div>
    </>
  );
}
