import { useParams } from 'react-router-dom';
import { Card, Grid } from '@mui/material';
import { useGetEpisodes } from '../../hooks/useGetEpisodes';
import EpisodeCounter from '../../components/episodeCouter/episodeCounter';
import EpisodeTable from '../../components/episodeTable/episodeTable';

const EpisodeList = () => {
  const { podcastId } = useParams();
  const { data, isLoading, isError, error } = useGetEpisodes({ podcastId });
  const episodes = data?.results;
  const counter = episodes?.length - 1;

  return (
    <>
      {isError ? (
        <Card sx={{ width: '100%', height: '20px', padding: 2 }}>
          {error instanceof Error ? error.message : 'Error'}
        </Card>
      ) : (
        <>
          <Grid item xs={12} mb="15px">
            <EpisodeCounter counter={counter} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <EpisodeTable episodes={episodes} isLoading={isLoading} />
          </Grid>
        </>
      )}
    </>
  );
};

export default EpisodeList;
