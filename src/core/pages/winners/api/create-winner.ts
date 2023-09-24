import { Winner } from '../type';
import { BASEURL } from '../../../settings/constants';

const winners = `${BASEURL}/winners`;

const createWinner = async (body: Winner): Promise<void> => {
  fetch(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default createWinner;
