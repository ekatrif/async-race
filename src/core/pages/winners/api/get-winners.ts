import { Winner } from '../type';
import { BASEURL, WINNERS_PER_PAGE } from '../../../settings/constants';

const winners = `${BASEURL}/winners`;

const getWinners = async (page?: number, limit = WINNERS_PER_PAGE, sortBy = 'id', order = 'ASC'): Promise<Winner[]> => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sortBy}&_order=${order}`);
  const result = await response.json();
  return result;
};

export default getWinners;
