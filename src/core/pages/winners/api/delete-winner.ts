import { BASEURL } from '../../../settings/constants';

const winners = `${BASEURL}/winners`;

const deleteWinner = async (id: number): Promise<void> => {
  await fetch(`${winners}/${id}`, {
    method: 'DELETE',
  });
};

export default deleteWinner;
