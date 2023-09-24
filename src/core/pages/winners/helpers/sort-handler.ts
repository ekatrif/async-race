import { ORDER, WINNERS_PER_PAGE } from '../../../settings/constants';
import showWinners from './update-winners';
import { getPageNumber } from '../../common/page-number';

const sortHandler = async (sortBy: string): Promise<void> => {
  try {
    const savedOrder = localStorage.getItem('order');
    const sortOrder = savedOrder ? JSON.parse(savedOrder) : ORDER;
    const page = getPageNumber('winners');
    sortOrder[sortBy] = sortOrder[sortBy] === 'ASC' ? 'DESC' : 'ASC';
    sortOrder.currentSortBy = sortBy;
    await showWinners(page, WINNERS_PER_PAGE, sortBy, sortOrder[sortBy]);
    localStorage.setItem('order', JSON.stringify(sortOrder));
  } catch (err) {
    console.error(err);
  }
};

export default sortHandler;
