import CLASSES from '../../../settings/classes';

const showMessage = (winnerName: string, timeWin: number): void => {
  const messageContainer = document.querySelector(`.${CLASSES.winMessage}`);
  messageContainer?.removeAttribute('style');
  if (messageContainer) messageContainer.innerHTML = `${winnerName} went first (${timeWin}s) !`;
};

const hideMessage = (): void => {
  const messageContainer = document.querySelector(`.${CLASSES.winMessage}`);
  if (messageContainer) {
    messageContainer.innerHTML = ``;
    messageContainer.setAttribute('style', 'display: none');
  }
};

export { showMessage, hideMessage };
