import NAMES from '../settings/names';
import CLASSES from '../settings/classes';

const createHeader = (): string => {
  return `<header>
      <nav>
        <button class="${CLASSES.toGarage}">${NAMES.toGarageBtn}</button>
        <button class="${CLASSES.toWinners}">${NAMES.toWinnersBtn}</button>
      </nav>
    </header>`;
};

export default createHeader;
