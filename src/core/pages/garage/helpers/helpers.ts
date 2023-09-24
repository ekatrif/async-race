import IDS from '../../../settings/ids';

const getRandomName = (arr1: string[], arr2: string[]): string => {
  const randomBrandId = Math.floor(Math.random() * arr1.length);
  const randomModelId = Math.floor(Math.random() * arr2.length);

  return `${arr1[randomBrandId]} ${arr2[randomModelId]}`;
};

const getRandomColor = (): string => {
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let randomColor = '';
  for (let i = 1; i < 7; i += 1) {
    const randomNumber = Math.floor(Math.random() * colors.length);
    randomColor += colors[randomNumber];
  }
  return `#${randomColor}`;
};

const openList = (): void => {
  const input = document.getElementById(IDS.create);
  input?.addEventListener('click', () => {
    const ul = document.getElementById(IDS.carNames);
    ul?.removeAttribute('style');
  });
};

const closeList = (): void => {
  const ul = document.getElementById(IDS.carNames);
  ul?.setAttribute('style', 'display:none');
};

const currentWinners: number[] = [];

export { openList, closeList, getRandomName, getRandomColor, currentWinners };
