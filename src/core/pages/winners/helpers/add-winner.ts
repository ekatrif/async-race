import getCar from '../../garage/api/get-car';
import { showMessage } from '../../garage/helpers/win-message';
import createWinner from '../api/create-winner';
import getAllWinners from '../api/get-all-winners';
import updateWinner from '../api/update-winner';

const addWinner = async (winnerId: number, winnerTime: number): Promise<void> => {
  try {
    const timeWin = Number((winnerTime / 1000).toFixed(2));
    const result = await getCar(winnerId);
    const winnerName = result.name;
    showMessage(winnerName, timeWin);
    const wins = 1;

    const winners = await getAllWinners();
    if (!winners.length) createWinner({ id: winnerId, wins, time: timeWin });
    winners.forEach((winner) => {
      if (winner.id === winnerId) {
        const updatedWins = winner.wins + 1;
        const updatedTime = timeWin < winner.time ? timeWin : winner.time;
        updateWinner({ wins: updatedWins, time: updatedTime }, winnerId);
      } else createWinner({ id: winnerId, wins, time: timeWin });
    });
  } catch (err) {
    console.error(err);
  }
};

export default addWinner;
