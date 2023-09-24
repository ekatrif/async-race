import { ENDPOINTS } from '../../../settings/constants';

const { engine } = ENDPOINTS;

const startDriveMode = async (id: number): Promise<number> => {
  const response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' });
  return response.status;
};

export default startDriveMode;
