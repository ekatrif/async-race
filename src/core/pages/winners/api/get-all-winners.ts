import { Winner } from '../type';
import { BASEURL } from '../../../settings/constants';

const winners = `${BASEURL}/winners`;

const getAllWinners = async (): Promise<Winner[]> => {
  const response = await fetch(`${winners}`);
  const result = await response.json();
  return result;
};

export default getAllWinners;
