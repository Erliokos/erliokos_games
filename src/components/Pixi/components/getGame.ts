import { EImage, TPeshka, TVector } from "../type"
import { ACCELERATION, TIMEFRAME } from '../constants'

const setPoint = (color: EImage) => {
  switch (color) {
    case EImage.White:
      console.log('white has been point');
      break
    case EImage.Black:
      console.log('white has been point');
      break
    case EImage.Orange:
      console.log('another game rules');
      break
    default: console.log('WTF');
  }
}


const computedGooal = (game: TPeshka[]) => {
  const newGame = game.filter((item) => {
    const { vector } = item
    if ((vector.a.x < 32 && vector.a.y < 32) || (vector.a.x < 32 && vector.a.y > 567) || (vector.a.x > 567 && vector.a.y < 32) || (vector.a.x > 567 && vector.a.y > 567)) {
      setPoint(item.color)
      return false
    }
    return true
  })
  return newGame
}

const collisionOnBoard = (vector: TVector): TVector => {
  if((vector.a.x>569 || vector.a.x<31) && (vector.b.x>569 || vector.b.x<31)) return {a: vector.a, b: {x: (vector.a.x-vector.b.x)+vector.a.x ,y: vector.b.y}}
  if((vector.a.y>569 || vector.a.y<31) && (vector.b.y>569 || vector.b.y<31)) return {a: vector.a, b: {x: vector.b.x ,y: (vector.a.y-vector.b.y)+vector.a.y}}
  return vector
}

const getSpeed = ({ speed, vector }: Pick<TPeshka, 'speed' | 'vector'>) => {

  const newSpeed = speed - ACCELERATION * TIMEFRAME

  const vectorAfterCollison = collisionOnBoard(vector)

  const { x: x1, y: y1 } = vectorAfterCollison.a
  const { x: x2, y: y2 } = vectorAfterCollison.b

  const newPos = {
    x: x1 + (x2 - x1) * TIMEFRAME * newSpeed / Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
    y: y1 + (y2 - y1) * TIMEFRAME * newSpeed / Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  const newVector = { a: newPos, b: { x: (x2 - x1) + (newPos.x - x1) + x1, y: (y2 - y1) + (newPos.y - y1) + y1 } }
  return { speed: newSpeed, pos: newPos, vector: newVector }
}

const computedPosition = (game: TPeshka[]) => {

  const newGame = game.map((item) => {
    const { speed, vector } = item
    if (speed < 0) return item
    return { ...item, ...getSpeed({ speed, vector })}
  })
  return newGame
}


const computedCollision = (game: TPeshka[]): TPeshka[] => {
  const newGame = game.map((item) => {
    return item
  })
  return newGame 
}



export function getGame(game: TPeshka[]) {

  const newGame = computedCollision(computedGooal(computedPosition(game)))
  
  return newGame
}
