import React from "react";

const FavMovieCard = ({ image, desc }) => {
  return (
    <div className="relative inline-block min-w-[220px] w-[228px] h-[41dvh] mx-[5px] overflow-hidden group cursor-pointer">
      <img className="w-full h-full object-cover" src={image} alt={desc} />
    </div>
  );
};

export default FavMovieCard;
