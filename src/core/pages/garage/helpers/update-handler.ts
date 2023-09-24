import updateCar from '../api/update-car';
import updateCars from './update-cars';
import IDS from '../../../settings/ids';
import NAMES from '../../../settings/names';
import CLASSES from '../../../settings/classes';

const updateHandler = async (): Promise<void> => {
  const inputName = document.getElementById(IDS.update) as HTMLInputElement;
  const name = inputName?.value;
  const inputColor = document.getElementById(IDS.saveColor);
  const color = inputColor?.getAttribute('data-value');
  const id = Number(inputName.getAttribute('car-id'));
  const error = document.querySelector(`.${CLASSES.errorUpdate}`);
  try {
    if (name && color && id) {
      if (error) error.innerHTML = '';
      await updateCar(
        {
          name,
          color,
        },
        id,
      );
      await updateCars();
    } else if (error) error.textContent = NAMES.updateErrorMsg;
  } catch (err) {
    console.error(err);
  }
};

export default updateHandler;
