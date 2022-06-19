
import React from 'react'
import { Stage, Sprite } from '@inlet/react-pixi'


import { MainGame } from './components/MainGame/MainGame'


export function Pixi() {
  
  

  return (
  <Stage width={600} height={600} >
    <Sprite image="sprite/pic.png" x={0} y={0} />
    <Sprite image="sprite/fishkaOrange.png" x={300} y={300} anchor={0.5} />
    <Sprite image="sprite/fishkaBlack.png" x={200} y={300} anchor={0.5} />
    <MainGame/>
  </Stage>
    )
  }



