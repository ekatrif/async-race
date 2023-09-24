import { disableBtn, activateBtn } from './buttons-state';
import createCar from '../api/create-car';
import updateCars from './update-cars';
import IDS from '../../../settings/ids';
import CLASSES from '../../../settings/classes';
import NAMES from '../../../settings/names';

const createUserCar = async (): Promise<void> => {
  const inputCreate = document.getElementById(IDS.create) as HTMLInputElement;
  const name = inputCreate?.value ? inputCreate?.value : '';
  const inputColor = document.getElementById(IDS.createColor) as HTMLInputElement;
  const color = inputColor.getAttribute('data-value');
  const error = document.querySelector(`.${CLASSES.errorCreate}`);
  try {
    if (name && color) {
      if (error) error.innerHTML = '';
      disableBtn('button');
      await createCar({
        name,
        color,
      });
      await updateCars();
      activateBtn('button');
    } else if (error) error.textContent = NAMES.createErrorMsg;
  } catch (err) {
    console.error(err);
  }
};

export default createUserCar;
