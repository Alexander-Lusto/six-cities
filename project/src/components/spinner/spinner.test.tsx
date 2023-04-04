import Spinner from './spinner';
import { render, screen } from '@testing-library/react';

describe('Component: Spinner', () => {
  test('should render correctly', () => {
    render(
      <Spinner />
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
