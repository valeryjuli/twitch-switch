import { useState } from "react";
import { CategoryButton } from "./CategoryButton";
import { Category } from "./types";

/**
 * Default initialization categories.
 */
const DEFAULT_CATEGORIES: Array<Category> = [
  {
    title: "Games",
    logo: "games_icon.svg",
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
export const CategoriesMenu = () => {
  const [categories, setCategories] = useState<Array<Category>>(DEFAULT_CATEGORIES);

  return (
    <div className="categories-menu-wrapper">
      {categories.map((cat, index) => (
        <CategoryButton category={cat} key={index} />
      ))}
    </div>
  );
};
