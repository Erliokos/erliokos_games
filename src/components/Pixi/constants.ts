import { EImage, TPeshka } from "./type";

export const ACCELERATION = 100;
export const TIMEFRAME = 0.016;

export const initialGame: TPeshka[] = [
  {
    id: 'white_1',
    pos: {x: 400, y: 400},
    speed: 600,
    color: EImage.White,
    vector: {a: {x:300,y:300},b: {x:450,y:310}},
  },

]
