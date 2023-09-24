import { ENDPOINTS, START_PAGE, CARS_PER_PAGE } from '../../../settings/constants';

const { garage } = ENDPOINTS;

const getCarsNumber = async (page = START_PAGE, limit = CARS_PER_PAGE): Promise<number> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return Number(response.headers.get('X-Total-count'));
};

export default getCarsNumber;
