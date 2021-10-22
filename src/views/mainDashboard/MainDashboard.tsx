import { BannerSection, Carrousel } from "../../components";

require('./mainDashboard.css');

export const MainDashboard = () => {

  return (
    <div className="main-dashboard">
      <BannerSection title="Games" searchBar={true}>
        <Carrousel />
      </BannerSection>
      <BannerSection title="Featured Streams" searchBar={true}/>
    </div>
  )
}