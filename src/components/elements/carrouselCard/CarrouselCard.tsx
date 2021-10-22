import { PropsWithChildren } from "react"

require('./carrousel-card.css');

const GAME_CARD_WIDTH = 60;
const GAME_CARD_HEIGHT = 64;

interface CarrouselCardProps {
  background: string,
  name: string,
}
export const CarrouselCard = (props: PropsWithChildren<CarrouselCardProps>) => {

  return (
    <div className="carrousel-card">
      <img
        className="carrousel-card-background"
        id={props.name}
        src={props.background.replace("{width}", `${GAME_CARD_WIDTH}`).replace("{height}", `${GAME_CARD_HEIGHT}`)}
        alt={`${props.name}`}
      />
      {props.children}
    </div>
  )
}