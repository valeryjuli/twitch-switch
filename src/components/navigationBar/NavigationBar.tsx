import { useState } from "react";
import { ActiveStreamers } from "./ActiveStreamers"
import { CategoriesMenu } from "./CategoriesMenu"
import { CategoryButton } from "./CategoryButton";
import { Logo } from "./Logo"
import { Category } from "./types";

require('./styles/navigationBar.css');

export const NavigationBar = () => {

  const [selectedCategory, setSelectedCategory] = useState<Category>({title: 'Games', logo:'games_icon.svg'})

  return (
    <div className="navigation-bar">
      <Logo />
      <CategoryButton category={selectedCategory}  active={true}/>
      <CategoriesMenu/>
      <ActiveStreamers/>
    </div>
  )
}