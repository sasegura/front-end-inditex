import ReactAudioPlayer from 'react-audio-player';
import './episodePlayer.css';
import { Card, Divider, Typography } from '@mui/material';

interface EpisodePlayerProps {
  episodeName: string;
  episodeDescription: string;
  episodeAudio: string;
}

const EpisodePlayer = ({
  episodeName,
  episodeDescription,
  episodeAudio,
}: EpisodePlayerProps) => {
  return (
    <Card sx={{ p: 5, width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        <b>{episodeName}</b>
      </Typography>
      <Typography variant="body2" gutterBottom>
        <i>{episodeDescription}</i>
      </Typography>

      <Divider sx={{ my: 3 }} />
      <ReactAudioPlayer
        src={episodeAudio}
        autoPlay
        controls
        className="audioPlayer"
      />
    </Card>
  );
};

export default EpisodePlayer;
