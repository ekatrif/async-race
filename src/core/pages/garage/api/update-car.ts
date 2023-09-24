import { ENDPOINTS } from '../../../settings/constants';
import { CarBody } from '../type';

const { garage } = ENDPOINTS;

const updateCar = async (body: CarBody, id: number): Promise<void> => {
  await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default updateCar;
