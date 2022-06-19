import { EImage, TPeshka } from "./type";

export const ACCELERATION = 100;
export const TIMEFRAME = 0.016;

export const initialGame: TPeshka[] = [
  {
    id: 'white_1',
    speed: 600,
    color: EImage.White,
    vector: {a: {x:300,y:300},b: {x:450,y:310}},
  },
  {
    id: 'white_2',
    speed: 0,
    color: EImage.Black,
    vector: {a: {x:147,y:419},b: {x:138,y:419}},
  },

]
