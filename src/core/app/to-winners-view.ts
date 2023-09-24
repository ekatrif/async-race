import navState from '../pages/common/nav-state';
import { getPageNumber } from '../pages/common/page-number';
import IDS from '../settings/ids';
import { ORDER, WINNERS_PER_PAGE } from '../settings/constants';
import showWinners from '../pages/winners/helpers/update-winners';
import sortHandler from '../pages/winners/helpers/sort-handler';
import CLASSES from '../settings/classes';

const toWinnersView = (): void => {
  localStorage.setItem('view', 'winners');
  const view = localStorage.getItem('view') || 'garage';
  const page = getPageNumber(view);
  const winners = document.getElementById(IDS.winners);
  const garage = document.getElementById(IDS.garage);
  navState();
  const savedOrder = localStorage.getItem('order');
  const sortOrder = savedOrder ? JSON.parse(savedOrder) : ORDER;
  const sortBy = sortOrder[sortOrder.currentSortBy];
  showWinners(page, WINNERS_PER_PAGE, sortOrder.currentSortBy, sortBy);
  garage?.classList.add(CLASSES.hidden);
  winners?.classList.remove(CLASSES.hidden);
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.id === IDS.winnerId) sortHandler('id');
    if (target.id === IDS.winnerWins) sortHandler('wins');
    if (target.id === IDS.winnerTime) sortHandler('time');
  });
};

export default toWinnersView;
