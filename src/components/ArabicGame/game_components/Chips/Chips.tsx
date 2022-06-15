import React from 'react'
import { EColor } from '../constants'
import * as Styled from './Style'

export type TCoord = {
  x: number,
  y: number
}

type TProps = {
  color: EColor
  speed?: number
  coord: TCoord
  vector: string
}

export function Chips({color, speed, coord}: TProps) {


  return (
    <Styled.Chip color={color}
      transform={`translate(${coord.x},${coord.y})`} d='M340.62 27955.4c-181.14,1.79 -327.39,149.2 -327.39,330.72 0,182.51 147.84,330.54 330.35,330.72l3.74 0c181.14,-1.79 327.39,-149.2 327.39,-330.72 0,-182.51 -147.84,-330.54 -330.35,-330.72l-3.74 0z'
    />
  )
}

