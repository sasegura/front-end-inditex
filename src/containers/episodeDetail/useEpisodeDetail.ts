import { useState, useEffect } from 'react';
import { Episode } from '../../interfaces/episode';
import { useParams } from 'react-router-dom';
import { useGetEpisodes } from '../../hooks/useGetEpisodes';

const useEpisodeDetail = () => {
  const { podcastId, episodeId } = useParams() as {
    podcastId: string;
    episodeId: string;
  };

  const [episodeName, setEpisodeName] = useState('');
  const [episodeDescription, setEpisodeDescription] = useState('');
  const [episodeAudio, setEpisodeAudio] = useState('');

  const { data, isLoading } = useGetEpisodes({ podcastId });
  const episodeArray = data?.results;

  useEffect(() => {
    const episodeDetails = episodeArray?.find((episode: Episode) => {
      return episode.trackId.toString() == episodeId;
    });

    if (episodeDetails && !isLoading) {
      setEpisodeName(episodeDetails.trackName);
      setEpisodeDescription(episodeDetails.description);
      setEpisodeAudio(episodeDetails.episodeUrl);
    }
  }, [episodeArray, isLoading]);
  return { isLoading, episodeName, episodeDescription, episodeAudio };
};
export default useEpisodeDetail;
