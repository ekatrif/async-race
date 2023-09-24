import getCars from '../api/get-cars';
import getCarsNumber from '../api/get-cars-number';
import { Car } from '../type';
import createCarHTML from './car-template';
import CLASSES from '../../../settings/classes';
import IDS from '../../../settings/ids';
import { getPageNumber } from '../../common/page-number';
import navState from '../../common/nav-state';

const curPage = getPageNumber('garage');

const updateCars = async (pageNum: number = curPage): Promise<void> => {
  const carsContainer = document.querySelector(`.${CLASSES.carsContainer}`);
  const countCars = document.querySelector(`#${IDS.garage} h1 span`);
  try {
    const arr = await getCars(pageNum);
    if (arr.length && carsContainer) {
      carsContainer.innerHTML = '';
      arr.forEach((car: Car) => {
        const oneCar = createCarHTML(car.id, car.name, car.color);
        carsContainer.innerHTML += oneCar;
      });
      const carsNumber = await getCarsNumber();
      if (countCars) countCars.textContent = String(carsNumber);
    }
    await navState();
  } catch (err) {
    console.error(err);
  }
};

export default updateCars;
