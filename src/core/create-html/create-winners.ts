import NAMES from '../settings/names';
import IDS from '../settings/ids';
import CLASSES from '../settings/classes';

const createWinners = (): string => {
  return `    <main id="${IDS.winners}">
  <section class="${CLASSES.main}">
    <h1>Winners (<span></span>)</h1>
    <h2>Page #<span>1</span></h2>
  </section>  
  <section class="${CLASSES.winners}">
    <table width="100%" class="${CLASSES.table}"></table>
  </section>
  <div class="${CLASSES.pagination}">
    <button class="${CLASSES.prevBtn}">${NAMES.prevBtn}</button>
    <button class="${CLASSES.nextBtn}">${NAMES.nextBtn}</button>
  </div>
</main>`;
};

export default createWinners;
