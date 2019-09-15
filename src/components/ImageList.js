import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard';


const ImageList = props => {
  /* Destructuring image object to retrieve specific values without constantly referencing the object itself */
  const images = props.images.map((image) => {
    /* key property must be added to the root JSX tag being returned by the map statement */
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{images} </div>;
};

export default ImageList;
