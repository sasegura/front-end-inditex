import { API_URL, EPISODE_LIST_URL } from '../utils/constant';

export const getEpisodes = async ({ queryKey }: any) => {
  const [_, podcastId] = queryKey;
  const episodes = await fetch(`
      ${API_URL}${EPISODE_LIST_URL}&id=${podcastId}`)
    .then(async (response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
  return episodes;
};

export const getEpisodesCors = async ({ queryKey }: any) => {
  const [_, podcastId, isError] = queryKey;
  if (isError) {
    const episodes = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${API_URL}${EPISODE_LIST_URL}&id=${podcastId}`
      )}`
    )
      .then(async (response) => {
        const data = await response.json();
        return JSON.parse(data?.contents);
      })
      .catch((error) => {
        console.error(error);
      });
    return episodes;
  }
  return {};
};
