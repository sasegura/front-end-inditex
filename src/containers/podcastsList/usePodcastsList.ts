import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useGetFilteredPodcasts from '../../hooks/useGetFilteredPodcasts';
import { useGetPodcasts } from '../../hooks/useGetPodcast';
import { Podcast } from '../../interfaces/podcast';

const usePodcastList = () => {
  const [filter, setFilter] = useState<string>('');
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const { data, isLoading } = useGetPodcasts();
  const { filteredPodcast } = useGetFilteredPodcasts({ filter, podcasts });

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.feed?.entry && !isLoading) {
      setPodcasts(data?.feed?.entry);
    }
  }, [data, isLoading]);

  const onHandleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const onHandleClick = (podcastId: string) => {
    navigate(`podcast/${podcastId}`);
  };

  return { filteredPodcast, filter, onHandleFilter, isLoading, onHandleClick };
};

export default usePodcastList;
