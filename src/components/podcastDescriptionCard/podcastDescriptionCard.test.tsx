import { getByAltText, render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import { ChangeEvent } from 'react';
import { PodcastsMock } from '../../utils/test/mocks';
import PodcastDescriptionCard from './podcastDescriptionCard';

describe('Filter Input', () => {
  const handleClick = () => {
    return;
  };

  test('show the filter input value', async () => {
    render(
      <TestWrapper>
        <PodcastDescriptionCard
          imageAuthor={PodcastsMock[0]['im:artist'].label.toString()}
          imageUrl={PodcastsMock[0]['im:image'][2].label.toString()}
          imageTitle={PodcastsMock[0].title.label.toString()}
          imageDescription={PodcastsMock[0].summary.label.toString()}
          onHandleCardClick={handleClick}
        />
      </TestWrapper>
    );

    const title = screen.getByText(PodcastsMock[0].title.label.toString());
    const author = screen.getByText(
      `by ${PodcastsMock[0]['im:artist'].label.toString()}`
    );
    const description = screen.getByText(
      `${PodcastsMock[0].summary.label.toString()}`
    );

    const image = screen.getByAltText('imageTitle');

    expect(image).toHaveAttribute(
      'src',
      PodcastsMock[0]['im:image'][2].label.toString()
    );

    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
