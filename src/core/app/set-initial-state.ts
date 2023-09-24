import { ORDER } from '../settings/constants';

const setInitialState = (): void => {
  localStorage.clear();
  localStorage.setItem('view', 'garage');
  localStorage.setItem('page_g', '1');
  localStorage.setItem('page_w', '1');
  localStorage.setItem('order', JSON.stringify(ORDER));
};

export default setInitialState;
