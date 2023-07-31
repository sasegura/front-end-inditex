import { Card, Grid } from '@mui/material';
import PodcastDescriptionCard from '../../components/podcastDescriptionCard/podcastDescriptionCard';
import { Outlet } from 'react-router';
import usePodcastDetail from './usePodcastDetail';
import SkeletonPodcastDetail from '../../components/skeletons/skeletonPodcastDetail';

const PodcastDetail = () => {
  const {
    imageUrl,
    imageAuthor,
    imageTitle,
    imageDescription,
    isLoading,
    onHandleCardClick,
  } = usePodcastDetail();

  return (
    <Grid container py="30px" px="10px">
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          {!isLoading ? (
            <PodcastDescriptionCard
              imageUrl={imageUrl}
              imageAuthor={imageAuthor}
              imageTitle={imageTitle}
              imageDescription={imageDescription}
              onHandleCardClick={onHandleCardClick}
            />
          ) : (
            <SkeletonPodcastDetail />
          )}
        </Card>
      </Grid>
      <Grid item xs={9} pl="80px" container rowSpacing={1}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default PodcastDetail;
