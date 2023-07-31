import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Episode } from '../../interfaces/episode';
import { DateTransform, milliSecondsToTime } from '../../utils/utils';
import { Skeleton } from '@mui/material';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface EpisodeTableProps {
  episodes: Episode[];
  isLoading: Boolean;
}

const EpisodeTable = ({ episodes, isLoading }: EpisodeTableProps) => {
  return (
    <TableContainer component={Paper} sx={{ minHeight: '550px' }}>
      <Table
        sx={{ margin: 3, marginRight: 0, maxWidth: '94%' }}
        size="small"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Title</b>
            </TableCell>
            <TableCell align="right">
              <b>Date</b>
            </TableCell>
            <TableCell align="right">
              <b>Duration</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(!episodes ? Array.from(new Array(21)) : episodes).map(
            (row: Episode, index: number) => {
              if (index > 0)
                return (
                  <StyledTableRow key={episodes ? row.trackId : index}>
                    <TableCell component="th" scope="row">
                      {!isLoading ? (
                        <Link to={`episode/${row.trackId}`}>
                          {row.trackName}
                        </Link>
                      ) : (
                        <Skeleton width={'400px'} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {!isLoading ? (
                        row.releaseDate ? (
                          DateTransform(row.releaseDate)
                        ) : (
                          '-'
                        )
                      ) : (
                        <Skeleton width={'100px'} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {!isLoading ? (
                        row.trackTimeMillis ? (
                          milliSecondsToTime(row.trackTimeMillis)
                        ) : (
                          '-'
                        )
                      ) : (
                        <Skeleton width={'87px'} />
                      )}
                    </TableCell>
                  </StyledTableRow>
                );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeTable;
