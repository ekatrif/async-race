import { getPageNumber } from './page-number';
import getCars from '../garage/api/get-cars';
import { disableBtn, activateBtn } from '../garage/helpers/buttons-state';
import getWinners from '../winners/api/get-winners';
import IDS from '../../settings/ids';
import CLASSES from '../../settings/classes';

const navState = async (): Promise<void> => {
  try {
    const view = localStorage.getItem('view') || 'garage';
    const current = getPageNumber(view);

    // Check if nextPage exists
    if (view === 'garage') {
      const nextPageCars = await getCars(current + 1);
      activateBtn(`#${IDS.garage} .${CLASSES.nextBtn}`);
      if (!nextPageCars.length) disableBtn(`#${IDS.garage} .${CLASSES.nextBtn}`);
    } else if (view === 'winners') {
      const nextPageWinners = await getWinners(current + 1);
      activateBtn(`#${IDS.winners} .${CLASSES.nextBtn}`);
      if (!nextPageWinners.length) disableBtn(`#${IDS.winners} .${CLASSES.nextBtn}`);
    }

    // Check if prevPage exists
    if (view === 'garage' && current === 1) {
      disableBtn(`#${IDS.garage} .${CLASSES.prevBtn}`);
    } else if (view === 'winners' && current === 1) {
      disableBtn(`#${IDS.winners} .${CLASSES.prevBtn}`);
    }
  } catch (err) {
    console.error(err);
  }
};

export default navState;
