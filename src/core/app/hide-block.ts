import CLASSES from '../settings/classes';

const hideBlock = (id: string): void => {
  const element = document.getElementById(id);
  element?.classList.add(CLASSES.hidden);
};

export default hideBlock;
