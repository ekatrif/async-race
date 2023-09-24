const disableBtn = (selector: string, container: Document | HTMLElement = document): void => {
  const btns = container.querySelectorAll(`${selector}`);
  [...btns].forEach((btn) => btn?.setAttribute('disabled', 'true'));
};

const activateBtn = (selector: string, container: Document | HTMLElement = document): void => {
  const btns = container.querySelectorAll(`${selector}`);
  [...btns].forEach((btn) => btn?.removeAttribute('disabled'));
};

export { disableBtn, activateBtn };
