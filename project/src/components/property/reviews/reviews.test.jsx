import Reviews from './reviews';
import { render, screen } from '@testing-library/react';
import { mockComments } from '../../../mock/commetns';

describe('Component: Reviews', () => {
  test('should render correctly', () => {
    const reviews = mockComments[2];

    render(
      <Reviews comments={reviews} />
    );

    expect(screen.queryAllByAltText(/Reviews avatar/i)).toHaveLength(reviews.length);
  });
});
