import { BASEURL } from '../../../settings/constants';
import { WinnerBody } from '../type';

const winners = `${BASEURL}/winners`;

const updateWinner = async (body: WinnerBody, id: number): Promise<void> => {
  await fetch(`${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default updateWinner;
