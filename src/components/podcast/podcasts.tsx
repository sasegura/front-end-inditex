import { ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import './podcast.css';
import { Podcast } from '../../interfaces/podcast';

interface PodcastSummaryProps {
  podcast: Podcast;
  onHandleClick: () => void;
}

const Podcasts = ({
  podcast,
  onHandleClick,
}: PodcastSummaryProps): ReactElement => {
  const urlImage = podcast['im:image'][2].label;
  const postTitle = podcast['im:name'].label;
  const author = podcast['im:artist'].label;

  return (
    <Container sx={{ mt: { xs: 8, lg: 16 } }}>
      <Card sx={{ maxWidth: 345, overflow: 'visible' }}>
        <CardActionArea onClick={onHandleClick}>
          <CardMedia
            component="img"
            height="140"
            image={urlImage}
            alt={postTitle}
            className="imagePodCastCard"
          />
          <CardContent sx={{ textAlign: 'center', paddingTop: '80px' }}>
            <Typography gutterBottom variant="button" component="div">
              {postTitle?.toUpperCase()}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Author: {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Podcasts;
