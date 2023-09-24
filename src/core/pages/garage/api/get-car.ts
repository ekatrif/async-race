import { ENDPOINTS } from '../../../settings/constants';
import { Car } from '../type';

const { garage } = ENDPOINTS;

const getCar = async (id: number): Promise<Car> => {
  const response = await fetch(`${garage}/${id}`);
  const result = await response.json();
  return result;
};

export default getCar;
