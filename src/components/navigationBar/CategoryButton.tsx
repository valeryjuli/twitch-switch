import { Category } from "./types"

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