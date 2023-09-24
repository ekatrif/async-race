import { BASEURL, START_PAGE } from '../../../settings/constants';

const winners = `${BASEURL}/winners`;

const getWinnersCount = async (page = START_PAGE): Promise<number> => {
  const response = await fetch(`${winners}?_page=${page}`);
  return Number(response.headers.get('X-Total-count'));
};

export default getWinnersCount;
