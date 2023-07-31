import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { screen, render, act } from '@testing-library/react';

import { EpisodeMock, PodcastsMock } from '../../utils/test/mocks';
import { useGetPodcasts } from '../../hooks/useGetPodcast';
import { useGetEpisodes } from '../../hooks/useGetEpisodes';
import PodcastDetail from './podcastDetail';
import { TestWrapper } from '../../utils/test/test';

const mockedUseGetPodcasts = useGetPodcasts as jest.Mock;
const mockedUsePodcastDescription = useGetEpisodes as jest.Mock;

jest.mock('../../hooks/useGetPodcast');
jest.mock('../../hooks/useGetEpisodes');

const podcastId = PodcastsMock[0].id.attributes['im:id'];

describe('PodcastsList', () => {
  beforeEach(async () => {
    act(() => {
      mockedUseGetPodcasts.mockImplementation(() => ({
        loadding: false,
        data: { feed: { entry: PodcastsMock } },
      }));
      mockedUsePodcastDescription.mockImplementation((podcastId) => ({
        loadding: false,
        data: EpisodeMock,
      }));
    });

    render(
      <TestWrapper url={`/podcasts/${podcastId}`} path={'/podcasts/:podcastId'}>
        <PodcastDetail />
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('show podcast details', async () => {
    const summary = screen.queryByText(`${PodcastsMock[0].summary.label}`);
    const author = screen.queryByText(
      `by ${PodcastsMock[0]['im:artist'].label}`
    );
    const title = screen.queryByText(`${PodcastsMock[0]['im:name'].label}`);

    expect(summary).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('show episodes counter', async () => {
    const summary = screen.queryByText(`${PodcastsMock[0].summary.label}`);
    const author = screen.queryByText(
      `by ${PodcastsMock[0]['im:artist'].label}`
    );
    const title = screen.queryByText(`${PodcastsMock[0]['im:name'].label}`);

    expect(summary).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
