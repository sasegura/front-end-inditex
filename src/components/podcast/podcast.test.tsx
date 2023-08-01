import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import { ChangeEvent } from 'react';
import Podcasts from './podcasts';
import { PodcastsMock } from '../../utils/test/mocks';

describe('Filter Input', () => {
  const handleClick = () => {
    return;
  };

  test('show the filter input value', async () => {
    const podcast = render(
      <TestWrapper>
        <Podcasts podcast={PodcastsMock[0]} onHandleClick={handleClick} />
      </TestWrapper>
    );

    const name = screen.getByText(
      PodcastsMock[0]['im:name'].label.toString().toUpperCase()
    );
    const author = screen.getByText(
      `Author: ${PodcastsMock[0]['im:artist'].label.toString()}`
    );
    expect(name).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
