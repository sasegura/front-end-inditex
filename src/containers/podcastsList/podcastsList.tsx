import { Grid } from '@mui/material';
import { Podcast } from '../../interfaces/podcast';
import Podcasts from '../../components/podcast/podcasts';
import SkeletonCardList from '../../components/skeletons/skeletonCardList';
import usePodcastList from './usePodcastsList';

function PodcastsList() {
  const { podcasts, isLoading, onHandleClick } = usePodcastList();

  return (
    <Grid container wrap="wrap">
      {(isLoading ? Array.from(new Array(12)) : podcasts).map(
        (podcast: Podcast, index: number) => (
          <Grid key={index} item xs={3} sx={{ py: 5 }}>
            {podcast ? (
              <Podcasts
                key={podcast.id.attributes['im:id']}
                podcast={podcast}
                onHandleClick={() =>
                  onHandleClick(podcast.id.attributes['im:id'])
                }
              />
            ) : (
              <SkeletonCardList />
            )}
          </Grid>
        )
      )}
    </Grid>
  );
}

export default PodcastsList;
