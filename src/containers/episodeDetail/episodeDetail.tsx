import EpisodePlayer from '../../components/episodePlayer/episodePlayer';
import useEpisodeDetail from './useEpisodeDetail';

const EpisodeDetail = () => {
  const { episodeName, episodeDescription, episodeAudio } = useEpisodeDetail();

  return (
    <EpisodePlayer
      episodeName={episodeName}
      episodeDescription={episodeDescription}
      episodeAudio={episodeAudio}
    />
  );
};

export default EpisodeDetail;
