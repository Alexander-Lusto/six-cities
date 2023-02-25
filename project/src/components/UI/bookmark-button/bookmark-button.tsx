interface IBookmarkButtonProps {
  isActive: boolean;
}
function BookmarkButton({isActive}: IBookmarkButtonProps): JSX.Element {
  return (
    <button className={isActive ?
      "place-card__bookmark-button place-card__bookmark-button--active button" :
      "place-card__bookmark-button button"
    } type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
