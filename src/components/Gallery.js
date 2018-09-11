import React from "react";
import "../styles/gallery.css";

const IMAGES = [];
for (let i = 1; i < 51; i++)
  IMAGES.push(
    "https://rcereghini.github.io/assets/galleryImages/gallery" + i + ".jpg"
  );

function Gallery(props) {
  return (
    <div className="container">
      <p className="intro">{props.intro}</p>
      {IMAGES.map((image, i) => <img src={image} className="galleryImages" />)}
    </div>
  );
}

export default Gallery;
