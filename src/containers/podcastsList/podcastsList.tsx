import React, { useState, useEffect } from 'react';

import { useGetPodcasts } from '../../hooks/useGetPodcast';
import { Podcast } from '../../interfaces/podcast';

const PodcastsList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const { data, isLoading } = useGetPodcasts();

  useEffect(() => {
    if (data?.feed?.entry && !isLoading) {
      setPodcasts(data?.feed?.entry);
    }
  }, [data, isLoading]);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {isLoading
            ? 'Loading'
            : podcasts.map((podcast: Podcast, index: number) => (
                <li key={index}>{podcast['im:name'].label}</li>
              ))}
        </ul>
      </header>
    </div>
  );
};

export default PodcastsList;
