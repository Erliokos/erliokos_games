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

export  function Fishka({impulse, vector, offGame}: TProps) {

  const [x, setX] = useState<number>(90);
  const [y, setY] = useState<number>(40);
  const [speed, setSpeed] = useState<number>(impulse)
  const [vx, setVx] = useState<number>(1)
  const [vy, setVy] = useState<number>(1)
  const [isReverseX, setIsReverseX] = useState<boolean>(true)
  const [isReverseY, setIsReverseY] = useState<boolean>(true)
  
  useTick(() => {
    if(speed>0.05){
      setY((prev: number)=>prev+speed*vy)
      setX((prev: number)=>prev+speed*vx)
      setSpeed((prev: number)=>prev-(prev/(100-(prev+prev)*2)))
      if(x>569 || x<31){
        if(isReverseX) setVx((prev)=>prev*-1)
        setIsReverseX(false)
      }
      else if(!isReverseX) setIsReverseX(true)
        
      if(y>569 || y<31){
        if(isReverseY) setVy((prev)=>prev*-1)
        setIsReverseY(false)
      }
      else if(!isReverseY) setIsReverseY(true)
    }  
  });

 
 
  


  return (
    <Sprite image="sprite/fishkaWhite.png" x={x} y={y} anchor={0.5} />
  )
}
