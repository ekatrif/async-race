import { disableBtn } from '../pages/garage/helpers/buttons-state';
import CLASSES from '../settings/classes';

const defaultDisableBtns = (): void => {
  disableBtn(`.${CLASSES.prevBtn}`);
  disableBtn(`.${CLASSES.carStop}`);
  disableBtn(`.${CLASSES.reset}`);
};

export default defaultDisableBtns;
