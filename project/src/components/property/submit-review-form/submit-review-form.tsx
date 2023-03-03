import { TOffer } from '../../../types/offer';
import { FormEvent, useState } from 'react';
import React from 'react';

type NewComment = {
  comment: string;
  rating: number;
}

interface SubmitReviewFormProps {
  offer: TOffer;
  offers: TOffer[];
}

function SubmitReviewForm({ offer, offers }: SubmitReviewFormProps): JSX.Element {
  const formRef = React.createRef<HTMLFormElement>();
  const emptyNewComments: NewComment[] = [];
  const [newComments, setComments] = useState(emptyNewComments);


  const formSubmitHanler = (evt: FormEvent): void => {
    evt.preventDefault();
    const form = formRef.current;
    if (!form) {
      return;
    }

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
    <form ref={formRef} className="reviews__form form" action="#" method="post" onSubmit={formSubmitHanler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((el) => (
          <>
            <input className="form__rating-input visually-hidden" name="rating" value={el} id={`${el}-stars`} type="radio" key={`input-${el}`}/>
            <label htmlFor={`${el}-stars`} className="reviews__rating-label form__rating-label" title="perfect" key={`label-${el}`}>
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
