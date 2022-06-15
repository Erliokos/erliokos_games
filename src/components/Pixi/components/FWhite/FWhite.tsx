import React, { useState } from 'react'
import { Sprite, useTick } from '@inlet/react-pixi'

type TVector = {
  start: {x: number, y: number},
  end: {x: number, y: number}
}

type TProps = {
  impulse: number,
  vector: TVector,
  offGame: boolean
}

export  function FWhite({impulse, vector, offGame}: TProps) {

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(impulse)
  
  useTick(() => {
    setY((prev: number)=>prev+speed)
    setX((prev: number)=>prev+speed)
    setSpeed((prev: number)=>prev-(prev/50))
  });

  return (
    <Sprite image="sprite/fishkaWhite.png" x={x} y={y} anchor={0.5} />
  )
}
