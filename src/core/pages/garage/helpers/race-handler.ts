import CLASSES from '../../../settings/classes';
import { disableBtn, activateBtn } from './buttons-state';
import startEngine from '../api/start-engine';
import startDriveMode from '../api/drive-mode';
import { infoAnimation } from './start-engine-handler';
import { startAnimation, stopAnimation } from './car-animation';
import { currentWinners } from './helpers';
import buttonsStateBeforeRace from './change-buttons-state';

const raceHandler = async (): Promise<void> => {
  currentWinners.length = 0;
  buttonsStateBeforeRace();
  const cars = document.querySelectorAll(`.${CLASSES.carContainer}`);
  [...cars].forEach(
    async (car: Element): Promise<void> => {
      try {
        activateBtn(`.${CLASSES.reset}`);
        const carImg = car.querySelector(`.${CLASSES.carImage}`) as HTMLElement;
        const id = Number(car?.id);
        const result = await startEngine(id);
        const time = +result.distance / +result.velocity;
        infoAnimation[id] = startAnimation(id, carImg, time);
        disableBtn(`.${CLASSES.carStart}`);
        activateBtn(`.${CLASSES.carStop}`);
        const response = await startDriveMode(id);
        disableBtn(`.${CLASSES.carStop}`);
        if (response === 500) {
          stopAnimation(infoAnimation[id].id);
        }
      } catch (err) {
        console.error(err);
      }
    },
  );
};

export default raceHandler;
