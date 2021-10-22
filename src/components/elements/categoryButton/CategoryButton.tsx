import { Category } from "../../../types/types"

require("./category-button.css");

interface CategoryButtonProps {
  category: Category,
  active?: boolean,
}

export const CategoryButton = ({ category, active = false }: CategoryButtonProps) => {
  return (
    <div className={active ? "category-button enabled" : "category-button disabled"}>
      <img src={`/assets/icons/${category.logo}`} alt={`${category.title} icon`}></img>
      <div className="category-button-text">{category.title}</div>
    </div>)
}