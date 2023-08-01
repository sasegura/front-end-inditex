import { Card, Grid } from '@mui/material';
import EpisodeCounter from '../../components/episodeCouter/episodeCounter';
import EpisodeTable from '../../components/episodeTable/episodeTable';
import useEpisodeList from './useEpisodeList';

const EpisodeList = () => {
  const { isError, error, counter, isLoading, episodes } = useEpisodeList();

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
