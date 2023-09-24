import CLASSES from '../../../settings/classes';
import startEngine from '../api/start-engine';
import startDriveMode from '../api/drive-mode';
import { startAnimation, stopAnimation } from './car-animation';
import { activateBtn, disableBtn } from './buttons-state';
import { CarInfo } from '../type';

const infoAnimation: { [id: number]: CarInfo } = {};

const startEngineHandler = async (e: Event): Promise<void> => {
  try {
    activateBtn(`.${CLASSES.reset}`);
    const target = e.target as HTMLElement;
    if (target.classList.contains(`${CLASSES.carStart}`)) {
      const carWrapper = target.closest(`.${CLASSES.carContainer}`) as HTMLElement;
      const car = carWrapper.querySelector(`.${CLASSES.carImage}`) as HTMLElement;
      const id = Number(carWrapper?.id);
      const result = await startEngine(id);
      const time = +result.distance / +result.velocity;
      infoAnimation[id] = startAnimation(id, car, time);
      disableBtn(`.${CLASSES.carStart}`, carWrapper);
      activateBtn(`.${CLASSES.carStop}`, carWrapper);

      const response = await startDriveMode(id);
      disableBtn(`.${CLASSES.carStop}`, carWrapper);
      if (response === 500) {
        stopAnimation(infoAnimation[id].id);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export { startEngineHandler, infoAnimation };
