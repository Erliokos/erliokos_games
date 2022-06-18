
import React from 'react'
import { Stage, Sprite } from '@inlet/react-pixi'
import { Fishka } from './components/FWhite/Fishka'

export function Pixi() {

  return (
  <Stage width={600} height={600} >
    <Sprite image="sprite/pic.png" x={0} y={0} />
    <Sprite image="sprite/fishkaOrange.png" x={300} y={300} anchor={0.5} />
    <Sprite image="sprite/fishkaBlack.png" x={200} y={300} anchor={0.5} />
    <Fishka impulse={15} vector={{start:{x:0,y:0},end:{x:100,y:100}}} offGame={false} xx={90} yy={40}/>
  </Stage>
    )
  }



