import { useParams } from 'react-router-dom';
import { useGetEpisodes } from '../../hooks/useGetEpisodes';

const useEpisodeList = () => {
  const { podcastId } = useParams() as {
    podcastId: string;
  };
  const { data, isLoading, isError, error } = useGetEpisodes({ podcastId });

  const episodes = data?.results;
  const counter = episodes?.length - 1;

  return { isError, error, counter, isLoading, episodes };
};
export default useEpisodeList;
