import createHTML from '../create-html/create-page';
import { openList } from '../pages/garage/helpers/helpers';
import saveColor from '../create-html/save-color';
import { createOptions } from '../create-html/create-options';
import addNavListeners from './add-nav-listeners';
import IDS from '../settings/ids';

const renderApp = (): void => {
  // Create HTML layout
  createHTML();

  // Add listener for input dropdown
  openList();

  // Add listener to save user selected color
  saveColor(IDS.createColor);
  saveColor(IDS.saveColor);

  // Render Options for car creating
  createOptions();

  // Add listeners to navigation buttons
  addNavListeners();
};

export default renderApp;
