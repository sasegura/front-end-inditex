import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import HeaderSection from './headerSection';

describe('Header', () => {
  test('Show the Podcaster title', async () => {
    render(
      <TestWrapper>
        <HeaderSection isLoading={true} />
      </TestWrapper>
    );
    const titleElement = screen.getByText('Podcaster');
    expect(titleElement).toBeInTheDocument();
  });

  test('Show the Loading component', async () => {
    render(
      <TestWrapper>
        <HeaderSection isLoading={true} />
      </TestWrapper>
    );
    const titleElement = screen.getByRole('progressbar');
    expect(titleElement).toBeInTheDocument();
  });

  test('Hide the Loading component', async () => {
    render(
      <TestWrapper>
        <HeaderSection isLoading={false} />
      </TestWrapper>
    );
    const titleElement = screen.queryByRole('progressbar');
    expect(titleElement).not.toBeInTheDocument();
  });
});
