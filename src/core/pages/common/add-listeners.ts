import { closeList } from '../garage/helpers/helpers';
import generateCars from '../garage/helpers/generate-handler';
import CLASSES from '../../settings/classes';
import { CARS_TO_GENERATE } from '../../settings/constants';
import IDS from '../../settings/ids';
import createUserCar from '../garage/helpers/create-handler';
import selectHandler from '../garage/helpers/select-handler';
import updateHandler from '../garage/helpers/update-handler';
import removeHandler from '../garage/helpers/remove-handler';
import navHandler from './nav-handler';
import { startEngineHandler } from '../garage/helpers/start-engine-handler';
import stopEngineHandler from '../garage/helpers/stop-engine-handler';
import resetHandler from '../garage/helpers/reset-handler';
import raceHandler from '../garage/helpers/race-handler';

const addListeners = (): void => {
  const input = document.getElementById(IDS.create);
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target !== input) closeList();
  });
  const generateBtn = document.querySelector(`.${CLASSES.generateCars}`);
  generateBtn?.addEventListener('click', () => generateCars(CARS_TO_GENERATE));
  const createBtn = document.querySelector(`.${CLASSES.create}`);
  createBtn?.addEventListener('click', createUserCar);
  const updateBtn = document.querySelector(`.${CLASSES.update}`);
  updateBtn?.addEventListener('click', updateHandler);
  const cars = document.querySelector(`.${CLASSES.carsContainer}`);
  cars?.addEventListener('click', selectHandler);
  cars?.addEventListener('click', removeHandler);
  const app = document.getElementById(`${IDS.app}`);
  app?.addEventListener('click', navHandler);
  cars?.addEventListener('click', startEngineHandler);
  cars?.addEventListener('click', stopEngineHandler);
  const resetBtn = document.querySelector(`.${CLASSES.reset}`);
  resetBtn?.addEventListener('click', resetHandler);
  const raceBtn = document.querySelector(`.${CLASSES.race}`);
  raceBtn?.addEventListener('click', raceHandler);
};

export default addListeners;
