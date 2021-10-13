import axios from "axios";

/**
 * Client ID and token  given on dev.twitch.tv for current application.
 */
const TWITCH_CLIENT_ID = 'yz5n2u3a4ndqpj26epa0h68795tabc';
const TWITCH_TOKEN = 'e7mriu2xjbbk0j5zsbe6i71g7ync9v';
// TODO: Change user ID for ID after authentication.
const TWITCH_MASTER_USER_ID = '460736770';
// const TWITCH_SECRET = 'n9xa6n8mcfekqck5tyzibdhxdu6ecb';

const twitchAxiosInstance = axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    "Client-ID": TWITCH_CLIENT_ID,
    "Authorization": 'Bearer ' + TWITCH_TOKEN,
  },
});

export const getTopGames = async () => {
  const response = await twitchAxiosInstance.get(
    '/games/top');
  return response.data;
}

export const getStreams = async () => {
  const response = await twitchAxiosInstance.get(
    `/streams/`);
  return response.data;
}
