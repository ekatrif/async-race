import createHeader from './create-header';
import createGarage from './create-garage';
import createWinners from './create-winners';
import createFooter from './create-footer';
import IDS from '../settings/ids';

const createHTML = (): void => {
  const header = createHeader();
  const garage = createGarage();
  const winners = createWinners();
  const footer = createFooter();

  const app = document.getElementById(IDS.app);
  if (app) app.innerHTML = header + garage + winners + footer;
};

export default createHTML;
