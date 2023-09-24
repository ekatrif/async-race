import { BASEURL } from '../../../settings/constants';
import { Winner } from '../type';

const winners = `${BASEURL}/winners`;

const getWinner = async (id: number): Promise<Winner> => (await fetch(`${winners}/${id}`)).json();

export default getWinner;
