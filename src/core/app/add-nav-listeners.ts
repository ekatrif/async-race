import CLASSES from '../settings/classes';
import toGarageView from './to-garage-view';
import toWinnersView from './to-winners-view';

const addNavListeners = (): void => {
  const toGarageBtn = document.querySelector(`.${CLASSES.toGarage}`);
  const toWinnersBtn = document.querySelector(`.${CLASSES.toWinners}`);
  toGarageBtn?.addEventListener('click', toGarageView);
  toWinnersBtn?.addEventListener('click', toWinnersView);
};

export default addNavListeners;
