import { CircularProgress, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({ isLoading }: { isLoading: number }) {
  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <Link to="/">
            <h2> Podcaster </h2>
          </Link>
        </Grid>
        {isLoading > 0 && (
          <Grid item xs={0.3} margin="auto">
            <CircularProgress size="1.5em" />
          </Grid>
        )}
      </Grid>
      <Divider />
    </>
  );
}

export default Header;
