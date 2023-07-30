import { API_URL, PODCAST_LIST_URL } from '../utils/constant';

export const getPodcast = async () => {
  const podcasts = await fetch(
    `${API_URL}${PODCAST_LIST_URL}`
  ).then(async (response) => {
    return response.json();
  }).catch((error) => {
    console.error(error)
  });
  return podcasts;
};
