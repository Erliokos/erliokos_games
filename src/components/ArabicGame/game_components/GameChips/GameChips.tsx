import React, { useEffect, useState } from 'react'
import {Chips} from '../Chips/Chips'
import { EColor } from '../constants'
import { TCoord } from '../Chips/Chips'

const chips = [
  {
    id: '1',
    color: EColor.Black,
    coord: {x: 0, y: 0},
    speed: 0,
    vector: '0'
  },
  {
    id: '2',
    color: EColor.Brown,
    coord: {x: 0, y: -2000},
    speed: 0,
    vector: '0'
  }
]

// const chips = getPositioonChips()

export function GameChips() {
 
const [xx, setxx] = useState(0)

const interval = setTimeout(()=>{
  setxx(prev => prev +=50)
},40)

useEffect(()=>{
  clearInterval(interval)
},[xx])

  return (
    chips.map(item => <Chips
                        key={item.id}
                        color={item.color}
                        coord={{x: xx, y: item.coord.y}}
                        speed={item.speed}
                        vector={item.vector}
                      />)
  )
}
