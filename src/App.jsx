import React, { useState } from "react";
import "./styles.css"; // Import separate CSS file
import Home from "./Home";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
