import NAMES from '../../../settings/names';
import CLASSES from '../../../settings/classes';
import createSvgCar from '../../common/create-car-image';
import { FLAG_IMAGE } from '../../../settings/constants';

const createCarHTML = (id: number, name: string, color: string): string => {
  const svg = createSvgCar(color);
  return `<div class="${CLASSES.carContainer}" id="${id}">
  <div class="${CLASSES.carHeader}">
    <button class="${CLASSES.select}">${NAMES.selectBtn}</button>
    <button class="${CLASSES.remove}">${NAMES.removeBtn}</button>
    <span class="${CLASSES.carTitle}">${name}</span>
  </div>
  <div class="${CLASSES.carBody}">
    <button class="${CLASSES.carStart}">${NAMES.startBtn}</button>
    <button class="${CLASSES.carStop}" disabled="true">${NAMES.stopBtn}</button>
    <div class="${CLASSES.carImage}">${svg}</div>
    <div class="${CLASSES.carFlag}">${FLAG_IMAGE}</div>
  </div>
</div>`;
};

export default createCarHTML;
