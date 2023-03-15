import { FormEvent, useState } from 'react';
import React from 'react';
import { TCommentPost } from '../../../types/comment-post';
import { useRef } from 'react';
import { postCommentAction } from '../../../store/api-actions';
import { memo } from 'react';
import { getOffer } from '../../../store/property-data/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { TThunkAppDispatch } from '../../../types/action';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 200;
const NO_SUCH_INDEX = -1;

function SubmitReviewForm(): JSX.Element {
  const dispatch = useDispatch< TThunkAppDispatch>();
  const offer = useSelector(getOffer);
  const formRef = useRef<HTMLFormElement>(null);

  const id = offer ? offer.id : NO_SUCH_INDEX;
  const [isDisabled, setIsDisable] = useState(true);

  function formChangeHanler() {
    const form = formRef.current;

    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const review: TCommentPost = {
      comment: formData.get('review') as string,
      rating: Number(formData.get('rating') as null | string),
    };

    const isValid = (review.comment.length) < MAX_COMMENT_LENGTH && (review.comment.length) > MIN_COMMENT_LENGTH && (review.rating > 0);

    if (isValid) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }

  function onSuccess() {
    const form = formRef.current;

    if (!form) {
      return;
    }

    setIsDisable(false);
    form.reset();
  }

  function onError() {
    const form = formRef.current;

    if (!form) {
      return;
    }

    setIsDisable(false);
  }

  function formSubmitHanler(evt: FormEvent) {
    evt.preventDefault();
    const form = formRef.current;

    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const review: TCommentPost = {
      comment: formData.get('review') as string,
      rating: Number(formData.get('rating') as null | string),
    };

    setIsDisable(true);
    dispatch(postCommentAction(id, review, onSuccess, onError));

  }


  return (
    <form ref={formRef} className="reviews__form form" action="#" method="post" onSubmit={formSubmitHanler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((el) => (
          <React.Fragment key={el}>
            <input className="form__rating-input visually-hidden" name="rating" value={el} id={`${el}-stars`} type="radio" onChange={formChangeHanler}/>
            <label htmlFor={`${el}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={formChangeHanler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default memo(SubmitReviewForm);
