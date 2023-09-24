import { ENDPOINTS } from '../../../settings/constants';

const { garage } = ENDPOINTS;

const deleteCar = async (id: number): Promise<void> => {
  await fetch(`${garage}/${id}`, {
    method: 'DELETE',
  });
};

export default deleteCar;
