import getWinners from '../api/get-winners';
import getWinnersCount from '../api/get-winners-count';
import CLASSES from '../../../settings/classes';
import IDS from '../../../settings/ids';
import getCar from '../../garage/api/get-car';
import createSvgCar from '../../common/create-car-image';
import { Winner } from '../type';
import navState from '../../common/nav-state';
import { activateBtn } from '../../garage/helpers/buttons-state';
import { getPageNumber } from '../../common/page-number';
import { HEADERS } from '../../../settings/constants';

const curPage = getPageNumber('winners');

const showWinners = async (page = curPage, limit?: number, sortBy?: string, order?: string): Promise<void> => {
  try {
    const winners = await getWinners(page, limit, sortBy, order);
    const count = await getWinnersCount();
    const container = document.querySelector(`#${IDS.winners} h1 span`);
    if (container) container.innerHTML = String(count);
    const winnersPromises = winners.map(async (winner: Winner) => {
      const carInfo = await getCar(winner.id);
      const { color } = carInfo;
      const { name } = carInfo;
      const img = createSvgCar(color);
      return `<tr><td id="${IDS.winnerId}">${winner.id}</td><td>${img}</td><td>${name}</td><td id="${IDS.winnerWins}">${winner.wins}</td><td id="${IDS.winnerTime}">${winner.time}</td></tr>`;
    });
    const winnersHTML = (await Promise.all(winnersPromises)).join('');
    const table = document.querySelector(`.${CLASSES.table}`);
    if (table)
      table.innerHTML = `
    <tr><th id="${IDS.winnerId}">${HEADERS[0]}</th><th>${HEADERS[1]}</th>
    <th>${HEADERS[2]}</th>  <th id="${IDS.winnerWins}">${HEADERS[3]}</th><th id="${IDS.winnerTime}">${HEADERS[4]}</th></tr>
    ${winnersHTML}`;
    activateBtn('button');
    navState();
  } catch (err) {
    console.error(err);
  }
};

export default showWinners;
