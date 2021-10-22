import { CategoryButton } from "../../elements/categoryButton/CategoryButton";
import { Category } from "../../../types/types";

require("./categories-section.css");

/**
 * Default initialization categories.
 */
const DEFAULT_CATEGORIES: Array<Category> = [
  {
    title: "Games",
    logo: "games_icon_white.svg",
  },
  {
    title: "Music",
    logo: "music_icon.svg",
  },
  {
    title: "ESports",
    logo: "esports_icon.svg",
  },
  {
    title: "Battle Royale",
    logo: "br_icon.svg",
  },
];
export const CategoriesSection = () => {
  return (
    <div className="categories-menu-wrapper">
      {DEFAULT_CATEGORIES.map((cat, index) => (
        <CategoryButton category={cat} key={index} />
      ))}
    </div>
  );
};
