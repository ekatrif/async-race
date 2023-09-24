import { ENDPOINTS, START_PAGE, CARS_PER_PAGE } from '../../../settings/constants';
import { Car } from '../type';

const { garage } = ENDPOINTS;

const getCars = async (page = START_PAGE, limit = CARS_PER_PAGE): Promise<Car[]> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const result = await response.json();
  return result;
};

export default getCars;
