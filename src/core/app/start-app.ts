import IDS from '../settings/ids';
import addListeners from '../pages/common/add-listeners';
import defaultDisableBtns from './default-disable-buttons';
import setInitialState from './set-initial-state';
import renderApp from './render-app';
import updateCars from '../pages/garage/helpers/update-cars';
import hideBlock from './hide-block';

const startApp = async (): Promise<void> => {
  try {
    setInitialState();
    renderApp();
    await updateCars();
    addListeners();
    hideBlock(IDS.winners);
    defaultDisableBtns();
  } catch (err) {
    console.error(err);
  }
};

export { startApp };
