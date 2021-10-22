import React, { useEffect, useState } from "react";
import { getTopGames } from "../../../services";
import { CarrouselCard } from "../carrouselCard/CarrouselCard";

require('./carrousel.css');

/**
 * Class component to display a set of video cards.
 */
export const Carrousel = () => {

  const [topGames, setTopGames] = useState<Array<any>>([]);

  useEffect(() => {
    console.log('useEffect')
    updateTopGames();
  }, [])

  const updateTopGames = async (number: number = 15) => {
    const topGamesResponse: any = await getTopGames();
    setTopGames(topGamesResponse.data.slice(1, number));
  }

  return (
    <div className="carrousel-container">
      <img src="./assets/icons/left_arrow.svg" className="carrousel-right-arrow"/>
      {topGames.map((game) =>
        <CarrouselCard name={game.name} background={game.box_art_url} ></CarrouselCard>
        )}
      <img src="./assets/icons/right_arrow.svg" className="carrousel-left-arrow"/>
    </div>
  );
};
