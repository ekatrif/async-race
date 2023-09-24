import updateCars from '../garage/helpers/update-cars';
import { getPageNumber, setPageNumber } from './page-number';
import IDS from '../../settings/ids';
import { WINNERS_PER_PAGE, ORDER } from '../../settings/constants';
import showWinners from '../winners/helpers/update-winners';

const prevPage = async (): Promise<void> => {
  const view = localStorage.getItem('view') || 'garage';
  const currentPage = getPageNumber(view);
  setPageNumber(view, currentPage - 1);
  try {
    let currentPageContainer;
    if (view === 'garage') {
      await updateCars(currentPage - 1);
      currentPageContainer = document.querySelector(`#${IDS.garage} h2 span`);
    } else if (view === 'winners') {
      const savedOrder = localStorage.getItem('order');
      const sortOrder = savedOrder ? JSON.parse(savedOrder) : ORDER;
      const sortBy = sortOrder[sortOrder.currentSortBy];
      await showWinners(currentPage - 1, WINNERS_PER_PAGE, sortOrder.currentSortBy, sortBy);

      currentPageContainer = document.querySelector(`#${IDS.winners} h2 span`);
    }
    if (currentPageContainer) currentPageContainer.innerHTML = String(currentPage - 1);
  } catch (err) {
    console.error(err);
  }
};

export default prevPage;
