import React, { useState } from "react";
import { getTopGames } from "../../api-tools";

/**
 * Class component to display a set of video cards.
 */
export const VideoGallery = () => {

  const [topGames, setTopGames] = useState([]);

  const updateMe = () => {
    getTopGames();
    topGames.forEach((game) => {
      console.log(game);
      return <div>Hello</div>
    })
    return <div>Dumb</div>
  }

  return (
    <div className="video-gallery">
      Gallery
      <div>
        {updateMe()}
      </div>
    </div>
  );
};
