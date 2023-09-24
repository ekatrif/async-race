import { ENDPOINTS } from '../../../settings/constants';
import { CarData } from '../type';

const { engine } = ENDPOINTS;

const stopEngine = async (id: number): Promise<CarData> => {
  const response = await fetch(`${engine}?id=${id}&status=stopped`, { method: 'PATCH' });
  const result = await response.json();
  return result;
};

export default stopEngine;
