
/**
 * Twitch navigation category interface.
 */
export interface Category {
  title: string,
  logo: string,
}

/**
 * Twitch stream.
 */
export interface Stream {
  game_id: string,
  game_name: string,
  id: number,
  is_mature: boolean,
  language: string,
  started_at: string,
  tag_ids: Array<string>,
  thumbnail_url: string
  title: string,
  type: string,
  user_id: number,
  user_login: string,
  user_name: string,
  viewer_count: number,
}
