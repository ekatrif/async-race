import { getRandomColor, getRandomName } from './helpers';
import createCar from '../api/create-car';
import updateCars from './update-cars';
import { brands, models } from '../brands';

const generateCars = async (num: number): Promise<void> => {
  try {
    for (let i = 0; i < num; i += 1) {
      const carName = getRandomName(brands, models);
      const carColor = getRandomColor();
      createCar({ name: `${carName}`, color: `${carColor}` });
    }
    await updateCars();
  } catch (err) {
    console.error(err);
  }
};

export default generateCars;
