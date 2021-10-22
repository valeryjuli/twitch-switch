import { Stream } from "../../../types/types";

require("./streamer-card.css");

const PROFILE_PIC_SIZE = 35;
const LIVE_BUTTON_SIZE = 12;

interface StreamerCardProps {
  stream: Stream;
  live: boolean;
}

export const StreamerCard = ({ stream, live = false }: StreamerCardProps) => {
  return (
    <div className="streamer-card-wrapper">
      <img
        className="streamer-profile-img"
        src={stream.thumbnail_url.replace("{width}", `${PROFILE_PIC_SIZE}`).replace("{height}", `${PROFILE_PIC_SIZE}`)}
        alt={`${stream.user_name} profile`}
      ></img>
      <div className="streamer-card-details">
        <div className="streamer-card-user-status">
          <div className="streamer-card-username">{stream.user_name}</div>
          <img
            className={live ? "streamer-card-led live" : "streamer-card offline"}
            src={live ? '/assets/icons/active_led.svg' : '/assets/icons/unactive_led.svg'}
            alt={live ? "live" : "offline"}
            width={LIVE_BUTTON_SIZE}
            height={LIVE_BUTTON_SIZE}
          />
        </div>
          <div className="streamer-card-views">
            <img
              className="views-icon"
              src="/assets/icons/eye_icon.svg"
              alt="views count"
              width={LIVE_BUTTON_SIZE}
              height={LIVE_BUTTON_SIZE}
            />
            <div className="streamer-card-views-count">{stream.viewer_count}
          </div>
        </div>
      </div>
    </div>
  );
};
