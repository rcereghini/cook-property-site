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
      <iframe
        className="video-responsive"
        width="420"
        height="315"
        src="https://www.youtube.com/embed/nmP70Lwb_s4"
        frameborder="0"
        margin="20"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
      <p className="intro">{props.intro}</p>
      {IMAGES.map((image, i) => <img src={image} className="galleryImages" />)}
    </div>
  );
}

export default Gallery;
