import { Outlet } from 'react-router-dom';

const PodcastDetail = () => {
  return (
    <>
      <h1>Podcast detail</h1>
      <Outlet />
    </>
  );
};

export default PodcastDetail;
