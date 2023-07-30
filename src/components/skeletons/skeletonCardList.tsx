
import { Container, Skeleton } from '@mui/material';

const SkeletonCardList = () => {

    return (
        <Container sx={{ mt: { xs: 8, lg: 16 } }}>
            <Skeleton variant="rectangular" width={"100%"} height={155} />
            <Skeleton width="100%" />
            <Skeleton width="80%" />
        </Container>
    );
};

export default SkeletonCardList;