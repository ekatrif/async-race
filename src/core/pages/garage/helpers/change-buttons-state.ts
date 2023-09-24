import { disableBtn, activateBtn } from './buttons-state';
import CLASSES from '../../../settings/classes';

const buttonsStateBeforeRace = (): void => {
  disableBtn(`.${CLASSES.race}`);
  disableBtn(`.${CLASSES.generateCars}`);
  disableBtn(`.${CLASSES.create}`);
  disableBtn(`.${CLASSES.update}`);
  disableBtn(`.${CLASSES.select}`);
  disableBtn(`.${CLASSES.remove}`);
  activateBtn(`.${CLASSES.reset}`);
};

export default buttonsStateBeforeRace;
