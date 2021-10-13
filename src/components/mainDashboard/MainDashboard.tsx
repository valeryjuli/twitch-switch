import { BannerSection } from "./BannerSection"
import { StreamParty } from "./StreamParty"

require('./styles/mainDashboard.css');

export const MainDashboard = () => {

  return (
    <div className="main-dashboard">
      <BannerSection />
      <BannerSection />
      <StreamParty />
    </div>
  )
}