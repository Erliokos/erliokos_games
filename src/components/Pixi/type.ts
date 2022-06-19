export type TPeshka = {
  id: string
  pos: TPosition
  speed: number
  color: EImage
  vector: TVector
}
export enum EImage  {
  White = 'sprite/fishkaWhite.png',
  Black = 'sprite/fishkaBlack.png',
  Orange = 'sprite/fishkaOrange.png',
  Circle = 'sprite/cercle.png'
}
export type TPosition = {
  x: number
  y: number
}

export type TVector = {
  a: TPosition
  b: TPosition
}

