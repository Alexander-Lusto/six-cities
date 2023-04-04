import ReviewsItem from './reviews-item';
import { render, screen } from '@testing-library/react';
import { mockComments } from '../../../../mock/commetns';

describe('Component: ReviewsItem', () => {
  test('should render correctly', () => {
    const review = mockComments[0][0];
    render(
      <ReviewsItem comment={review} />
    );

    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
    expect(screen.getByText(review.comment)).toBeInTheDocument();
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
  });
});
