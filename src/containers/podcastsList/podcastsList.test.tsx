import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor, act } from '@testing-library/react';
import PodcastsList from './podcastsList';
import { TestWrapper } from '../../utils/test/test';
import { PodcastsMock } from '../../utils/test/mocks';
import { useGetPodcasts } from '../../hooks/useGetPodcast';

const mockedUseGetPodcasts = useGetPodcasts as jest.Mock;

jest.mock('../../hooks/useGetPodcast');

describe('PodcastsList', () => {
  beforeEach(() => {
    act(() => {
      mockedUseGetPodcasts.mockImplementation(() => ({
        loadding: false,
        data: { feed: { entry: PodcastsMock } },
      }));
    });

    render(
      <TestWrapper>
        <PodcastsList />
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('show podcasts cards', () => {
    expect(
      screen.getByText(`Author: ${PodcastsMock[0]['im:artist'].label}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${PodcastsMock[1]['im:artist'].label}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${PodcastsMock[2]['im:artist'].label}`)
    ).toBeInTheDocument();
  });
});
