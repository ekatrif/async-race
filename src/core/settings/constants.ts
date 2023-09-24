import { Settings, Headers } from './types';

const CARS_PER_PAGE = 7;
const WINNERS_PER_PAGE = 10;
const START_PAGE = 1;
const CARS_TO_GENERATE = 100;
const CARS_TO_CREATE = 10;
const CAR_COLOR = '#FF0000';
const END_DISTANCE_OFFSET = 6 * 16; // Depends of padding in layout.css
const BASEURL = 'http://127.0.0.1:3000';
const ORDER = {
  currentSortBy: 'wins',
  id: 'ASC',
  wins: 'DESC',
  time: 'ASC',
};
const FLAG_IMAGE = '<img src="./img/flag.png" alt="flag">';
const HEADERS: Headers = ['Number', 'Car', 'Name', 'Wins', 'Best time (sec)'];
const ENDPOINTS: Settings = {
  garage: `${BASEURL}/garage`,
  engine: `${BASEURL}/engine`,
};

export {
  CARS_PER_PAGE,
  WINNERS_PER_PAGE,
  START_PAGE,
  CARS_TO_GENERATE,
  CARS_TO_CREATE,
  CAR_COLOR,
  END_DISTANCE_OFFSET,
  ORDER,
  FLAG_IMAGE,
  HEADERS,
  ENDPOINTS,
  BASEURL,
};
