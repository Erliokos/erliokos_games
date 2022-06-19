import { Sprite } from '@inlet/react-pixi'
import React from 'react'
import { TPeshka } from '../../type'


export default function Peshka(props: TPeshka) {

  const {color, pos} = props
  
  return (
    <Sprite image={color} x={pos.x} y={pos.y} anchor={0.5}/>
  )
}
