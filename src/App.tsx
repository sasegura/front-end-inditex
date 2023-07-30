import './App.css';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import PodcastDetail from './containers/podcastDetail/podcastDetail';
import PodcastsList from './containers/podcastsList/podcastsList';
import EpisodeList from './containers/episodeList/episodeList';
import EpisodeDetail from './containers/episodeDetail/episodeDetail';

function App() {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<PodcastsList />} />
        <Route path="/podcast/:podcastId/" element={<PodcastDetail />}>
          <Route path="" element={<EpisodeList />} />
          <Route path="episode/:episodeId" element={<EpisodeDetail />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
