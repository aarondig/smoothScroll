import React from "react"
import images from "./components/content"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="scroll">
        {images.map((image, index) => (
          <div key={index} className="img-container">
            <img src={image} />
            </div>
            
        ))}
      </div>
    </div>
  );
}

export default App;
