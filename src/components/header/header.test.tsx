import { render, screen } from '@testing-library/react';
import Header from './header';
import { TestWrapper } from '../../utils/test/test';

describe('Header', () => {
  test('Show the Podcaster title', async () => {
    render(
      <TestWrapper>
        <Header isLoading={0} />
      </TestWrapper>
    );
    const titleElement = screen.getByText('Podcaster');
    expect(titleElement).toBeInTheDocument();
  });

  test('Show the Loading component', async () => {
    render(
      <TestWrapper>
        <Header isLoading={2} />
      </TestWrapper>
    );
    const titleElement = screen.getByRole('progressbar');
    expect(titleElement).toBeInTheDocument();
  });

  test('Hide the Loading component', async () => {
    render(
      <TestWrapper>
        <Header isLoading={0} />
      </TestWrapper>
    );
    const titleElement = screen.queryByRole('progressbar');
    expect(titleElement).not.toBeInTheDocument();
  });
});
