import prevPage from './prev-page';
import nextPage from './next-page';
import { hideMessage } from '../garage/helpers/win-message';
import CLASSES from '../../settings/classes';

const navHandler = async (e: Event): Promise<void> => {
  hideMessage();

  const target = e.target as HTMLElement;
  if (target?.classList.contains(CLASSES.prevBtn)) {
    prevPage();
  } else if (target?.classList.contains(CLASSES.nextBtn)) {
    nextPage();
  }
};
export default navHandler;
