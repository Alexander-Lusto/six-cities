import { TComment } from '../../../../types/comment';
import { months } from '../../../../const';

interface ReviewsItemProps {
  comment: TComment;
}

function ReviewsItem({ comment }: ReviewsItemProps): JSX.Element {
  const ratingPercent = `${Math.round(comment.rating) * 20}%`;
  const month = months[new Date(comment.date).getMonth()];
  const year = new Date(comment.date).getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>{month} {year}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
