import CLASSES from '../../../settings/classes';
import stopEngine from '../api/stop-engine';
import { disableBtn, activateBtn } from './buttons-state';
import { stopAnimation } from './car-animation';
import { infoAnimation } from './start-engine-handler';

const stopEngineHandler = async (e: Event): Promise<void> => {
  try {
    const target = e.target as HTMLElement;
    if (target.classList.contains(`${CLASSES.carStop}`)) {
      const carWrapper = target.closest(`.${CLASSES.carContainer}`) as HTMLElement;
      const car = carWrapper.querySelector(`.${CLASSES.carImage}`) as HTMLElement;
      const id = Number(carWrapper?.id);
      disableBtn(`.${CLASSES.carStop}`, carWrapper);
      disableBtn(`.${CLASSES.carStart}`, carWrapper);

      await stopEngine(id);

      stopAnimation(infoAnimation[id].id);

      car.setAttribute('style', 'transform: translateX(0px)');

      activateBtn(`.${CLASSES.carStart}`, carWrapper);
    }
  } catch (err) {
    console.error(err);
  }
};

export default stopEngineHandler;
