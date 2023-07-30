import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { TestWrapper } from './utils/test/test';
import { PodcastsMock } from './utils/test/mocks';
import { useGetPodcasts } from './hooks/useGetPodcast';

const mockedUseGetPodcasts = useGetPodcasts;

jest.mock('./hooks/useGetPodcast');

test('renders podcaster link', () => {
  (mockedUseGetPodcasts as jest.Mock).mockImplementation(() => ({
    loadding: false,
    data: { feed: { entry: PodcastsMock } },
  }));
  render(
    <TestWrapper>
      <App />
    </TestWrapper>
  );
  const linkElement = screen.getByText(/Podcaster/i);
  expect(linkElement).toBeInTheDocument();
});
