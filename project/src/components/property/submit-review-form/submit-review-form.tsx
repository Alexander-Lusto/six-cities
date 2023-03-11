import { FormEvent } from 'react';
import React from 'react';
import { TCommentPost } from '../../../types/comment-post';
import { useRef } from 'react';
import { TState } from '../../../types/state';
import { TActions } from '../../../types/action';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { postCommentAction } from '../../../store/api-actions';
import { connect, ConnectedProps } from 'react-redux';
import { memo } from 'react';


const mapeStateToProps = ({PROPERTY}: TState) => ({offer: PROPERTY.offer});
const mapDispatchToPropse = (dispatch: Dispatch<TActions>) => bindActionCreators({
  postComment: postCommentAction,
}, dispatch);

const connector = connect(mapeStateToProps, mapDispatchToPropse);
type PropsFromRedux = ConnectedProps<typeof connector>

function SubmitReviewForm({postComment, offer}: PropsFromRedux): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const id = offer ? offer.id : -1;


  const formSubmitHanler = (evt: FormEvent): void => {
    evt.preventDefault();
    const form = formRef.current;
    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const comment: TCommentPost = {
      comment: String(formData.get('review')),
      rating: Number(formData.get('rating')),
    };

    postComment(id, comment);
    form.reset();
  };

  return (
    <form ref={formRef} className="reviews__form form" action="#" method="post" onSubmit={formSubmitHanler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((el) => (
          <React.Fragment key={el}>
            <input className="form__rating-input visually-hidden" name="rating" value={el} id={`${el}-stars`} type="radio" />
            <label htmlFor={`${el}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
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

export default connector(memo(SubmitReviewForm));
