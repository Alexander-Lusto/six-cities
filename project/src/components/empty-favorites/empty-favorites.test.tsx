import EmptyFavorites from './empty-favorites';
import { render, screen } from '@testing-library/react';

describe('Component: EmptyFavorites', () => {
  test('should render correctly', () => {
    render(
      <EmptyFavorites />
    );

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });
});
