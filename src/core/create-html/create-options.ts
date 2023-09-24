import { getRandomName } from '../pages/garage/helpers/helpers';
import { brands, models } from '../pages/garage/brands';
import { CARS_TO_CREATE } from '../settings/constants';
import CLASSES from '../settings/classes';
import IDS from '../settings/ids';

const getOptionName = (e: Event): void => {
  const target = e.target as HTMLElement;
  if (target.classList.contains(CLASSES.car)) {
    const value = target.textContent ? target.textContent : '';
    const input = document.getElementById('create') as HTMLInputElement;
    input.value = value;
  }
};

const createOptions = (): void => {
  const ul = document.getElementById(IDS.carNames);
  if (ul) ul.innerHTML = '';
  for (let i = 0; i < CARS_TO_CREATE; i += 1) {
    const name = getRandomName(brands, models);
    const li = `<li class="${CLASSES.car}">${name}</li>`;
    if (ul) ul.innerHTML += li;
  }
  ul?.addEventListener('click', getOptionName);
};

export { createOptions, getOptionName };
