import { useQuery } from '@tanstack/react-query';
import { getPodcast } from '../queryFunctions/getPodcasts';

export const useGetPodcasts = () => {
  const podcasts = useQuery(['getPodcasts'], getPodcast);
  return podcasts;
};
