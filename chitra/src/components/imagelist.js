import React from "react";

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return (
      <img
        alt={image.alt_description}
        key={image.id}
        src={image.urls.regular}
      />
    );
  });
  return (
    <div>
      <h1>{images}</h1>
    </div>
  );
};

export default ImageList;
