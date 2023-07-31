import { getEpisodes, getEpisodesCors } from '../queryFunctions/getEpisodes';
import { useQuery } from '@tanstack/react-query';

export const useGetEpisodes = ({ podcastId }: any) => {
  const episodes = useQuery(
    [`getPodcastsDetail${podcastId}`, podcastId],
    getEpisodes
  );
  const { isError } = episodes;

  const episodes2 = useQuery(
    [`getPodcastsDetailCors${podcastId}`, podcastId, isError],
    getEpisodesCors
  );

  return isError ? episodes2 : episodes;
};
