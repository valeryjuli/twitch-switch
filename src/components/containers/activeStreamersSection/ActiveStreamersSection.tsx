import { useEffect, useState } from "react"
import { getStreams } from "../../../services";
import { StreamerCard } from "../../elements/streamerCard/StreamerCard";
import { Stream } from "../../../types/types";

require("./active-streamers-section.css");

export const ActiveStreamersSection = () => {

  const [streamers, setStreamers] = useState<Array<Stream | any>>([]);

  useEffect(() => {
    getLiveStreamers();
  }, [])
      
  const getLiveStreamers = async (number: number = 10) => {
    const streams: any  = await getStreams();
    setStreamers(streams.data.slice(1, number));
  }

  return (
    <div className="active-streamers-wrapper">
    {streamers.map((streamer, index) => (
      <StreamerCard stream={streamer} live={streamer.type} key={streamer.id}/>
    ))}
    </div>)
}