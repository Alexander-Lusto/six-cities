import ReviewsItem from './review/reviews-item';
import { Comment } from '../../../types/comment';

interface Props {
  comments: Comment[];
}

function Reviews({comments} : Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewsItem comment={comment} key={comment.id}></ReviewsItem>)}
    </ul>
  );
}

export default Reviews;
