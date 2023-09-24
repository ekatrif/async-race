import getCar from '../api/get-car';
import CLASSES from '../../../settings/classes';
import IDS from '../../../settings/ids';

const selectHandler = async (e: Event): Promise<void> => {
  const target = e.target as HTMLElement;
  if (target.classList.contains(`${CLASSES.select}`)) {
    const inputName = document.getElementById(IDS.update) as HTMLInputElement;
    const inputColor = document.getElementById(IDS.saveColor) as HTMLInputElement;
    const id = Number(target?.closest(`.${CLASSES.carContainer}`)?.id);
    inputName.setAttribute('car-id', String(id));
    try {
      const info = await getCar(id);
      inputName.value = info.name;
      inputColor?.setAttribute('data-value', info.color);
      inputColor.value = info.color;
    } catch (err) {
      console.error(err);
    }
  }
};

export default selectHandler;
