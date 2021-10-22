import { useState } from "react";
import { ActiveStreamersSection, CategoriesSection, CategoryButton } from "../../components";
import { Category } from "../../types/types";

require('./navigationBar.css');

export const NavigationBar = () => {

  const [selectedCategory, setSelectedCategory] = useState<Category>({title: 'Games', logo:'games_icon.svg'})

  return (
    <div className="navigation-bar">
      <div className="logo">
        <img src="/assets/twitch_switch_logo.png" alt="twitch swith logo" width="120" height="85"></img>
      </div>
      <CategoryButton category={selectedCategory}  active={true}/>
      <CategoriesSection />
      {/* <hr style={{height: '1px', width: '80%'}}/> */}
      <ActiveStreamersSection/>
    </div>
  )
}