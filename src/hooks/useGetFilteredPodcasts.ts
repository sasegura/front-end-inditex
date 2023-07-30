import { useState, useEffect } from 'react';
import { Podcast } from '../interfaces/podcast';

interface PodcastsHook {
  podcasts: Podcast[];
  filter: string;
}

const useGetFilteredPodcasts = ({ podcasts, filter }: PodcastsHook) => {
  const [filteredPodcast, setFilteredPodcast] = useState<Podcast[]>([]);

  useEffect(() => {
    const filtered = podcasts.filter(
      (podcast: Podcast) =>
        podcast?.title?.label
          ?.toLowerCase()
          .includes(filter.toString().toLowerCase()) ||
        podcast["im:artist"]?.label?.toLowerCase().includes(filter.toString().toLowerCase())
    );

    setFilteredPodcast(filtered);
  }, [filter, podcasts]);

  return { filteredPodcast };
};
export default useGetFilteredPodcasts;
