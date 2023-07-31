import { useState, useEffect } from 'react';
import { Podcast } from '../../interfaces/podcast';
import { useNavigate, useParams } from 'react-router';
import { useGetPodcasts } from '../../hooks/useGetPodcast';

const usePodcastDetail = () => {
  const { podcastId } = useParams() as {
    podcastId: string;
  };
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageAuthor, setImageAuthor] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  const { data, isLoading } = useGetPodcasts();
  const podcastList = data?.feed?.entry;

  useEffect(() => {
    const podcastDetails = podcastList?.find((podcast: Podcast) => {
      return podcast.id.attributes['im:id'] == podcastId;
    });

    if (podcastDetails && !isLoading) {
      setImageUrl(podcastDetails['im:image'][2].label);
      setImageTitle(podcastDetails['im:name'].label);
      setImageAuthor(podcastDetails['im:artist'].label);
      setImageDescription(podcastDetails.summary.label);
    }
  }, [podcastList, isLoading]);

  const onHandleCardClick = () => {
    navigate(`/podcast/${podcastId}`);
  };

  return {
    imageUrl,
    imageAuthor,
    imageTitle,
    imageDescription,
    isLoading,
    onHandleCardClick,
  };
};
export default usePodcastDetail;
