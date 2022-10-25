import React, { useState } from "react";

import { LikedIcon, UnlikedIcon } from "./children";

export const LikeButton = ({ initalValue, big }) => {
  const size = big ? "2rem" : "1rem";
  const [isLiked, setIsLiked] = useState(initalValue || false);
  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <div onClick={handleClick}>
      {isLiked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </div>
  );
};
