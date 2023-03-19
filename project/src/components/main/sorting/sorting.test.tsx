import Sorting from './sorting';
import { render, screen } from '@testing-library/react';
import { SortType, SortText } from '../../../const';
import userEvent from '@testing-library/user-event';


describe('Component: Sorting', () => {

  test('Should render properly', () => {
    const onSortTypeChange = jest.fn();
    const currentSortType = SortType.POPULAR;

    render(
      <Sorting currentSortType={currentSortType} sortTypeChangeHandler={onSortTypeChange}/>
    );

    expect(screen.getAllByText(SortText.POPULAR)).toHaveLength(2);
    expect(screen.getByText(SortText.PRICE_HIGH)).toBeInTheDocument();
    expect(screen.getByText(SortText.PRICE_LOW)).toBeInTheDocument();
    expect(screen.getByText(SortText.TOP_RATED)).toBeInTheDocument();
  });

  test('Should call callback when user change sort type', async () => {
    const onSortTypeChange = jest.fn();
    const currentSortType = SortType.POPULAR;

    render(
      <Sorting currentSortType={currentSortType} sortTypeChangeHandler={onSortTypeChange}/>
    );

    await userEvent.click(screen.getByText(SortText.PRICE_HIGH));
    expect(onSortTypeChange).toBeCalled();
  });
});
