import MainEmpty from './main-empty';
import { render, screen } from '@testing-library/react';

describe('Component: MainEmpty', () => {
  test('should render correctly', () => {
    render(
      <MainEmpty />
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
