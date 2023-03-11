import { SortType } from '../../../const';
import { useState } from 'react';
import { MouseEvent } from 'react';
import { memo } from 'react';

const SortText = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

const sortTypes = Object.values(SortType);
const sortTexts = Object.values(SortText);
const sortTypeToSortTextMap = new Map(sortTypes.map((sortType, i) => ([sortType, sortTexts[i]])));

interface ISortingProps {
  currentSortType: string;
  sortTypeChangeHandler: (sortType: string) => void;
}

function Sorting({ currentSortType, sortTypeChangeHandler }: ISortingProps) {
  const [isOpened, toggleSortingState] = useState(false);

  function onSortTypeChange(evt: MouseEvent<HTMLLIElement>) {
    const newSortType = evt.currentTarget.dataset.sortType;
    if (!newSortType) {
      return;
    }
    sortTypeChangeHandler(newSortType);
    toggleSortingState(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggleSortingState(true)}>
        {sortTypeToSortTextMap.get(currentSortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isOpened ?
        'places__options places__options--custom places__options--opened' :
        'places__options places__options--custom'}
      >
        {sortTypes.map((sortType) => (
          <li className={(sortType === currentSortType ?
            'places__option places__option--active' :
            'places__option')} key={sortType} tabIndex={0} data-sort-type={sortType} onClick={onSortTypeChange}
          >
            {sortTypeToSortTextMap.get(sortType)}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default memo(Sorting);
