import { useEffect, useState } from "react"
import { getStreams } from "../../api-tools";
import { StreamerCard } from "./StreamerCard";
import { Stream } from "./types";

export const ActiveStreamers = () => {

  const [streamers, setStreamers] = useState<Array<Stream | any>>([]);

  useEffect(() => {
    getLiveStreamers();
  }, [])
      
  const getLiveStreamers = async (number: number = 7) => {
    const streams: any  = await getStreams();
    console.log((streams as any));
    setStreamers(streams.data.slice(1, number));
  }

  return (
    <div className="active-streamers-wrapper">
    {streamers.map((streamer, index) => (
      <StreamerCard stream={streamer} live={streamer.type} key={streamer.id}/>
    ))}
    </div>)
}