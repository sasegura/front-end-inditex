import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import FilteredPodcastSize from './filteredPodcastSize';

const podcastCounter = 12;

describe('Podcast Counter', () => {
  test('show the podcast counter value', async () => {
    render(
      <TestWrapper>
        <FilteredPodcastSize size={podcastCounter} />
      </TestWrapper>
    );
    const counter = screen.getByText(podcastCounter);

    expect(counter).toBeInTheDocument();
  });
});
