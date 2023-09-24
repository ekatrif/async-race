import { getPageNumber } from '../pages/common/page-number';
import navState from '../pages/common/nav-state';
import updateCars from '../pages/garage/helpers/update-cars';
import IDS from '../settings/ids';
import CLASSES from '../settings/classes';

const toGarageView = (): void => {
  localStorage.setItem('view', 'garage');
  const view = localStorage.getItem('view') || 'garage';
  const page = getPageNumber(view);
  const winners = document.getElementById(IDS.winners);
  const garage = document.getElementById(IDS.garage);
  navState();
  updateCars(page);
  winners?.classList.add(CLASSES.hidden);
  garage?.classList.remove(CLASSES.hidden);
};

export default toGarageView;
