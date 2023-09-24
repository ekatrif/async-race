import { ENDPOINTS } from '../../../settings/constants';
import { CarBody } from '../type';

const { garage } = ENDPOINTS;

const createCar = async (body: CarBody): Promise<void> => {
  await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default createCar;
