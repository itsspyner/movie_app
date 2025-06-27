import React from "react";

const FavMovieCard = ({ image, desc }) => {
  return (
    <div className="relative inline-block min-w-[220px] w-[228px] h-[41dvh] mx-[5px] overflow-hidden group cursor-pointer">
      <img className="w-full h-full object-cover" src={image} alt={desc} />

      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center text-[18px] py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Remove from Favourite
      </div>
    </div>
  );
};

export default FavMovieCard;
