import { Offer } from '../../../types/offer';
import { FormEvent, useState } from 'react';


// In a utility library:
function assertIsHTMLFormElement(el: EventTarget): asserts el is HTMLFormElement {
  if (el instanceof HTMLFormElement === false) {
    throw new Error('HTMLFormElement expected');
  }
}

type NewComment = {
  comment: string;
  rating: number;
}

interface SubmitReviewFormProps {
  offer: Offer;
  offers: Offer[];
}

function SubmitReviewForm({ offer, offers }: SubmitReviewFormProps): JSX.Element {
  const emptyNewComments: NewComment[] = [];
  const [newComments, setComments] = useState(emptyNewComments);

  const formSubmitHanler = (evt: FormEvent): void => {
    evt.preventDefault();
    assertIsHTMLFormElement(evt.target);
    const form = evt.target;
    const formData = new FormData(form);

    const comment: NewComment = {
      comment: String(formData.get('review')),
      rating: Number(formData.get('rating')),
    };

    newComments.push(comment);
    setComments(newComments);
    form.reset();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHanler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((el) => (
          <>
            <input className="form__rating-input visually-hidden" name="rating" value={el} id={`${el}-stars`} type="radio" />
            <label htmlFor={`${el}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SubmitReviewForm;
