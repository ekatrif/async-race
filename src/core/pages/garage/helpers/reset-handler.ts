import getCars from '../api/get-cars';
import stopEngine from '../api/stop-engine';
import { getPageNumber } from '../../common/page-number';
import { disableBtn, activateBtn } from './buttons-state';
import CLASSES from '../../../settings/classes';
import { infoAnimation } from './start-engine-handler';
import { stopAnimation } from './car-animation';
import { hideMessage } from './win-message';

const resetHandler = async (): Promise<void> => {
  try {
    const page = getPageNumber('garage');
    const result = await getCars(page);
    result.forEach(async (car) => {
      const id = Number(car.id);
      await stopEngine(id);
      stopAnimation(infoAnimation[id]?.id);
      const carWrapper = document.getElementById(`${id}`);
      const carImg = carWrapper?.querySelector(`.${CLASSES.carImage}`);
      carImg?.setAttribute('style', 'transform: translateX(0px)');
    });
  } catch (err) {
    console.error(err);
  }
  activateBtn('button');
  disableBtn(`.${CLASSES.reset}`);
  hideMessage();
};

export default resetHandler;
