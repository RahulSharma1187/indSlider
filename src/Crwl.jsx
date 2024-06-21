import React, { useEffect, useState } from "react";

import img1 from "../public/images/1.jpeg";
import img2 from "../public/images/2.jpeg";
import img3 from "../public/images/3.jpeg";

import './crwl.css'

function Crwl() {
  const [slider, setSlider] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const data = [
    {
      id: 1,
      title1: "Slide1 Lorem ipsum dolor sit.",
      title2: "Lorem ipsum dolor sit. amet consectetur.",
      title3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, inventore?",
      imgName: img1
    },
    {
      id: 2,
      title1: "Slide2 Lorem ipsum dolor sit.",
      title2: "Lorem ipsum dolor sit. amet consectetur.",
      title3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, inventore?",
      imgName: img2
    },
    {
      id: 3,
      title1: "Slide3 Lorem ipsum dolor sit.",
      title2: "Lorem ipsum dolor sit. amet consectetur.",
      title3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, inventore?",
      imgName: img3
    }
  ];

  const handleSlideChange = (direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setSlider((prev) =>
        direction === 'next' ? (prev === data.length - 1 ? 0 : prev + 1) : (prev === 0 ? data.length - 1 : prev - 1)
      );
    }, 3000);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange('next');
    }, 3200); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="slider">
      { 
        data.map((item, index) => (
          <div className={`slider-img ${index === slider ? (isAnimating ? 'active animate' : 'active') : 'inactive'}`} key={item.id}>
            {index === slider && (
              <>
                <div className="slider-Txt">
                  <p>{item.title1}</p>
                  <h2>{item.title2}</h2>
                  <h3>{item.title3}</h3>
                </div>
                <img className="imgName" src={item.imgName} alt={`Slide ${item.id}`}  />
              </>
            )}
          </div>
        ))
      }
      <div className="slider-btn">
        <button onClick={() => handleSlideChange('prev')}> - </button>
        <button onClick={() => handleSlideChange('next')}> + </button>
      </div>
    </div>
  );
}

export default Crwl;
