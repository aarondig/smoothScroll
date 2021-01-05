import React, { useRef, useEffect } from "react";
import images from "./components/content";
import useWindowSize from "./hooks/windowSize";
import "./App.css";

function App() {
  const size = useWindowSize();

  const app = useRef();
  const scrollContainer = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);


// SCROLLING
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    //VARIABLES
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

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
