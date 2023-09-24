import CLASSES from '../../../settings/classes';
import { END_DISTANCE_OFFSET } from '../../../settings/constants';
import { CarInfo } from '../type';
import addWinner from '../../winners/helpers/add-winner';
import { currentWinners } from './helpers';

const startAnimation = (id: number, car: HTMLElement, time: number): CarInfo => {
  const screenWidth = document.body.clientWidth;
  const startPosition = car.getBoundingClientRect().left;
  const distanceAnimation = screenWidth - startPosition - END_DISTANCE_OFFSET;
  const animId = <CarInfo>{};
  const resetBtn = document.querySelector(`.${CLASSES.reset}`);
  let startTime = 0;
  const step = (timestamp: number): void => {
    if (!startTime) {
      startTime = timestamp;
    }
    const progress = (timestamp - startTime) / time;
    const translate: number = progress * distanceAnimation;
    car.setAttribute('style', `transform: translateX(${translate}px)`);
    if (progress < 1) {
      animId.id = window.requestAnimationFrame(step);
    }
    if (progress >= 1 && !resetBtn?.hasAttribute('disabled')) {
      if (!currentWinners.length) {
        currentWinners.push(id);
        addWinner(id, time);
      }
    }
  };
  animId.id = window.requestAnimationFrame(step);
  return animId;
};

const stopAnimation = (id: number): void => {
  window.cancelAnimationFrame(id);
};

export { startAnimation, stopAnimation };
