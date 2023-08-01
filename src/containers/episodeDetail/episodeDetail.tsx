import EpisodePlayer from '../../components/episodePlayer/episodePlayer';
import SkeletonEpisodePlayer from '../../components/skeletons/skeletonEpisodePlayer';
import useEpisodeDetail from './useEpisodeDetail';

const EpisodeDetail = () => {
  const { isLoading, episodeName, episodeDescription, episodeAudio } =
    useEpisodeDetail();

  return (
    <>
      {isLoading ? (
        <SkeletonEpisodePlayer />
      ) : (
        <EpisodePlayer
          episodeName={episodeName}
          episodeDescription={episodeDescription}
          episodeAudio={episodeAudio}
        />
      )}
    </>
  );
};

export default EpisodeDetail;
