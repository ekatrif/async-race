import CLASSES from '../settings/classes';
import IDS from '../settings/ids';
import NAMES from '../settings/names';
import { CAR_COLOR } from '../settings/constants';

const createGarage = (): string => {
  return `<main id="${IDS.garage}"><section class="${CLASSES.winMessage}" style="display: none"></section>
  <section class="${CLASSES.controls}">
  <div class="wrapper">
  <input id="${IDS.create}" type="text" placeholder="${NAMES.createCarPlaceholder}"><ul id="${IDS.carNames}" style="display: none"></ul><input id="${IDS.createColor}" type="color" value="${CAR_COLOR}" data-value="${CAR_COLOR}">
      <button class="${CLASSES.create}">${NAMES.createBtn}</button>
      <span class="${CLASSES.errorCreate}"></span>
    </div>
    <div class="wrapper">
      <input type="text" id="${IDS.update}">
      <input id="${IDS.saveColor}" type="color">
      <button class="${CLASSES.update}">${NAMES.updateBtn}</button>
      <span class="${CLASSES.errorUpdate}"></span>
    </div>
    <div class="wrapper">
      <button class="${CLASSES.race}">${NAMES.raceBtn}</button>
      <button class="${CLASSES.reset}">${NAMES.resetBtn}</button>
      <button class="${CLASSES.generateCars}">${NAMES.generateCarsBtn}</button>
    </div>
  </section>
  <section class="${CLASSES.main}">
    <h1>${NAMES.garageTitle} (<span>0</span>)</h1>
    <h2>Page #<span>1</span></h2>
    <div class="${CLASSES.cars}">
    </div>
  </section>  
  <div class="${CLASSES.pagination}">
    <button class="${CLASSES.prevBtn}">${NAMES.prevBtn}</button>
    <button class="${CLASSES.nextBtn}">${NAMES.nextBtn}</button>
  </div>
</main>`;
};

export default createGarage;
