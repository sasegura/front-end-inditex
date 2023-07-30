import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPodcasts } from '../../hooks/useGetPodcast';
import { Podcast } from '../../interfaces/podcast';

const usePodcastList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const { data, isLoading } = useGetPodcasts();

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.feed?.entry && !isLoading) {
      setPodcasts(data?.feed?.entry);
    }
  }, [data, isLoading]);

  const onHandleClick = (podcastId: string) => {
    navigate(`podcast/${podcastId}`);
  };

  return { podcasts, isLoading, onHandleClick };
};

export default usePodcastList;
