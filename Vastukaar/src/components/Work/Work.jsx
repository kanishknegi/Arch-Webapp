import { useState } from "react";
import img1 from "/images/pexels-chelsea-cook-2929910.jpg";
import img2 from "/images/pexels-expect-best-323776.jpg";
import img3 from "/images/pexels-joshua-135018.jpg";
import img4 from "/images/pexels-pixasquare-com-1115804.jpg";
import img5 from "/images/pexels-sharath-g-2251247.jpg";
import "./Work.css";

const Work = () => {
  const images = [img1, img2, img3, img4, img5];
  const [imageIndex, setImageIndex] = useState(0);

  const handleClickLeft = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else setImageIndex((prev) => prev - 1);
  };

  const handleClickRight = () => {
    if (imageIndex < images.length - 1) setImageIndex((prev) => prev + 1);
    else setImageIndex(0);
  };

  const handleSliderClick = (index) => {
    setImageIndex(index);
  };

  return (
    <>
      <div className="work-container">
        <button className="left" onClick={() => handleClickLeft()}>
          <i className="fa-solid fa-arrow-left-long p-10"></i>
        </button>

        <img
          key={imageIndex}
          src={images[imageIndex]}
          alt={`Image ${imageIndex + 1}`}
          loading="lazy"
        />

        <button className="right" onClick={() => handleClickRight()}>
          <i className="fa-solid fa-arrow-right-long p-10"></i>
        </button>
      </div>
      <div className="slider-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slider ${index === imageIndex ? "active" : ""}`}
            onClick={() => handleSliderClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Work;
