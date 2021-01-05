import React, { useRef, useEffect } from "react";
import images from "./components/content";
import useWindowSize from "./hooks/windowSize";
import "./App.css";

function App() {
  const size = useWindowSize();

  const app = useRef();
  const scrollContainer = useRef();

  useEffect(() => {

    console.log(size.height)
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
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
