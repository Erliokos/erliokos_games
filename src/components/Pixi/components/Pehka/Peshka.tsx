import { Sprite } from '@inlet/react-pixi'
import React from 'react'
import { TPeshka } from '../../type'


export default function Peshka(props: TPeshka) {

  const {color, vector} = props
  
  return (
    <Sprite image={color} x={vector.a.x} y={vector.a.y} anchor={0.5}/>
  )
}
