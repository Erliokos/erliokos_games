import { useTick } from '@inlet/react-pixi'
import React, { useState } from 'react'
import { initialGame } from '../../constants'
import { TPeshka } from '../../type'
import { getGame } from '../getGame'
import Peshka from '../Pehka/Peshka'



export function MainGame() {
  const [gameState, setGameState] = useState<TPeshka[]>(initialGame)
  // const [frame, setFrame] = useState(1)

  useTick(()=>{
    setGameState(prev => getGame(prev))
  })
  
  // const interval = setTimeout(()=>{
  //   setFrame((prev)=>prev+1)
  //   setGameState(getGame(gameState))
  // },16)

  // useEffect(()=>{
  //   if(frame>2) clearInterval(interval)
  // },[frame])

  return (
    <>
    {gameState.map(item => <Peshka key={item.id} {...item}/>)}
    </>
  )
}
