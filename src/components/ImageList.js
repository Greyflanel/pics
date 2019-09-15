import React from "react";

const ImageList = props => {
  console.log(props);
  /* Destructuring image object to retrieve specific values without constantly referencing the object itself */
  const images = props.images.map(({ description, id, urls }) => {
    /* key property must be added to the root JSX tag being returned by the map statement */
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
