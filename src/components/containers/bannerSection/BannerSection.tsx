import { PropsWithChildren } from "react";
import { SearchBar } from "../.."

require("./banner-section.css");

interface BannerSectionProps {
  title: string,
  searchBar?: boolean,
}

export const BannerSection = ({title, searchBar = false, children}: PropsWithChildren<BannerSectionProps>) => {
  return (
    <div className="banner-section">
      <div className="banner-section-header">
        <h2 className="banner-section-title">{title}</h2>
        {searchBar ? <SearchBar /> : null}
      </div>
      {children}
    </div>
  );
};