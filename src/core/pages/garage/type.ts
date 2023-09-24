type CarBody = {
  name: string;
  color: string;
};

type Car = {
  name: string;
  color: string;
  id: number;
};

type CarData = {
  velocity: string;
  distance: string;
};

type CarInfo = {
  [key: number]: number;
  id: number;
  name: string;
  color: string;
  wins: number;
  time: number;
};

export { CarBody, Car, CarData, CarInfo };
