import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import EpisodeTable from './episodeTable';
import { EpisodeMock } from '../../utils/test/mocks';
import { DateTransform, milliSecondsToTime } from '../../utils/utils';

const episodes = EpisodeMock.results;
describe('Episode Table', () => {
  test('show the episode name value', async () => {
    render(
      <TestWrapper>
        <EpisodeTable episodes={episodes} isLoading={false} />
      </TestWrapper>
    );
    const name = screen.getByText(episodes[1].trackName);
    const date = screen.getByText(DateTransform(episodes[1].releaseDate));
    const time = screen.getByText(
      milliSecondsToTime(episodes[1].trackTimeMillis)
    );

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });

  test('do not show the episode name value', async () => {
    render(
      <TestWrapper>
        <EpisodeTable episodes={episodes} isLoading={true} />
      </TestWrapper>
    );
    const name = screen.queryByText(episodes[1].trackName);

    expect(name).not.toBeInTheDocument();
  });
});
