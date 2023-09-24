import deleteCar from '../api/delete-car';
import updateCars from './update-cars';
import CLASSES from '../../../settings/classes';
import deleteWinner from '../../winners/api/delete-winner';

const removeHandler = async (e: Event): Promise<void> => {
  const target = e.target as HTMLElement;
  if (target.classList.contains(`${CLASSES.remove}`)) {
    const car = target.closest(`.${CLASSES.carContainer}`);
    const id = Number(car?.id);
    try {
      if (id) {
        await deleteCar(id);
        await deleteWinner(id);
      }
      await updateCars();
    } catch (err) {
      console.error(err);
    }
  }
};

export default removeHandler;
