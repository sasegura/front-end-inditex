import React, { useState, useEffect } from 'react';

import './App.css';
import { Podcast } from './interfaces/podcast';
import { useGetPodcasts } from './hooks/useGetPodcast';

function App() {
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
            : podcasts.map((podcast: Podcast) => (
                <li>{podcast['im:name'].label}</li>
              ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
