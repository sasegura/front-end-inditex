import { Box } from '@mui/material';

interface FilteredPodcastsSize {
  size: number;
}

function FilteredPodcastSize({ size }: FilteredPodcastsSize) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        p: '5px',
        textAlign: 'center',
        margin: '5px 20px',
        borderRadius: '8px',
      }}
      data-testid={'podcastCounter'}
    >
      {size}
    </Box>
  );
}

export default FilteredPodcastSize;
